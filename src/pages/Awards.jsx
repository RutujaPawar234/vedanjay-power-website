import { useRef } from 'react';
import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal.js';
import SEO from '../components/SEO.jsx';
import AwardsRecognition from '../components/about/AwardsRecognition.jsx';

import '../styles/about.css';

export default function Awards() {
  const rootRef = useRef(null);
  useReveal(rootRef);

  return (
    <main id="main-content" ref={rootRef}>
      <SEO
        title="Awards & Recognition | Vedanjay Power Pvt. Ltd."
        description="Industry awards and certificates received by Vedanjay Power Pvt. Ltd. across the solar and power sector."
        canonical="https://vedanjay-power.com/awards"
      />
      <section className="about-hero about-hero--plain" aria-label="Awards">
        <div className="container about-hero__content">
          <nav className="breadcrumb-vp" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <i className="bi bi-chevron-right" aria-hidden="true" />
            <span aria-current="page">Awards</span>
          </nav>
          <span className="eyebrow eyebrow--light">About Us</span>
          <h1 className="about-hero__title">Awards &amp; Recognition</h1>
          <p className="about-hero__lead">
            Industry awards and certificates received by Vedanjay Power across the solar and power sector.
          </p>
        </div>
      </section>

      <AwardsRecognition />
    </main>
  );
}
