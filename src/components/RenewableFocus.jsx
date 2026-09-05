import { Link } from 'react-router-dom';
import { RENEWABLES } from '../data/homeData.js';

export default function RenewableFocus() {
  return (
    <section className="section renew" id="renewables">
      <div className="container">
        <div className="text-center reveal">
          <span className="eyebrow">Renewable Energy</span>
          <h2 className="section-title mt-2">Built around renewable generation</h2>
          <div className="title-rule title-rule--center" />
          <p className="section-lead mx-auto text-center">
            Supporting solar, wind and hybrid projects across their operational lifecycle.
          </p>
        </div>

        <div className="row g-4 mt-2 renew-grid">
          {RENEWABLES.map((r, i) => (
            <div className="col-md-4 reveal" style={{ '--d': `${i * 80}ms` }} key={r.title}>
              <article className="renew-card">
                <span className="renew-card__scene" aria-hidden="true">
                  <span className={`renew-card__art renew-card__art--${r.title.toLowerCase()}`} />
                  <img
                    className="renew-card__img"
                    src={`/images/renewable/${r.title.toLowerCase()}.jpg`}
                    alt=""
                    loading="lazy"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </span>
                <h3 className="renew-card__title">{r.title}</h3>
                <p className="renew-card__text">{r.text}</p>
              </article>
            </div>
          ))}
        </div>

        <div className="text-center mt-4 reveal">
          <Link to="/industries" className="btn-vp btn-vp-primary">
            Explore Renewable Energy Solutions
            <i className="bi bi-arrow-right" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
