import { Link } from 'react-router-dom';

export default function CareersCTA() {
  return (
    <section className="section cta" id="careers-cta">
      <div className="cta__grid" aria-hidden="true" />
      <div className="container position-relative">
        <div className="cta__inner reveal-scale">
          <span className="eyebrow eyebrow--light">Join Us</span>
          <h2 className="cta__title">Build the Future of Power with Vedanjay</h2>
          <p className="cta__text">
            Interested in contributing to renewable-energy operations, forecasting, and power-sector
            services? We'd like to hear from you.
          </p>
          <div className="cta__actions">
            <Link to="/careers#openings" className="btn-vp btn-vp-gold">
              <i className="bi bi-briefcase" aria-hidden="true" />
              Explore Opportunities
            </Link>
            <Link to="/contact" className="btn-vp btn-vp-ghost">
              <i className="bi bi-chat-dots" aria-hidden="true" />
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
