import { useRef } from 'react';
import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal.js';
import SEO from '../components/SEO.jsx';
import HeroScene from '../components/HeroScene.jsx';
import DownloadsSection from '../components/about/DownloadsSection.jsx';

import '../styles/about.css';

export default function Downloads() {
  const rootRef = useRef(null);
  useReveal(rootRef);

  return (
    <main id="main-content" ref={rootRef}>
      <SEO
        title="Downloads | Vedanjay Power Pvt. Ltd."
        description="Open-access, rooftop-solar, and Forecasting & Scheduling regulatory documents and the Vedanjay Power company profile."
        canonical="https://vedanjay-power.com/downloads"
      />
      <section className="about-hero" aria-label="Downloads">
        <div className="about-hero__bg" aria-hidden="true">
          <HeroScene theme="grid" />
          <img className="about-hero__img" src="/images/gallery/powerlines.jpg" alt="" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
          <span className="about-hero__overlay" />
        </div>
        <div className="container about-hero__content">
          <nav className="breadcrumb-vp" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <i className="bi bi-chevron-right" aria-hidden="true" />
            <span aria-current="page">Downloads</span>
          </nav>
          <span className="eyebrow eyebrow--light">About Us</span>
          <h1 className="about-hero__title">Downloads</h1>
          <p className="about-hero__lead">
            Regulatory references for open access, rooftop solar, and Forecasting &amp; Scheduling — plus the company profile.
          </p>
        </div>
      </section>

      <DownloadsSection />
    </main>
  );
}
