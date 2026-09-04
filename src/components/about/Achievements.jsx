import { ACHIEVEMENTS } from '../../data/aboutData.js';

export default function Achievements() {
  return (
    <section className="section section--mist" id="achievements">
      <div className="container">
        <div className="text-center reveal">
          <span className="eyebrow">Major Achievements</span>
          <h2 className="section-title mt-2">QCA &amp; renewable-energy track record</h2>
          <div className="title-rule title-rule--center" />
        </div>

        <div className="row g-4 mt-2">
          {ACHIEVEMENTS.map((a, i) => (
            <div className="col-md-6 col-lg-4 reveal" style={{ '--d': `${i * 55}ms` }} key={a.title}>
              <article className="achieve-card">
                <span className="achieve-card__icon" aria-hidden="true">
                  <i className={`bi ${a.icon}`} />
                </span>
                <h3 className="achieve-card__title">{a.title}</h3>
                <p className="achieve-card__text">{a.desc}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
