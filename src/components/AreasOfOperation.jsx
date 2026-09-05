import { AREAS } from '../data/homeData.js';

export default function AreasOfOperation() {
  return (
    <section className="section section--mist" id="areas">
      <div className="container">
        <div className="row g-5 align-items-center justify-content-center">
          <div className="col-lg-10 reveal">
            <span className="eyebrow">Areas of Operation</span>
            <h2 className="section-title mt-2">Registered operations across key regions</h2>
            <div className="title-rule" />

            <div className="row g-3 mt-1">
              {AREAS.map((a) => (
                <div className="col-sm-6" key={a.region}>
                  <div className="area-card">
                    <i className="bi bi-geo-alt area-card__icon" aria-hidden="true" />
                    <div>
                      <h3 className="area-card__region">{a.region}</h3>
                      <p className="area-card__detail">{a.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
