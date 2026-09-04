import { Link } from 'react-router-dom';
import HeroScene from '../HeroScene.jsx';

export default function ProjectsHero() {
  return (
    <section className="about-hero" aria-label="Vedanjay Power project portfolio">
      <div className="about-hero__bg" aria-hidden="true">
        <HeroScene theme="grid" />
        <img
          className="about-hero__img"
          src="/images/projects/hero.jpg"
          alt=""
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
        <span className="about-hero__overlay" />
      </div>

      <div className="container about-hero__content">
        <nav className="breadcrumb-vp" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <i className="bi bi-chevron-right" aria-hidden="true" />
          <span aria-current="page">Projects</span>
        </nav>

        <span className="eyebrow eyebrow--light">Project Portfolio</span>
        <h1 className="about-hero__title">Building Reliable Power Infrastructure</h1>
        <p className="about-hero__lead">
          Vedanjay Power supports power and renewable-energy projects through technical execution,
          infrastructure capabilities, operational expertise, and project-specific support.
        </p>
      </div>
    </section>
  );
}
