import { useRef } from 'react';
import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal.js';
import SEO from '../components/SEO.jsx';
import HeroScene from '../components/HeroScene.jsx';
import ProjectImageGallery from '../components/projects/ProjectImageGallery.jsx';

import '../styles/about.css';
import '../styles/projects.css';

export default function Gallery() {
  const rootRef = useRef(null);
  useReveal(rootRef);

  return (
    <main id="main-content" ref={rootRef}>
      <SEO
        title="Image Gallery | Vedanjay Power Pvt. Ltd."
        description="Renewable-energy and power-sector imagery — solar, wind, and grid-infrastructure visuals from Vedanjay Power."
        canonical="https://vedanjay-power.com/gallery"
      />
      <section className="about-hero" aria-label="Image Gallery">
        <div className="about-hero__bg" aria-hidden="true">
          <HeroScene theme="wind" />
          <img className="about-hero__img" src="/images/gallery/windfarm.jpg" alt="" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
          <span className="about-hero__overlay" />
        </div>
        <div className="container about-hero__content">
          <nav className="breadcrumb-vp" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <i className="bi bi-chevron-right" aria-hidden="true" />
            <span aria-current="page">Image Gallery</span>
          </nav>
          <span className="eyebrow eyebrow--light">Projects</span>
          <h1 className="about-hero__title">Image Gallery</h1>
          <p className="about-hero__lead">
            Renewable-energy and power-sector imagery. Click any image to enlarge.
          </p>
        </div>
      </section>

      <ProjectImageGallery />
    </main>
  );
}
