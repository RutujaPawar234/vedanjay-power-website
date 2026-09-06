import { MILESTONES } from '../../data/aboutData.js';

/**
 * Horizontal, connected milestone timeline. All milestones sit on one
 * left-to-right line (zig-zag cards), with an animated light strip flowing
 * through the connecting line for a premium, dynamic feel.
 */
export default function MilestonesTimeline() {
  return (
    <section className="section section--mist" id="our-journey">
      <div className="container">
        <div className="text-center reveal">
          <span className="eyebrow">Our Journey</span>
          <h2 className="section-title mt-2">Major milestones since 2011</h2>
          <div className="title-rule title-rule--center" />
        </div>
      </div>

      <div className="htimeline reveal" role="list" aria-label="Company milestones">
        <div className="htimeline__track">
          <div className="htimeline__line" aria-hidden="true">
            <span className="htimeline__flow" />
          </div>
          {MILESTONES.map((m, i) => (
            <div
              className={`htimeline__item ${i % 2 ? 'htimeline__item--down' : 'htimeline__item--up'}`}
              role="listitem"
              key={m.title}
            >
              <div className="htimeline__card">
                {m.year && <span className="htimeline__year">{m.year}</span>}
                <h3 className="htimeline__title">{m.title}</h3>
                <p className="htimeline__text">{m.desc}</p>
              </div>
              <span className="htimeline__node" aria-hidden="true">
                <span className="htimeline__num">{i + 1}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
