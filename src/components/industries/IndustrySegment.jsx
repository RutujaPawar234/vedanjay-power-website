import HeroScene from '../HeroScene.jsx';

/**
 * Reusable detailed industry segment. Alternates the visual side by index.
 */
export default function IndustrySegment({ segment, index }) {
  const flip = index % 2 === 1;

  return (
    <section className={`section ${flip ? 'section--mist' : ''} industry-segment`} id={segment.id}>
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className={`col-lg-5 ${flip ? 'order-lg-2' : ''} reveal-${flip ? 'right' : 'left'}`}>
            <div className="about-visual">
              <div className="about-visual__frame" role="img" aria-label={segment.imageAlt}>
                <HeroScene theme={segment.theme} />
                <img
                  className="about-visual__img"
                  src={segment.image}
                  alt={segment.imageAlt}
                  loading="lazy"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
            </div>
          </div>

          <div className={`col-lg-7 ${flip ? 'order-lg-1' : ''} reveal-${flip ? 'left' : 'right'}`}>
            <span className="eyebrow">{segment.label}</span>
            <h2 className="section-title mt-2 d-flex align-items-center gap-2">
              <span className="service-detail__icon" aria-hidden="true">
                <i className={`bi ${segment.icon}`} />
              </span>
              {segment.title}
            </h2>
            <div className="title-rule" />
            <p className="section-lead">{segment.desc}</p>

            {segment.areas && (
              <ul className="chip-list" aria-label="Renewable-energy areas">
                {segment.areas.map((a) => <li key={a} className="vp-chip">{a}</li>)}
              </ul>
            )}

            {(segment.need || segment.role || segment.value) && (
              <dl className="segment-nrv">
                {segment.need && (
                  <div className="segment-nrv__item">
                    <dt><i className="bi bi-question-circle" aria-hidden="true" /> Industry Need</dt>
                    <dd>{segment.need}</dd>
                  </div>
                )}
                {segment.role && (
                  <div className="segment-nrv__item">
                    <dt><i className="bi bi-people" aria-hidden="true" /> Vedanjay's Role</dt>
                    <dd>{segment.role}</dd>
                  </div>
                )}
                {segment.value && (
                  <div className="segment-nrv__item">
                    <dt><i className="bi bi-graph-up-arrow" aria-hidden="true" /> Value Delivered</dt>
                    <dd>{segment.value}</dd>
                  </div>
                )}
              </dl>
            )}

            <div className="svc-block">
              <h3 className="svc-block__title"><i className="bi bi-list-check" aria-hidden="true" /> Relevant Solutions</h3>
              <ul className="svc-grid">
                {segment.services.map((s) => (
                  <li key={s}><i className="bi bi-check2" aria-hidden="true" />{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
