import { useEffect } from 'react';

/**
 * Adds `.is-visible` to every `.reveal*` element inside the given ref (or the
 * whole document if no ref) once it scrolls into view. One-shot per element.
 * Lightweight replacement for an animation library.
 */
export default function useReveal(rootRef) {
  useEffect(() => {
    const root = rootRef?.current ?? document;
    const nodes = root.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right, .reveal-scale'
    );
    if (!nodes.length) return;

    if (!('IntersectionObserver' in window)) {
      nodes.forEach((n) => n.classList.add('is-visible'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [rootRef]);
}
