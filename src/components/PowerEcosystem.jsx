import { ECOSYSTEM_FLOW } from '../data/homeData.js';

export default function PowerEcosystem() {
  return (
    <section className="section section--mist" id="ecosystem">
      <div className="container">
        <div className="text-center reveal">
          <span className="eyebrow">Power Ecosystem</span>
          <h2 className="section-title mt-2">From Renewable Generation to Grid Connectivity</h2>
          <div className="title-rule title-rule--center" />
          <p className="section-lead mx-auto text-center">
            One connected value chain — Vedanjay Power supports every stage from
            generation through to grid consultancy.
          </p>
        </div>

        <ol className="eco-flow" aria-label="Power ecosystem value chain">
          {ECOSYSTEM_FLOW.map((step, i) => (
            <li className="eco-step reveal" style={{ '--d': `${i * 90}ms` }} key={step.label}>
              <span className="eco-step__icon" aria-hidden="true">
                <i className={`bi ${step.icon}`} />
              </span>
              <span className="eco-step__label">{step.label}</span>
              <span className="eco-step__text">{step.text}</span>
              {i < ECOSYSTEM_FLOW.length - 1 && (
                <span className="eco-step__connector" aria-hidden="true">
                  <span className="eco-step__pulse" />
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
