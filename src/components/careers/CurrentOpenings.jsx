import { OPENINGS } from '../../data/careersData.js';

export default function CurrentOpenings({ onApply }) {
  return (
    <section className="section" id="openings">
      <div className="container">
        <div className="text-center reveal">
          <span className="eyebrow">Current Openings</span>
          <h2 className="section-title mt-2">Current &amp; relevant opportunities</h2>
          <div className="title-rule title-rule--center" />
        </div>

        <div className="row g-4 mt-2 justify-content-center">
          {OPENINGS.map((o, i) => (
            <div className="col-md-6 reveal" style={{ '--d': `${i * 70}ms` }} key={o.id}>
              <article className="opening-card">
                <span className="opening-card__icon" aria-hidden="true"><i className={`bi ${o.icon}`} /></span>
                <div className="opening-card__body">
                  <h3 className="opening-card__title">{o.title}</h3>
                  <p className="opening-card__detail">{o.detail}</p>
                  <button type="button" className="btn-vp btn-vp-gold btn-vp-sm" onClick={() => onApply(o.title)}>
                    <i className="bi bi-send" aria-hidden="true" /> Apply Now
                  </button>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
