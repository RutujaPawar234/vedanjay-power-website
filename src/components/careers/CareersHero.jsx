import { Link } from 'react-router-dom';
import HeroScene from '../HeroScene.jsx';

export default function CareersHero() {
  return (
    <section className="about-hero" aria-label="Careers at Vedanjay Power">
      <div className="about-hero__bg" aria-hidden="true">
        <HeroScene theme="wind" />
        <img
          className="about-hero__img"
          src="/images/careers/hero.jpg"
          alt=""
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
        <span className="about-hero__overlay" />
      </div>

      <div className="container about-hero__content">
        <nav className="breadcrumb-vp" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <i className="bi bi-chevron-right" aria-hidden="true" />
          <span aria-current="page">Careers</span>
        </nav>

        <span className="eyebrow eyebrow--light">Careers</span>
        <h1 className="about-hero__title">Build Your Career in the Future of Energy</h1>
        <p className="about-hero__lead">
          Vedanjay Power works across renewable energy, Forecasting &amp; Scheduling, open-access
          power, electrical infrastructure, grid-related services, and power-sector operations.
        </p>
        <div className="hero__cta">
          <a href="#openings" className="btn-vp btn-vp-gold">
            <i className="bi bi-briefcase" aria-hidden="true" /> View Open Positions
          </a>
          <Link to="/contact" className="btn-vp btn-vp-ghost">
            <i className="bi bi-envelope" aria-hidden="true" /> Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
