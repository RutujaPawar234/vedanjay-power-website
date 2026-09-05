import { Link } from 'react-router-dom';

/**
 * Compact 24×7 operational-support highlight. Scope is explicitly limited to
 * QCA / Forecasting & Scheduling operations — NOT general corporate hours.
 */
export default function OperationalSupport() {
  return (
    <section className="section ops-support" id="operational-support">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9 reveal">
            <span className="eyebrow">Always On</span>
            <h2 className="section-title mt-2 ops-support__title">24×7 Operational Support</h2>
            <div className="title-rule" />
            <p className="section-lead ops-support__lead">
              Round-the-clock monitoring and support for QCA / Forecasting &amp; Scheduling
              operations — keeping renewable schedules accurate and grid-compliant.
            </p>
            <ul className="ops-support__list" aria-label="Operational support highlights">
              <li><i className="bi bi-activity" aria-hidden="true" /> Continuous real-time monitoring</li>
              <li><i className="bi bi-arrow-repeat" aria-hidden="true" /> Schedule revisions &amp; DSM tracking</li>
              <li><i className="bi bi-diagram-3" aria-hidden="true" /> SLDC / RLDC coordination</li>
            </ul>
            <Link to="/services" className="btn-vp btn-vp-sm ops-support__cta mt-2">
              QCA &amp; Forecasting Services
              <i className="bi bi-arrow-right" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
