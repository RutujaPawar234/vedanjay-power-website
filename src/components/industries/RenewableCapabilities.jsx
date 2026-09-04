import { RENEWABLE_CAPABILITIES } from '../../data/industriesData.js';

export default function RenewableCapabilities() {
  return (
    <section className="section" id="renewable-capabilities">
      <div className="container">
        <div className="text-center reveal">
          <span className="eyebrow">Renewable Energy Capabilities</span>
          <h2 className="section-title mt-2">Built for renewable-energy operations</h2>
          <div className="title-rule title-rule--center" />
        </div>

        <div className="row g-4 mt-2">
          {RENEWABLE_CAPABILITIES.map((c, i) => (
            <div className={`col-md-6 ${i === 4 ? 'col-lg-12' : 'col-lg-6'} reveal`} style={{ '--d': `${i * 60}ms` }} key={c.title}>
              <article className={`cap-card ${i === 4 ? 'cap-card--wide' : ''}`}>
                <span className="cap-card__icon" aria-hidden="true">
                  <i className={`bi ${c.icon}`} />
                </span>
                <div>
                  <h3 className="cap-card__title">{c.title}</h3>
                  <p className="cap-card__text">{c.text}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
