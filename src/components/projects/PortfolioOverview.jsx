import { PORTFOLIO_OVERVIEW } from '../../data/projectsData.js';

export default function PortfolioOverview() {
  return (
    <section className="section" id="portfolio-overview">
      <div className="container">
        <div className="text-center reveal">
          <span className="eyebrow">Portfolio Overview</span>
          <h2 className="section-title mt-2">Project and operational capabilities span…</h2>
          <div className="title-rule title-rule--center" />
          <p className="section-lead mx-auto text-center">
            A connected set of technical and operational capabilities across the power sector,
            based on approved company information.
          </p>
        </div>

        <ul className="portfolio-strip" aria-label="Capability areas">
          {PORTFOLIO_OVERVIEW.map((c, i) => (
            <li className="portfolio-strip__item reveal" style={{ '--d': `${i * 55}ms` }} key={c.text}>
              <span className="portfolio-strip__icon" aria-hidden="true"><i className={`bi ${c.icon}`} /></span>
              <span className="portfolio-strip__text">{c.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
