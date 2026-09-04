import { useState } from 'react';
import { MILESTONES } from '../../data/aboutData.js';

export default function MilestonesTimeline() {
  const [active, setActive] = useState(0);
  const current = MILESTONES[active];

  return (
    <section className="section section--mist" id="our-journey">
      <div className="container">
        <div className="text-center reveal">
          <span className="eyebrow">Our Journey</span>
          <h2 className="section-title mt-2">Major milestones since 2011</h2>
          <div className="title-rule title-rule--center" />
        </div>

        <div className="row g-4 g-lg-5 mt-2 align-items-start">
          {/* Interactive milestone rail */}
          <div className="col-lg-5">
            <ol className="timeline" aria-label="Company milestones">
              {MILESTONES.map((m, i) => (
                <li key={m.title} className="timeline__item">
                  <button
                    type="button"
                    className={`timeline__node ${i === active ? 'is-active' : ''}`}
                    onClick={() => setActive(i)}
                    aria-pressed={i === active}
                  >
                    <span className="timeline__dot" aria-hidden="true">
                      <i className={`bi ${m.icon}`} />
                    </span>
                    <span className="timeline__label">
                      {m.year && <span className="timeline__year">{m.year}</span>}
                      {m.title}
                    </span>
                  </button>
                </li>
              ))}
            </ol>
          </div>

          {/* Detail panel */}
          <div className="col-lg-7">
            <div className="timeline-detail" key={active}>
              <span className="timeline-detail__icon" aria-hidden="true">
                <i className={`bi ${current.icon}`} />
              </span>
              {current.year && <span className="timeline-detail__year">{current.year}</span>}
              <h3 className="timeline-detail__title">{current.title}</h3>
              <p className="timeline-detail__text">{current.desc}</p>
              <span className="timeline-detail__count">
                {String(active + 1).padStart(2, '0')} / {String(MILESTONES.length).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
