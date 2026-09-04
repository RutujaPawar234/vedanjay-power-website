import { WHY_STRENGTHS } from '../../data/aboutData.js';

export default function WhyVedanjay() {
  return (
    <section className="section" id="why-vedanjay">
      <div className="container">
        <div className="row g-5 align-items-start">
          <div className="col-lg-5 reveal-left">
            <span className="eyebrow">Why Vedanjay Power</span>
            <h2 className="section-title mt-2">Depth across energy and the grid</h2>
            <div className="title-rule" />
            <p className="section-lead">
              A single partner combining renewable-energy expertise, regulatory understanding,
              and dependable operations across the power value chain.
            </p>
            <div className="why-figure" role="img" aria-label="5,000 plus megawatt renewable portfolio under QCA and Forecasting & Scheduling management">
              <span className="why-figure__value">5,000<span className="why-figure__plus">+ MW</span></span>
              <span className="why-figure__label">Renewable Portfolio Under QCA / F&amp;S Management</span>
              <span className="why-figure__meta">Solar&nbsp;·&nbsp;Wind&nbsp;·&nbsp;Hybrid</span>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="row g-3">
              {WHY_STRENGTHS.map((p, i) => (
                <div className="col-sm-6" key={p.text}>
                  <div className="why-card reveal" style={{ '--d': `${i * 40}ms` }}>
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
