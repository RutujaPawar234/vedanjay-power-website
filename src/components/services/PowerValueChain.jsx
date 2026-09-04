import { VALUE_CHAIN } from '../../data/servicesData.js';

export default function PowerValueChain() {
  return (
    <section className="section ops" id="value-chain">
      <div className="container">
        <div className="text-center reveal">
          <span className="eyebrow eyebrow--light">Power Value Chain</span>
          <h2 className="section-title mt-2 ops__title">One connected ecosystem, end to end</h2>
          <div className="title-rule title-rule--center" />
          <p className="section-lead mx-auto text-center ops__lead">
            Each capability links to the next — from renewable generation through transactions,
            infrastructure, and technical consultancy.
          </p>
        </div>

        <ol className="ops-flow value-chain" aria-label="Power value chain">
          {VALUE_CHAIN.map((step, i) => (
            <li className="ops-node reveal" style={{ '--d': `${i * 70}ms` }} key={step.label}>
              <span className="ops-node__index" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <span className="ops-node__icon" aria-hidden="true">
                <i className={`bi ${step.icon}`} />
              </span>
              <span className="ops-node__label">{step.label}</span>
              {i < VALUE_CHAIN.length - 1 && (
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
