import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../data/homeData.js';
import BrandLogo from './BrandLogo.jsx';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const onHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const transparent = onHome && !scrolled;

  const closeOffcanvas = () => {
    const el = document.getElementById('vpMobileNav');
    if (el && window.bootstrap) {
      const inst = window.bootstrap.Offcanvas.getInstance(el);
      inst?.hide();
    }
  };

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
          {/* Mobile menu toggle */}
          <button
            className="vp-burger d-xl-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#vpMobileNav"
            aria-controls="vpMobileNav"
            aria-label="Open navigation menu"
          >
            <i className="bi bi-list" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Mobile offcanvas */}
      <div
        className="offcanvas offcanvas-end vp-offcanvas"
        tabIndex="-1"
        id="vpMobileNav"
        aria-labelledby="vpMobileNavLabel"
      >
        <div className="offcanvas-header">
          <span className="vp-brand" id="vpMobileNavLabel">
            <BrandLogo />
          </span>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
        <div className="offcanvas-body">
          <nav className="vp-nav-mobile" aria-label="Mobile primary">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                onClick={closeOffcanvas}
                className={({ isActive }) => `vp-nav-mobile__link ${isActive ? 'is-active' : ''}`}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
