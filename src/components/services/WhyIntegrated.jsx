import { INTEGRATED_STRENGTHS } from '../../data/servicesData.js';

export default function WhyIntegrated() {
  return (
    <section className="section" id="why-integrated">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-5 reveal-left">
            <span className="eyebrow">Why Integrated Services</span>
            <h2 className="section-title mt-2">The advantage of a single power-sector partner</h2>
            <div className="title-rule" />
            <p className="section-lead">
              Integrated support removes hand-offs between vendors — connecting forecasting,
              transactions, infrastructure, and consultancy under one experienced team.
            </p>
            <div className="why-figure" role="img" aria-label="5,000 plus megawatt renewable portfolio under QCA and Forecasting & Scheduling management">
              <span className="why-figure__value">5,000<span className="why-figure__plus">+ MW</span></span>
              <span className="why-figure__label">Renewable Portfolio Under QCA / F&amp;S Management</span>
              <span className="why-figure__meta">Solar&nbsp;·&nbsp;Wind&nbsp;·&nbsp;Hybrid</span>
            </div>
          </div>

          <div className="col-lg-7 reveal-right">
            <ul className="why-pills" aria-label="Integrated strengths">
              {INTEGRATED_STRENGTHS.map((s) => (
                <li className="why-pill" key={s.text}>{s.text}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
