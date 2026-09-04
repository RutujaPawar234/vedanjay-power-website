import { ECOSYSTEM_FLOW } from '../../data/aboutData.js';
import { VERTICALS } from '../../data/homeData.js';

export default function EcosystemFlow() {
  return (
    <section className="section section--mist" id="what-we-do">
      <div className="container">
        <div className="text-center reveal">
          <span className="eyebrow">What We Do</span>
          <h2 className="section-title mt-2">An interconnected power-sector ecosystem</h2>
          <div className="title-rule title-rule--center" />
          <p className="section-lead mx-auto text-center">
            From renewable generation to grid connectivity and monitoring — capabilities
            that work together across the power value chain.
          </p>
        </div>

        {/* Conceptual flow */}
        <ol className="eco-pipeline" aria-label="Power-sector ecosystem flow">
          {ECOSYSTEM_FLOW.map((step, i) => (
            <li className="eco-pipeline__step reveal" style={{ '--d': `${i * 70}ms` }} key={step.label}>
              <span className="eco-pipeline__icon" aria-hidden="true">
                <i className={`bi ${step.icon}`} />
              </span>
              <span className="eco-pipeline__label">{step.label}</span>
              {i < ECOSYSTEM_FLOW.length - 1 && (
                <span className="eco-pipeline__arrow" aria-hidden="true">
                  <i className="bi bi-arrow-down" />
                </span>
              )}
            </li>
          ))}
        </ol>

        {/* Underlying capabilities */}
        <div className="row g-4 mt-4">
          {VERTICALS.map((v, i) => (
            <div className="col-sm-6 col-lg-4 reveal" style={{ '--d': `${i * 60}ms` }} key={v.title}>
              <article className="eco-card">
                <span className="eco-card__icon" aria-hidden="true">
                  <i className={`bi ${v.icon}`} />
                </span>
                <h3 className="eco-card__title">{v.title}</h3>
                <p className="eco-card__text">{v.text}</p>
                <span className="eco-card__accent" aria-hidden="true" />
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
