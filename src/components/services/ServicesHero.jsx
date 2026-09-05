import { Link } from 'react-router-dom';
import HeroScene from '../HeroScene.jsx';

export default function ServicesHero() {
  return (
    <section className="about-hero" aria-label="Vedanjay Power services">
      <div className="about-hero__bg" aria-hidden="true">
        <HeroScene theme="grid" />
        {/* Optional real image override: drop /images/services/hero.jpg */}
        <img
          className="about-hero__img"
          src="/images/services/hero.jpg"
          alt=""
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
        <span className="about-hero__overlay" />
      </div>

      <div className="container about-hero__content">
        <nav className="breadcrumb-vp" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <i className="bi bi-chevron-right" aria-hidden="true" />
          <span aria-current="page">Services</span>
        </nav>

        <span className="eyebrow eyebrow--light">Our Services</span>
        <h1 className="about-hero__title">Integrated Solutions Across the Power Value Chain</h1>
        <p className="about-hero__lead">
          Vedanjay Power provides integrated technical, commercial, and operational solutions
          across renewable energy, Forecasting &amp; Scheduling, QCA services, open-access power,
          metering, telemetry, electrical infrastructure, transmission, grid studies, and consultancy.
        </p>
      </div>
    </section>
  );
}
