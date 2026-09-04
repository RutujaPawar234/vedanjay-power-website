import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../data/homeData.js';
import BrandLogo from './BrandLogo.jsx';
import ThemeToggle from './ThemeToggle.jsx';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const onHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the drawer on route change.
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  // Lock body scroll + close on Escape while the drawer is open.
  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  const transparent = onHome && !scrolled && !menuOpen;

  return (
    <header className={`vp-header ${transparent ? 'vp-header--transparent' : 'vp-header--solid'}`}>
      <div className="container vp-header__inner">
        <NavLink to="/" className="vp-brand" aria-label="Vedanjay Power — Home">
          <BrandLogo />
        </NavLink>

        {/* Desktop nav */}
        <nav className="vp-nav d-none d-xl-flex" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => `vp-nav__link ${isActive ? 'is-active' : ''}`}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="vp-header__actions">
          <ThemeToggle />
          <button
            className="vp-burger d-xl-none"
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-controls="vpMobileNav"
            aria-expanded={menuOpen}
            aria-label="Open navigation menu"
          >
            <i className="bi bi-list" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Mobile drawer (React-controlled, no Bootstrap JS) */}
      <div
        className={`vp-drawer__backdrop ${menuOpen ? 'is-open' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
      <aside
        id="vpMobileNav"
        className={`vp-drawer ${menuOpen ? 'is-open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <div className="vp-drawer__head">
          <BrandLogo />
          <button
            type="button"
            className="vp-drawer__close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
          >
            <i className="bi bi-x-lg" aria-hidden="true" />
          </button>
        </div>
        <nav className="vp-nav-mobile" aria-label="Mobile primary">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => `vp-nav-mobile__link ${isActive ? 'is-active' : ''}`}
            >
              {l.label}
              <i className="bi bi-chevron-right" aria-hidden="true" />
            </NavLink>
          ))}
        </nav>
      </aside>
    </header>
  );
}
