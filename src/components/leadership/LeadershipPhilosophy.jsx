import { PHILOSOPHY } from '../../data/leadershipData.js';

export default function LeadershipPhilosophy() {
  return (
    <section className="section" id="leadership-philosophy">
      <div className="container">
        <div className="text-center reveal">
          <span className="eyebrow">Leadership Philosophy</span>
          <h2 className="section-title mt-2">Principles that guide our leadership</h2>
          <div className="title-rule title-rule--center" />
          <p className="section-lead mx-auto text-center">
            Principles reflected across the company's values and everyday operations.
          </p>
        </div>

        <div className="row g-4 mt-2">
          {PHILOSOPHY.map((p, i) => (
            <div className="col-sm-6 col-lg-4 reveal" style={{ '--d': `${i * 55}ms` }} key={p.title}>
              <article className="phil-card">
                <span className="phil-card__icon" aria-hidden="true"><i className={`bi ${p.icon}`} /></span>
                <h3 className="phil-card__title">{p.title}</h3>
                <p className="phil-card__text">{p.text}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
