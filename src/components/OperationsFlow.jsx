import { OPS_FLOW } from '../data/homeData.js';

export default function OperationsFlow() {
  return (
    <section className="section ops" id="operations">
      <div className="container">
        <div className="text-center reveal">
          <span className="eyebrow eyebrow--light">How We Operate</span>
          <h2 className="section-title mt-2 ops__title">
            From data inputs to reliable operational support
          </h2>
          <div className="title-rule title-rule--center" />
          <p className="section-lead mx-auto text-center ops__lead">
            A connected workflow linking measurement, analysis, scheduling, and
            round-the-clock operational support.
          </p>
        </div>

        <ol className="ops-flow" aria-label="Operations workflow">
          {OPS_FLOW.map((step, i) => (
            <li
              className="ops-node reveal"
              style={{ '--d': `${i * 80}ms` }}
              key={step.label}
            >
              <span className="ops-node__index" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <span className="ops-node__icon" aria-hidden="true">
                <i className={`bi ${step.icon}`} />
              </span>
              <span className="ops-node__label">{step.label}</span>
              {i < OPS_FLOW.length - 1 && (
                <span className="ops-node__connector" aria-hidden="true">
                  <span className="ops-node__pulse" />
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
