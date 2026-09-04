import { Link } from 'react-router-dom';
import HeroScene from '../HeroScene.jsx';

export default function AboutHero() {
  return (
    <section className="about-hero" aria-label="About Vedanjay Power">
      <div className="about-hero__bg" aria-hidden="true">
        <HeroScene theme="ecosystem" />
        {/* Optional real image override: drop /images/about/hero.jpg */}
        <img
          className="about-hero__img"
          src="/images/about/hero.jpg"
          alt=""
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
        <span className="about-hero__overlay" />
      </div>

      <div className="container about-hero__content">
        <nav className="breadcrumb-vp" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <i className="bi bi-chevron-right" aria-hidden="true" />
          <span aria-current="page">About Us</span>
        </nav>

        <span className="eyebrow eyebrow--light">About Vedanjay Power</span>
        <h1 className="about-hero__title">Powering Progress. Connecting to a More Sustainable Future.</h1>
        <p className="about-hero__lead">
          Vedanjay Power Pvt. Ltd. is a diversified power-sector solutions company supporting
          renewable-energy generators, commercial and industrial consumers, and other
          stakeholders across India.
        </p>
      </div>
    </section>
  );
}
