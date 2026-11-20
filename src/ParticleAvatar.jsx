import { useEffect, useRef, useState } from "react";

const padding = 30;
const idleFrameInterval = 1000 / 30;

export default function ParticleAvatar({
  src,
  width = 320,
  density = 5,
  dotSize = 1.6,
  bg = "transparent",
}) {
  const canvasRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return undefined;

    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    const motion = { forming: false, flowTime: 0, revealAlpha: 0 };
    let thumbnail = null;
    let particles = [];
    let frameId = null;
    let lastIdleFrame = -Infinity;
    let onScreen = true;

    function releaseParticles() {
      particles = [];
      if (thumbnail) {
        thumbnail.width = 0;
        thumbnail.height = 0;
        thumbnail = null;
      }
    }

    function stopAnimation() {
      if (frameId !== null) cancelAnimationFrame(frameId);
      frameId = null;
    }

    function syncAnimation() {
      if (!onScreen || document.hidden || particles.length === 0) {
        stopAnimation();
      } else if (frameId === null) {
        frameId = requestAnimationFrame(animate);
      }
    }

    function animate(timestamp) {
      frameId = null;
      if (motion.forming || timestamp - lastIdleFrame >= idleFrameInterval - 1) {
        drawFrame(ctx, canvas, thumbnail, particles, motion, dpr, dotSize, bg);
        lastIdleFrame = timestamp;
        if (motion.revealAlpha === 1) releaseParticles();
      }
      syncAnimation();
    }

    const observer = typeof IntersectionObserver === "function"
      ? new IntersectionObserver(([entry]) => {
        onScreen = entry.isIntersecting;
        syncAnimation();
      })
      : null;
    if (observer) {
      onScreen = false;
      observer.observe(canvas);
    }

    const reveal = () => {
      motion.forming = true;
      syncAnimation();
    };
    canvas.addEventListener("click", reveal);
    document.addEventListener("visibilitychange", syncAnimation);

    const image = new Image();
    image.crossOrigin = "anonymous";
    image.onload = () => {
      canvas.width = Math.round((width + padding * 2) * dpr);
      canvas.height = canvas.width;

      thumbnail = document.createElement("canvas");
      thumbnail.width = Math.floor(width * dpr);
      thumbnail.height = thumbnail.width;
      const thumbnailCtx = thumbnail.getContext("2d");
      if (!thumbnailCtx) {
        releaseParticles();
        return;
      }
      thumbnailCtx.drawImage(image, 0, 0, thumbnail.width, thumbnail.height);
      const pixels = thumbnailCtx.getImageData(0, 0, thumbnail.width, thumbnail.height);
      particles = sampleParticles(pixels, canvas.width / dpr, density, dpr);
      setReady(true);
      syncAnimation();
    };
    image.onerror = () => console.error("Failed to load image:", src);
    image.src = src;

    return () => {
      image.onload = null;
      image.onerror = null;
      image.removeAttribute("src");
      observer?.disconnect();
      document.removeEventListener("visibilitychange", syncAnimation);
      canvas.removeEventListener("click", reveal);
      stopAnimation();
      releaseParticles();
      canvas.width = 0;
      canvas.height = 0;
    };
  }, [src, width, density, bg, dotSize]);

  return (
    <div
      style={{
        display: "inline-block",
        lineHeight: 0,
        userSelect: "none",
        touchAction: "manipulation",
        cursor: ready ? "pointer" : "default",
        borderRadius: "50%",
        overflow: "hidden",
      }}
      aria-label="Interactive particle avatar"
      role="img"
      title="Click to reveal"
    >
      <canvas ref={canvasRef} style={{ width, height: width }} />
    </div>
  );
}

function sampleParticles({ data, width, height }, size, density, dpr) {
  const points = [];
  const step = Math.max(2, Math.floor(density * dpr));
  const center = width / 2;
  const offset = padding * dpr;

  for (let y = 0; y < height; y += step) {
    for (let x = 0; x < width; x += step) {
      const dx = x - center;
      const dy = y - center;
      if (dx * dx + dy * dy > center * center) continue;

      const index = (y * width + x) * 4;
      const alpha = data[index + 3];
      if (alpha > 40) {
        points.push({
          targetX: x + offset,
          targetY: y + offset,
          color: `rgba(${data[index]}, ${data[index + 1]}, ${data[index + 2]}, ${alpha / 255})`,
        });
      }
    }
  }

  const stride = Math.max(1, Math.ceil(points.length / 3200));
  return points.filter((_, index) => index % stride === 0).map((point) => ({
    ...point,
    x: Math.random() * size,
    y: Math.random() * size,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
  }));
}

function drawFrame(ctx, canvas, thumbnail, particles, motion, dpr, dotSize, bg) {
  if (bg === "transparent") {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  } else {
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  const offset = padding * dpr;
  const center = canvas.width / 2;
  ctx.save();
  ctx.beginPath();
  ctx.arc(center, center, center - offset, 0, Math.PI * 2);
  ctx.clip();

  motion.flowTime += 0.005;
  const maxSpeed = (motion.forming ? 1.4 : 0.6) * dpr;
  const snapDistance = Math.max(1.2 * dpr, dotSize * dpr * 1.4);
  const radius = Math.max(1, dotSize * dpr);
  let settled = 0;

  for (let i = 0; i < particles.length; i++) {
    const particle = particles[i];

    if (motion.forming) {
      const dx = particle.targetX - particle.x;
      const dy = particle.targetY - particle.y;
      if (dx * dx + dy * dy < snapDistance * snapDistance) {
        particle.x = particle.targetX;
        particle.y = particle.targetY;
        particle.vx = 0;
        particle.vy = 0;
        settled++;
      } else {
        particle.vx = (particle.vx + dx * 0.22) * 0.72;
        particle.vy = (particle.vy + dy * 0.22) * 0.72;
      }
    } else {
      const angle = pseudoNoise(i * 0.013, motion.flowTime) * Math.PI * 2;
      particle.vx = particle.vx * 0.98 + Math.cos(angle) * 0.02 * dpr;
      particle.vy = particle.vy * 0.98 + Math.sin(angle) * 0.02 * dpr;
    }

    const speed = Math.hypot(particle.vx, particle.vy);
    if (speed > maxSpeed) {
      particle.vx *= maxSpeed / speed;
      particle.vy *= maxSpeed / speed;
    }
    particle.x += particle.vx;
    particle.y += particle.vy;

    ctx.beginPath();
    ctx.arc(particle.x, particle.y, radius, 0, Math.PI * 2);
    ctx.fillStyle = particle.color;
    ctx.fill();
  }

  if (motion.forming) {
    const targetAlpha = settled / particles.length >= 0.85 ? 1 : 0;
    motion.revealAlpha += (targetAlpha - motion.revealAlpha) * 0.03;
    if (motion.revealAlpha >= 0.99) motion.revealAlpha = 1;
    if (motion.revealAlpha > 0.01) {
      ctx.globalAlpha = motion.revealAlpha;
      ctx.drawImage(thumbnail, offset, offset);
    }
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
