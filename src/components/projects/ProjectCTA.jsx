import { Link } from 'react-router-dom';

export default function ProjectCTA() {
  return (
    <section className="section cta" id="project-cta">
      <div className="cta__grid" aria-hidden="true" />
      <div className="container position-relative">
        <div className="cta__inner reveal-scale">
          <span className="eyebrow eyebrow--light">Let’s Work Together</span>
          <h2 className="cta__title">Discuss Your Power Infrastructure Requirements</h2>
          <p className="cta__text">
            Talk to us about electrical infrastructure, transmission, testing &amp; commissioning,
            metering infrastructure, grid connectivity, and renewable-energy operational support.
          </p>
          <div className="cta__actions">
            <Link to="/contact" className="btn-vp btn-vp-gold">
              <i className="bi bi-envelope" aria-hidden="true" />
              Contact Vedanjay Power
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
