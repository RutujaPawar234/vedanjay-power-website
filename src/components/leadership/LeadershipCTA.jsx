import { Link } from 'react-router-dom';

export default function LeadershipCTA() {
  return (
    <section className="section cta" id="leadership-cta">
      <div className="cta__grid" aria-hidden="true" />
      <div className="container position-relative">
        <div className="cta__inner reveal-scale">
          <span className="eyebrow eyebrow--light">Let’s Work Together</span>
          <h2 className="cta__title">Leadership Focused on Reliable Power Delivery</h2>
          <p className="cta__text">
            Partner with an experienced team across renewable energy, forecasting, open access,
            electrical infrastructure, and grid consultancy.
          </p>
          <div className="cta__actions">
            <Link to="/services" className="btn-vp btn-vp-gold">
              <i className="bi bi-grid-1x2" aria-hidden="true" />
              Explore Our Solutions
            </Link>
            <Link to="/contact" className="btn-vp btn-vp-ghost">
              <i className="bi bi-envelope" aria-hidden="true" />
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
