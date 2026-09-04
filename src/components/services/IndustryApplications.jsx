import { INDUSTRIES } from '../../data/servicesData.js';

export default function IndustryApplications() {
  return (
    <section className="section section--mist" id="applications">
      <div className="container">
        <div className="text-center reveal">
          <span className="eyebrow">Where We Apply</span>
          <h2 className="section-title mt-2">Industries &amp; application areas</h2>
          <div className="title-rule title-rule--center" />
        </div>

        <div className="row g-4 mt-2 justify-content-center">
          {INDUSTRIES.map((ind, i) => (
            <div className="col-md-6" key={ind.title}>
              <article className="industry-card reveal" style={{ '--d': `${i * 80}ms` }}>
                <span className="industry-card__icon" aria-hidden="true">
                  <i className={`bi ${ind.icon}`} />
                </span>
                <h3 className="industry-card__title">{ind.title}</h3>
                <p className="industry-card__intro">{ind.intro}</p>
                <ul className="industry-card__list">
                  {ind.items.map((item) => (
                    <li key={item}><i className="bi bi-check2" aria-hidden="true" />{item}</li>
                  ))}
                </ul>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
