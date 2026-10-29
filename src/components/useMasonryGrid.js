import { useLayoutEffect, useRef } from 'react';

// Measure the card, rather than its grid cell, so media and text can resize freely.
export default function useMasonryGrid() {
  const gridRef = useRef(null);

  useLayoutEffect(() => {
    const grid = gridRef.current;
    if (!grid) return undefined;
    let frame;
    const layout = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const styles = getComputedStyle(grid);
        const gap = parseFloat(styles.rowGap) || 0;
        const row = parseFloat(styles.gridAutoRows) || 1;
        Array.from(grid.children).forEach(item => {
          const card = item.firstElementChild;
          if (!card) return;
          const span = Math.ceil((card.offsetHeight + gap) / (row + gap));
          item.style.gridRowEnd = `span ${span}`;
        });
      });
    };
    const observer = new ResizeObserver(layout);
    Array.from(grid.children).forEach(item => {
      if (item.firstElementChild) observer.observe(item.firstElementChild);
    });
    layout();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  });

  return gridRef;
}
