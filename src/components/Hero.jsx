import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { HERO_SCENES } from '../data/homeData.js';
import { PORTFOLIO_TOTAL_MW } from '../data/portfolioData.js';
import HeroScene from './HeroScene.jsx';
import HeroFX from './HeroFX.jsx';

const INTERVAL = 3200;

export default function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const timer = useRef(null);

  const count = HERO_SCENES.length;
  const go = useCallback((i) => setActive(() => (i + count) % count), [count]);
  const next = useCallback(() => go(active + 1), [active, go]);
  const prev = useCallback(() => go(active - 1), [active, go]);

  // Track reduced-motion preference (disables auto-advance + Ken Burns).
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  // Auto-advance unless paused or reduced-motion.
  useEffect(() => {
    if (paused || reduced) return undefined;
    timer.current = setTimeout(next, INTERVAL);
    return () => clearTimeout(timer.current);
  }, [active, paused, reduced, next]);

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
  };

  const scene = HERO_SCENES[active];
  const activeAlign = scene?.align === 'right' ? 'right' : 'left';

  return (
    <section
      className={`hero hero--${activeAlign}`}
      aria-roledescription="carousel"
      aria-label="Vedanjay Power highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onKeyDown={onKeyDown}
    >
      {/* Scene layers — realistic photo (when present) over a premium
          CSS/SVG fallback. Drop assets into /public/images/hero to override. */}
      <div className="hero__scenes" aria-hidden="true">
        {HERO_SCENES.map((s, i) => (
          <div key={s.id} className={`hero__scene ${i === active ? 'is-active' : ''}`}>
            <HeroScene theme={s.theme} />
            <img
              className="hero__img"
              src={s.media}
              alt=""
              loading={i === 0 ? 'eager' : 'lazy'}
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>
        ))}
        <div className="hero__overlay" />
        <HeroFX />
      </div>

      {/* Live portfolio badge (real managed QCA/F&S figure) */}
      <div className="hero__badge" aria-hidden="true">
        <span className="hero__badge-dot" />
        <span className="hero__badge-text">
          <strong>{PORTFOLIO_TOTAL_MW} MW</strong>
          Renewable portfolio under QCA / F&amp;S
        </span>
      </div>

      {/* Slide progress indicator */}
      <div className="hero__progress" aria-hidden="true">
        <span
          key={`${active}-${paused}`}
          className="hero__progress-fill"
          style={{ animationDuration: `${INTERVAL}ms`, animationPlayState: paused ? 'paused' : 'running' }}
        />
      </div>

      {/* Content */}
      <div className="container hero__content">
        <div className="hero__text">
          <span className="eyebrow eyebrow--light">Vedanjay Power Pvt. Ltd.</span>
          {HERO_SCENES.map((s, i) => (
            <div
              key={s.id}
              className={`hero__copy ${i === active ? 'is-active' : ''}`}
              aria-hidden={i !== active}
            >
              {i === active ? (
                <h1 className="hero__headline">{s.headline}</h1>
              ) : (
                <p className="hero__headline" aria-hidden="true">{s.headline}</p>
              )}
              <p className="hero__lead">{s.text}</p>
            </div>
          ))}

          <div className="hero__cta">
            <Link to={scene.cta.to} className="btn-vp btn-vp-gold">
              {scene.cta.label}
              <i className="bi bi-arrow-right hero__cta-arrow" aria-hidden="true" />
            </Link>
            <Link to="/contact" className="btn-vp btn-vp-ghost">
              <i className="bi bi-envelope" aria-hidden="true" />
              Contact Us
            </Link>
          </div>
        </div>

      </div>

      <a href="#intro" className="hero__scroll" aria-label="Scroll to introduction">
        <i className="bi bi-chevron-down" aria-hidden="true" />
      </a>
    </section>
  );
}
