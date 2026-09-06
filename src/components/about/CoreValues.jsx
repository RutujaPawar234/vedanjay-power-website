import { CORE_VALUES } from '../../data/aboutData.js';

function handleSpotlight(e) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
}

export default function CoreValues() {
  return (
    <section className="section section--mist" id="core-values">
      <div className="container">
        <div className="text-center reveal">
          <span className="eyebrow">Core Values</span>
          <h2 className="section-title mt-2">The principles that guide us</h2>
          <div className="title-rule title-rule--center" />
        </div>

        <div className="row g-4 mt-2">
          {CORE_VALUES.map((v, i) => (
            <div className="col-sm-6 col-lg-4 reveal" style={{ '--d': `${i * 55}ms` }} key={v.title}>
              <article className="value-card value-card--spotlight" onMouseMove={handleSpotlight}>
                <h3 className="value-card__title">{v.title}</h3>
                <p className="value-card__text">{v.text}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
