import { WHY_DIFFERENTIATORS } from '../data/homeData.js';

export default function WhyChooseUs() {
  return (
    <section className="section" id="why">
      <div className="container">
        <div className="row g-5 align-items-stretch">
          {/* Left rail: headline + prominent 5,000+ MW */}
          <div className="col-lg-5 reveal-left">
            <span className="eyebrow">Why Choose Us</span>
            <h2 className="section-title mt-2">
              A partner that understands both energy and the grid
            </h2>
            <div className="title-rule" />
            <p className="section-lead">
              From renewable forecasting to electrical infrastructure, Vedanjay Power
              brings technical depth, regulatory understanding, and dependable operations.
            </p>

            <div className="why-figure" role="img" aria-label="5,000 plus megawatt renewable portfolio under QCA and Forecasting & Scheduling management">
              <span className="why-figure__value">5,000<span className="why-figure__plus">+ MW</span></span>
              <span className="why-figure__label">
                Renewable Portfolio Under QCA / F&amp;S Management
              </span>
              <span className="why-figure__meta">Solar&nbsp;·&nbsp;Wind&nbsp;·&nbsp;Hybrid</span>
            </div>
          </div>

          {/* Right: feature grid */}
          <div className="col-lg-7">
            <div className="row g-3 why-grid">
              {WHY_DIFFERENTIATORS.map((p, i) => (
                <div className="col-sm-6" key={p.text}>
                  <div className="why-card reveal" style={{ '--d': `${i * 45}ms` }}>
                    <span className="why-card__icon" aria-hidden="true">
                      <i className={`bi ${p.icon}`} />
                    </span>
                    <span className="why-card__text">{p.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
