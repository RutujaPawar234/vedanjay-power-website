import HeroScene from '../HeroScene.jsx';
import { WHO_CAPABILITIES, RENEWABLE_TYPES } from '../../data/aboutData.js';

export default function WhoWeAre() {
  return (
    <section className="section" id="who-we-are">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 reveal-right order-lg-2">
            <div className="about-visual">
              <div className="about-visual__frame" role="img" aria-label="Integrated renewable-energy and power infrastructure">
                <HeroScene theme="solar" />
                <img
                  className="about-visual__img"
                  src="/images/about/who-we-are.jpg"
                  alt="Solar and power-sector infrastructure representing Vedanjay Power's capabilities"
                  loading="lazy"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
              <div className="about-visual__badge" aria-hidden="true">
                <span className="about-visual__badge-since">Established</span>
                <span className="about-visual__badge-year">2011</span>
              </div>
            </div>
          </div>

          <div className="col-lg-6 reveal-left order-lg-1">
            <span className="eyebrow">Who We Are</span>
            <h2 className="section-title mt-2">A diversified power-sector solutions company</h2>
            <div className="title-rule" />
            <p className="section-lead">
              Vedanjay Power Pvt. Ltd., established in 2011, is a diversified power-sector
              solutions company supporting renewable-energy generators, commercial and
              industrial consumers, and other stakeholders across India.
            </p>
            <p className="text-muted-green">
              The company provides integrated technical, commercial, and operational solutions across:
            </p>
            <ul className="chip-list" aria-label="Integrated solutions">
              {WHO_CAPABILITIES.map((c) => (
                <li key={c} className="vp-chip">{c}</li>
              ))}
            </ul>
            <p className="who-renewables">
              <i className="bi bi-lightning-charge-fill" aria-hidden="true" />
              Supporting {RENEWABLE_TYPES.join(', ').replace(/,([^,]*)$/, ' and$1')}.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
