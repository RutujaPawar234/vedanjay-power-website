import { useEffect, useState } from 'react';
import { SERVICES } from '../../data/servicesData.js';

/**
 * Sticky, interactive service navigation. Clicking a chip smooth-scrolls to
 * that service section; a scroll-spy highlights the section currently in view.
 * Horizontally scrollable on mobile (no layout break). Keyboard accessible.
 */
export default function ServiceNav() {
  const [active, setActive] = useState(SERVICES[0]?.id);

  useEffect(() => {
    const sections = SERVICES.map((s) => document.getElementById(s.id)).filter(Boolean);
    if (!sections.length || !('IntersectionObserver' in window)) return undefined;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
    setActive(id);
  };

  return (
    <nav className="svc-nav" aria-label="Services">
      <div className="container">
        <ul className="svc-nav__list">
          {SERVICES.map((s, i) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={`svc-nav__link ${active === s.id ? 'is-active' : ''}`}
                aria-current={active === s.id ? 'true' : undefined}
                onClick={(e) => handleClick(e, s.id)}
              >
                <span className="svc-nav__num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <i className={`bi ${s.icon}`} aria-hidden="true" />
                <span className="svc-nav__label">{s.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
