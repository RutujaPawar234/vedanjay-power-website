import { RENEWABLE_CONTEXT } from '../../data/projectsData.js';

const { figure, figureLabel, disclaimer, areas, capabilities } = RENEWABLE_CONTEXT;

export default function RenewablePortfolioContext() {
  return (
    <section className="section ops" id="renewable-context">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-5 reveal-left">
            <span className="eyebrow eyebrow--light">Renewable Portfolio Context</span>
            <h2 className="section-title mt-2 ops__title">Operational portfolio, not owned generation</h2>
            <div className="title-rule" />
            <div className="context-figure" role="img" aria-label="5,000 plus megawatt renewable portfolio under QCA and Forecasting & Scheduling management">
              <span className="context-figure__value">{figure}</span>
              <span className="context-figure__label">{figureLabel}</span>
              <span className="context-figure__areas">{areas.join('  ·  ')}</span>
            </div>
            <p className="context-disclaimer">
              <i className="bi bi-info-circle" aria-hidden="true" /> {disclaimer}
            </p>
          </div>

          <div className="col-lg-7 reveal-right">
            <h3 className="context-subtitle">Approved operational capabilities</h3>
            <ul className="context-caps">
              {capabilities.map((c, i) => (
                <li className="context-caps__item reveal" style={{ '--d': `${i * 45}ms` }} key={c}>
                  <i className="bi bi-check2-circle" aria-hidden="true" />
                  {c}
                </li>
              ))}
            </ul>
            <p className="context-note">This is the company's QCA / F&amp;S portfolio and operational capability context.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
