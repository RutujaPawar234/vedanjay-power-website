import { useEffect, useRef, useState } from 'react';

/**
 * Counts up to `end` once the element becomes visible.
 * Returns [displayValue, ref]. Respects prefers-reduced-motion.
 */
export default function useCountUp(end, { duration = 1600, decimals = 0 } = {}) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const run = () => {
      if (started.current) return;
      started.current = true;
      if (prefersReduced) {
        setValue(end);
        return;
      }
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1);
        // easeOutCubic
        const eased = 1 - Math.pow(1 - p, 3);
        setValue(end * eased);
        if (p < 1) requestAnimationFrame(tick);
        else setValue(end);
      };
      requestAnimationFrame(tick);
    };

    if (!('IntersectionObserver' in window)) {
      run();
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          run();
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [end, duration]);

  const display = Number(value).toFixed(decimals);
  return [display, ref];
}
