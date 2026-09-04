import { Link } from 'react-router-dom';

export default function IndustriesCTA() {
  return (
    <section className="section cta" id="industries-cta">
      <div className="cta__grid" aria-hidden="true" />
      <div className="container position-relative">
        <div className="cta__inner reveal-scale">
          <span className="eyebrow eyebrow--light">Let’s Work Together</span>
          <h2 className="cta__title">Find the Right Power-Sector Support for Your Requirements</h2>
          <p className="cta__text">
            Vedanjay Power can discuss requirements related to our approved services and business
            areas — from renewable operations to open access, infrastructure, and consultancy.
          </p>
          <div className="cta__actions">
            <Link to="/services" className="btn-vp btn-vp-gold">
              <i className="bi bi-grid-1x2" aria-hidden="true" />
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
