import { Link } from 'react-router-dom';

const HIGHLIGHTS = ['Solar', 'Wind', 'Hybrid', 'Forecasting & Scheduling', 'Open Access', 'Grid Infrastructure'];

export default function CompanyIntro() {
  return (
    <section className="section" id="intro">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left: visual */}
          <div className="col-lg-6 reveal-left">
            <div className="intro-visual">
              <div className="intro-visual__scene" role="img" aria-label="Renewable power infrastructure across solar, wind and grid systems">
                {/* Optional real image — drop /images/intro.jpg to override the CSS scene */}
                <img
                  className="intro-visual__img"
                  src="/images/intro.jpg"
                  alt="Solar panels in the foreground with wind turbines and transmission infrastructure connecting the renewable-energy ecosystem"
                  loading="lazy"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <span className="intro-visual__sun" aria-hidden="true" />
                <span className="intro-visual__panels" aria-hidden="true" />
                <span className="intro-visual__pylon" aria-hidden="true" />
              </div>
              <div className="intro-visual__badge" aria-hidden="true">
                <span className="intro-visual__badge-num">Since</span>
                <span className="intro-visual__badge-year">2011</span>
                <span className="intro-visual__badge-label">Established</span>
              </div>
            </div>
          </div>

          {/* Right: copy */}
          <div className="col-lg-6 reveal-right">
            <span className="eyebrow">Who We Are</span>
            <h2 className="section-title mt-2">
              Power-Sector Solutions Built for a Changing Energy Landscape
            </h2>
            <div className="title-rule" />
            <p className="section-lead">
              Established in 2011, Vedanjay Power Pvt. Ltd. provides end-to-end
              power-sector solutions for renewable generators and C&amp;I consumers —
              across renewable energy, open-access power, forecasting and scheduling,
              electrical infrastructure, metering, telemetry, transmission and grid
              consultancy.
            </p>

            <ul className="intro-chips" aria-label="Core focus areas">
              {HIGHLIGHTS.map((h) => (
                <li key={h} className="vp-chip">
                  <i className="bi bi-dot" aria-hidden="true" />
                  {h}
                </li>
              ))}
            </ul>

            <Link to="/about" className="btn-vp btn-vp-primary mt-3">
              Discover Vedanjay
              <i className="bi bi-arrow-right" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
