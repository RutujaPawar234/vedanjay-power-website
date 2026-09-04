import { OVERVIEW_CAPABILITIES } from '../../data/industriesData.js';

export default function IndustriesOverview() {
  return (
    <section className="section" id="industries-overview">
      <div className="container">
        <div className="text-center reveal">
          <span className="eyebrow">Who We Support</span>
          <h2 className="section-title mt-2">Operating across the power ecosystem</h2>
          <div className="title-rule title-rule--center" />
        </div>

        {/* Two segments connected by a central hub of shared capabilities */}
        <div className="ind-overview">
          <div className="ind-overview__seg reveal-left">
            <span className="ind-overview__icon" aria-hidden="true"><i className="bi bi-sun" /></span>
            <h3 className="ind-overview__title">Renewable Energy Projects</h3>
          </div>

          <div className="ind-overview__hub reveal-scale" aria-hidden="true">
            <span className="ind-overview__hub-core"><i className="bi bi-diagram-3" /></span>
          </div>

          <div className="ind-overview__seg reveal-right">
            <span className="ind-overview__icon" aria-hidden="true"><i className="bi bi-buildings" /></span>
            <h3 className="ind-overview__title">Commercial &amp; Industrial Consumers</h3>
          </div>
        </div>

        <p className="section-lead mx-auto text-center reveal">
          Vedanjay Power brings together integrated capabilities. Service relevance varies by
          segment and project — not every service applies identically to every industry.
        </p>

        <ul className="ind-caps reveal" aria-label="Integrated capabilities">
          {OVERVIEW_CAPABILITIES.map((c) => (
            <li key={c.text} className="ind-caps__item">
              <i className={`bi ${c.icon}`} aria-hidden="true" />
              {c.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
