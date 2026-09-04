import { WHY_WORK } from '../../data/careersData.js';

export default function WhyWorkWithUs() {
  return (
    <section className="section" id="why-work">
      <div className="container">
        <div className="text-center reveal">
          <span className="eyebrow">Why Work With Vedanjay</span>
          <h2 className="section-title mt-2">Contribute to India's power and renewable-energy sector</h2>
          <div className="title-rule title-rule--center" />
        </div>

        <div className="row g-4 mt-2">
          {WHY_WORK.map((c, i) => (
            <div className="col-sm-6 col-lg-3 reveal" style={{ '--d': `${i * 50}ms` }} key={c.title}>
              <article className="phil-card">
                <span className="phil-card__icon" aria-hidden="true"><i className={`bi ${c.icon}`} /></span>
                <h3 className="phil-card__title">{c.title}</h3>
                <p className="phil-card__text">{c.text}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
