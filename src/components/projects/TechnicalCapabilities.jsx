import HeroScene from '../HeroScene.jsx';
import { TECHNICAL_CAPABILITIES } from '../../data/projectsData.js';

// Real imagery (existing owned assets) mapped per work category.
// Drop dedicated photos into /images/projects/ to override later.
const CARD_IMAGES = [
  '/images/services/infrastructure.jpg',
  '/images/hero/transmission.jpg',
  '/images/hero/transmission.jpg',
  '/images/services/metering.jpg',
  '/images/services/grid-studies.jpg',
];

export default function TechnicalCapabilities() {
  return (
    <section className="section" id="technical-capabilities">
      <div className="container">
        <div className="text-center reveal">
          <span className="eyebrow">Technical Scope</span>
          <h2 className="section-title mt-2">Project Scope &amp; Technical Capabilities</h2>
          <div className="title-rule title-rule--center" />
          <p className="section-lead mx-auto text-center">
            Conceptual representations of approved technical work categories — not depictions of
            any specific project.
          </p>
        </div>

        <div className="row g-4 mt-2">
          {TECHNICAL_CAPABILITIES.map((cat, i) => (
            <div className="col-md-6 col-lg-4 reveal" style={{ '--d': `${i * 60}ms` }} key={cat.category}>
              <article className="tech-card">
                <div className="tech-card__media">
                  <HeroScene theme={i % 2 === 0 ? 'grid' : 'ops'} />
                  <img
                    className="tech-card__img"
                    src={CARD_IMAGES[i % CARD_IMAGES.length]}
                    alt={`${cat.category} — power infrastructure`}
                    loading="lazy"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  <span className="tech-card__media-overlay" aria-hidden="true" />
                </div>
                <div className="tech-card__body">
                  <h3 className="tech-card__title">{cat.category}</h3>
                  <ul className="tech-card__list">
                    {cat.items.map((it) => (
                      <li key={it}><i className="bi bi-check2-circle" aria-hidden="true" />{it}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
