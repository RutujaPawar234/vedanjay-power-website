import { CAREER_AREAS } from '../../data/careersData.js';

export default function CareerAreas() {
  return (
    <section className="section section--mist" id="career-areas">
      <div className="container">
        <div className="text-center reveal">
          <span className="eyebrow">Career Areas</span>
          <h2 className="section-title mt-2">Where you can make an impact</h2>
          <div className="title-rule title-rule--center" />
        </div>

        <div className="row g-4 g-lg-5 mt-2 career-areas">
          {CAREER_AREAS.map((a, i) => (
            <div className="col-sm-6 col-lg-4 reveal" style={{ '--d': `${i * 60}ms` }} key={a.title}>
              <div className="career-area">
                <span className="career-area__icon" aria-hidden="true"><i className={`bi ${a.icon}`} /></span>
                <h3 className="career-area__title">{a.title}</h3>
                <p className="career-area__text">{a.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
