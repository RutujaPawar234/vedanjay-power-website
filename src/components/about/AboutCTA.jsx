import { Link } from 'react-router-dom';

export default function AboutCTA() {
  return (
    <section className="section cta" id="about-cta">
      <div className="cta__grid" aria-hidden="true" />
      <div className="container position-relative">
        <div className="cta__inner reveal-scale">
          <span className="eyebrow eyebrow--light">Let’s Work Together</span>
          <h2 className="cta__title">Powering the Next Phase of Energy Growth</h2>
          <p className="cta__text">
            Vedanjay Power supports clients with integrated renewable energy, grid operations,
            forecasting, open-access, and electrical infrastructure solutions.
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
