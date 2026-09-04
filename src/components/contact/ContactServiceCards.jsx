import { Link } from 'react-router-dom';
import { SERVICE_CARDS } from '../../data/contactData.js';

export default function ContactServiceCards() {
  return (
    <section className="section" id="how-can-we-help">
      <div className="container">
        <div className="text-center reveal">
          <span className="eyebrow">How Can We Help?</span>
          <h2 className="section-title mt-2">Tell us what you need</h2>
          <div className="title-rule title-rule--center" />
        </div>

        <div className="row g-3 g-md-4 mt-2">
          {SERVICE_CARDS.map((c, i) => (
            <div className="col-6 col-lg-4 reveal" style={{ '--d': `${i * 55}ms` }} key={c.title}>
              <Link to={c.to} className="help-card">
                <span className="help-card__icon" aria-hidden="true"><i className={`bi ${c.icon}`} /></span>
                <span className="help-card__title">{c.title}</span>
                <i className="bi bi-arrow-right help-card__arrow" aria-hidden="true" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
