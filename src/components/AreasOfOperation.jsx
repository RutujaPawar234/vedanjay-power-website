import { AREAS } from '../data/homeData.js';

export default function AreasOfOperation() {
  return (
    <section className="section section--mist" id="areas">
      <div className="container">
        <div className="row g-5 align-items-center">
          {/* Stylised India orientation panel (no precise coordinates) */}
          <div className="col-lg-5 reveal-left">
            <div className="areas-map" role="img" aria-label="Registered SLDC operations in three states with WRLDC regional registration across India">
              <span className="areas-map__glow" aria-hidden="true" />
              <i className="bi bi-geo-alt-fill areas-map__pin areas-map__pin--1" aria-hidden="true" />
              <i className="bi bi-geo-alt-fill areas-map__pin areas-map__pin--2" aria-hidden="true" />
              <i className="bi bi-geo-alt-fill areas-map__pin areas-map__pin--3" aria-hidden="true" />
              <span className="areas-map__badge" aria-hidden="true">
                <span className="areas-map__badge-num">3</span>
                <span className="areas-map__badge-label">SLDC States</span>
                <span className="areas-map__badge-sub">+ WRLDC Region</span>
              </span>
              <span className="areas-map__caption">Focused operations across India</span>
            </div>
          </div>

          <div className="col-lg-7 reveal-right">
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
