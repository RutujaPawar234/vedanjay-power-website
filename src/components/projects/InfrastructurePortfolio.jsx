import { INFRASTRUCTURE_PORTFOLIO } from '../../data/projectsData.js';

const { clients, pending, services } = INFRASTRUCTURE_PORTFOLIO;

export default function InfrastructurePortfolio() {
  return (
    <section className="section section--mist" id="infrastructure-portfolio">
      <div className="container">
        <div className="text-center reveal">
          <span className="eyebrow">Electrical Infrastructure Portfolio</span>
          <h2 className="section-title mt-2">Electrical infrastructure project portfolio</h2>
          <div className="title-rule title-rule--center" />
        </div>

        <div className="portfolio-record reveal">
          <div className="row g-4">
            {/* Clients (names only — no AI logos) */}
            <div className="col-lg-5">
              <div className="record-block">
                <h3 className="record-block__title"><i className="bi bi-buildings" aria-hidden="true" /> Approved Clients</h3>
                <ul className="record-clients">
                  {clients.map((c) => (
                    <li key={c} className="record-clients__item">
                      <i className="bi bi-check2-circle" aria-hidden="true" />
                      {c}
                    </li>
                  ))}
                </ul>
                <p className="record-note">Client names shown as approved for publication. Logos are not displayed unless official, approved assets are available.</p>
              </div>
            </div>

            {/* Pending fields — shown as pending, never as fabricated values */}
            <div className="col-lg-7">
              <div className="record-block">
                <h3 className="record-block__title"><i className="bi bi-info-circle" aria-hidden="true" /> Project Record</h3>
                <dl className="record-meta">
                  <div className="record-meta__row">
                    <dt><i className="bi bi-geo-alt" aria-hidden="true" /> Location</dt>
                    <dd>{pending.location}</dd>
                  </div>
                  <div className="record-meta__row">
                    <dt><i className="bi bi-calendar-event" aria-hidden="true" /> Year</dt>
                    <dd><span className="record-pending">{pending.year}</span></dd>
                  </div>
                  <div className="record-meta__row">
                    <dt><i className="bi bi-lightning-charge" aria-hidden="true" /> Capacity</dt>
                    <dd><span className="record-pending">{pending.capacity}</span></dd>
                  </div>
                </dl>
                <p className="record-hint">Project-specific details available on request.</p>
              </div>
            </div>
          </div>

          {/* Services provided */}
          <div className="record-block mt-4">
            <h3 className="record-block__title"><i className="bi bi-list-check" aria-hidden="true" /> Services Provided</h3>
            <ul className="record-services">
              {services.map((s) => (
                <li key={s}><i className="bi bi-check2" aria-hidden="true" />{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
