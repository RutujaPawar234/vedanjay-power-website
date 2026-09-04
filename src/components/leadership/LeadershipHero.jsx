import { Link } from 'react-router-dom';
import HeroScene from '../HeroScene.jsx';

export default function LeadershipHero() {
  return (
    <section className="about-hero" aria-label="Vedanjay Power leadership">
      <div className="about-hero__bg" aria-hidden="true">
        <HeroScene theme="ops" />
        <img
          className="about-hero__img"
          src="/images/leadership/hero.jpg"
          alt=""
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
        <span className="about-hero__overlay" />
      </div>

      <div className="container about-hero__content">
        <nav className="breadcrumb-vp" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <i className="bi bi-chevron-right" aria-hidden="true" />
          <span aria-current="page">Leadership</span>
        </nav>

        <span className="eyebrow eyebrow--light">Leadership</span>
        <h1 className="about-hero__title">Leadership with Purpose. Experience with Perspective.</h1>
        <p className="about-hero__lead">
          Experienced leadership underpins the reliable technical, commercial, and operational
          power-sector solutions Vedanjay Power delivers to its clients and partners.
        </p>
      </div>
    </section>
  );
}
