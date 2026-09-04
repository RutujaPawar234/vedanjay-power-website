import { Link } from 'react-router-dom';
import { SERVICES } from '../data/homeData.js';

export default function FeaturedServices() {
  return (
    <section className="section section--mist" id="services">
      <div className="container">
        <div className="text-center reveal">
          <span className="eyebrow">Core Capabilities</span>
          <h2 className="section-title mt-2">Core capabilities across the power value chain</h2>
          <div className="title-rule title-rule--center" />
          <p className="section-lead mx-auto text-center">
            A concise overview — see the Services page for full details.
          </p>
        </div>

        <div className="row g-4 mt-2">
          {SERVICES.map((s, i) => (
            <div
              className="col-md-6 col-lg-4 reveal"
              style={{ '--d': `${i * 60}ms` }}
              key={s.title}
            >
              <article className="service-card">
                <span className="service-card__icon" aria-hidden="true">
                  <i className={`bi ${s.icon}`} />
                </span>
                <div className="service-card__body">
                  <h3 className="service-card__title">{s.title}</h3>
                  <p className="service-card__text">{s.text}</p>
                  <Link to="/services" className="service-card__link">
                    Learn More <i className="bi bi-arrow-right" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
