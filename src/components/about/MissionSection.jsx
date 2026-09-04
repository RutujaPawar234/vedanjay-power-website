import { MISSION } from '../../data/aboutData.js';

export default function MissionSection() {
  return (
    <section className="section" id="mission">
      <div className="container">
        <div className="text-center reveal">
          <span className="eyebrow">Our Mission</span>
          <h2 className="section-title mt-2">What we set out to deliver</h2>
          <div className="title-rule title-rule--center" />
        </div>

        <div className="row g-4 mt-2">
          {MISSION.map((m, i) => (
            <div className="col-md-6" key={m.text}>
              <article className="mission-card reveal" style={{ '--d': `${i * 60}ms` }}>
                <span className="mission-card__no" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <span className="mission-card__icon" aria-hidden="true">
                  <i className={`bi ${m.icon}`} />
                </span>
                <p className="mission-card__text">{m.text}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
