import { EXECUTION_CAPABILITIES } from '../../data/projectsData.js';

export default function ExecutionCapabilities() {
  return (
    <section className="section section--mist" id="execution-capabilities">
      <div className="container">
        <div className="text-center reveal">
          <span className="eyebrow">Execution Capabilities</span>
          <h2 className="section-title mt-2">Approved execution scopes</h2>
          <div className="title-rule title-rule--center" />
        </div>

        <div className="row g-4 mt-2">
          {EXECUTION_CAPABILITIES.map((c, i) => (
            <div className="col-md-6 reveal" style={{ '--d': `${i * 60}ms` }} key={c.title}>
              <article className="exec-card">
                <div>
                  <h3 className="exec-card__title">{c.title}</h3>
                  <p className="exec-card__text">{c.text}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
