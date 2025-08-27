import React, { useEffect, useRef, useState } from "react";

export default function ParticleAvatar({
  src,
  width = 320,
  density = 5,
  dotSize = 1.6,
  bg = "transparent",
}) {
  const canvasRef = useRef(null);
  const offscreenRef = useRef(document.createElement("canvas"));
  const rafRef = useRef(0);
  const particlesRef = useRef([]);
  const targetsRef = useRef([]);
  const flowTRef = useRef(0);
  const revealAlphaRef = useRef(0);
  const modeRef = useRef("flow");
  const padRef = useRef(24);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const onClick = () => {
      modeRef.current = "form";
    };
    canvas.addEventListener("click", onClick);
    return () => canvas.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;

    img.onload = () => {
      const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      const off = offscreenRef.current;
      const offCtx = off.getContext("2d");

      const scaledHeight = width; 
      const pad = 30;
      padRef.current = pad;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${scaledHeight}px`;
      canvas.width = (width + pad * 2) * dpr;
      canvas.height = (scaledHeight + pad * 2) * dpr;

      off.width = Math.floor(width * dpr);
      off.height = Math.floor(scaledHeight * dpr);
      offCtx.clearRect(0, 0, off.width, off.height);
      offCtx.drawImage(img, 0, 0, off.width, off.height);

      const imgData = offCtx.getImageData(0, 0, off.width, off.height);

      const pts = [];
      const step = Math.max(2, Math.floor(density * dpr));
      const centerX = off.width / 2;
      const centerY = off.height / 2;
      const radius = off.width / 2;

      for (let y = 0; y < imgData.height; y += step) {
        for (let x = 0; x < imgData.width; x += step) {
          const dx = x - centerX;
          const dy = y - centerY;
          if (dx * dx + dy * dy > radius * radius) continue; // enforce circle mask
          const idx = (y * imgData.width + x) * 4;
          const a = imgData.data[idx + 3];
          if (a > 40) {
            const r = imgData.data[idx];
            const g = imgData.data[idx + 1];
            const b = imgData.data[idx + 2];
            const tx = x / dpr + pad;
            const ty = y / dpr + pad;
            pts.push({ tx, ty, r, g, b, a });
          }
        }
      }

      const MAX = 3200;
      const chosen =
        pts.length > MAX
          ? pts.filter((_, i) => i % Math.ceil(pts.length / MAX) === 0)
          : pts;

      targetsRef.current = chosen;

      const P = chosen.map(({ r, g, b, a }) => {
        const x = Math.random() * (canvas.width / dpr);
        const y = Math.random() * (canvas.height / dpr);
        return {
          x,
          y,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          color: `rgba(${r}, ${g}, ${b}, ${a / 255})`,
        };
      });

      particlesRef.current = P;
      flowTRef.current = 0;
      revealAlphaRef.current = 0;
      modeRef.current = "flow";
      setReady(true);

      cancelAnimationFrame(rafRef.current);
      const loop = () => {
        drawFrame(
          ctx,
          canvas,
          dpr,
          bg,
          dotSize,
          particlesRef,
          targetsRef,
          flowTRef,
          modeRef,
          off,
          revealAlphaRef,
          padRef
        );
        rafRef.current = requestAnimationFrame(loop);
      };
      rafRef.current = requestAnimationFrame(loop);
    };

    img.onerror = () => {
      console.error("Failed to load image:", src);
    };

    return () => cancelAnimationFrame(rafRef.current);
  }, [src, width, density, bg, dotSize]);

  return (
    <div
      style={{
        display: "inline-block",
        lineHeight: 0,
        userSelect: "none",
        touchAction: "manipulation",
        cursor: ready ? "pointer" : "default",
        borderRadius: "50%", // crop container circle
        overflow: "hidden",
      }}
      aria-label="Interactive particle avatar"
      role="img"
      title="Click to reveal"
    >
      <canvas ref={canvasRef} />
    </div>
  );
}

function drawFrame(
  ctx,
  canvas,
  dpr,
  bg,
  dotSize,
  particlesRef,
  targetsRef,
  flowTRef,
  modeRef,
  offscreenImageCanvas,
  revealAlphaRef,
  padRef
) {
  const P = particlesRef.current;
  const T = targetsRef.current;
  if (!P || !T || T.length === 0) return;

  const N = Math.min(P.length, T.length);

  if (bg === "transparent") {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  } else {
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  // apply circular mask
  ctx.save();
  const radius = (canvas.width - padRef.current * 2 * dpr) / 2;
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
  ctx.clip();

  flowTRef.current += 0.005;
  const flowT = flowTRef.current;
  const mode = modeRef.current;

  const snapTol = Math.max(1.2 * dpr, dotSize * dpr * 1.4);
  const k = mode === "form" ? 0.22 : 0.02;
  const damping = mode === "form" ? 0.72 : 0.96;
  const maxV = mode === "form" ? 1.4 * dpr : 0.6 * dpr;

  let settledCount = 0;

  for (let i = 0; i < N; i++) {
    const p = P[i];
    const t = T[i];

    if (mode === "form") {
      const tx = t.tx * dpr;
      const ty = t.ty * dpr;
      const dx = tx - p.x;
      const dy = ty - p.y;
      const dist2 = dx * dx + dy * dy;

      if (dist2 < snapTol * snapTol) {
        p.x = tx;
        p.y = ty;
        p.vx = 0;
        p.vy = 0;
        settledCount++;
      } else {
        p.vx = (p.vx + dx * k) * damping;
        p.vy = (p.vy + dy * k) * damping;
      }
    } else {
      const angle = pseudoNoise(i * 0.013, flowT) * Math.PI * 2;
      p.vx = p.vx * 0.98 + Math.cos(angle) * 0.02 * dpr;
      p.vy = p.vy * 0.98 + Math.sin(angle) * 0.02 * dpr;
    }

    const mag = Math.hypot(p.vx, p.vy) || 1;
    if (mag > maxV) {
      p.vx = (p.vx / mag) * maxV;
      p.vy = (p.vy / mag) * maxV;
    }

    p.x += p.vx;
    p.y += p.vy;
  }

  const r = Math.max(1, dotSize * dpr);
  for (let i = 0; i < N; i++) {
    const p = P[i];
    ctx.beginPath();
    ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
    ctx.fillStyle = T[i].a > 0 ? P[i].color : "rgba(0,0,0,0.6)";
    ctx.fill();
  }

  if (mode === "form" && offscreenImageCanvas) {
    const settledFrac = settledCount / N;
    const targetAlpha = settledFrac >= 0.85 ? 1 : 0;
    revealAlphaRef.current += (targetAlpha - revealAlphaRef.current) * 0.01;

    const a = Math.max(0, Math.min(1, revealAlphaRef.current));
    if (a > 0.01) {
      ctx.save();
      ctx.globalAlpha = a;
      ctx.drawImage(offscreenImageCanvas, padRef.current * dpr, padRef.current * dpr);
      ctx.restore();
    }
  } else {
    revealAlphaRef.current = Math.max(0, revealAlphaRef.current - 0.06);
  }

  ctx.restore();
}

function pseudoNoise(x, t) {
  return (
    0.5 +
    0.5 * Math.sin(x * 2.3 + t * 1.7) * 0.6 +
    0.5 * Math.sin(x * 1.1 + t * 0.9) * 0.4
  );
}
