import { COMPANY } from '../../data/homeData.js';

const wa = `https://wa.me/91${COMPANY.whatsapp}`;

export default function ContactInfo() {
  return (
    <section className="section" id="contact-info">
      <div className="container">
        <div className="text-center reveal">
          <span className="eyebrow">Reach Us</span>
          <h2 className="section-title mt-2">Offices &amp; contact details</h2>
          <div className="title-rule title-rule--center" />
        </div>

        <div className="row g-4 mt-2">
          {/* Corporate office */}
          <div className="col-lg-6 reveal-left">
            <article className="office-card">
              <span className="office-card__badge"><i className="bi bi-building" aria-hidden="true" /> Corporate / Main Office</span>
              <h3 className="office-card__title">Vedanjay Power Pvt. Ltd.</h3>
              <address className="office-card__address">
                {COMPANY.offices.corporate.lines.map((l) => <span key={l}>{l}</span>)}
              </address>
            </article>
          </div>
          {/* Pune branch */}
          <div className="col-lg-6 reveal-right">
            <article className="office-card">
              <span className="office-card__badge"><i className="bi bi-geo-alt" aria-hidden="true" /> Pune Branch</span>
              <h3 className="office-card__title">Vedanjay Power Pvt. Ltd.</h3>
              <address className="office-card__address">
                {COMPANY.offices.branch.lines.map((l) => <span key={l}>{l}</span>)}
              </address>
            </article>
          </div>
        </div>

        {/* Contact methods — single unified panel (no separate card per item) */}
        <div className="contact-panel mt-4">
          <a className="contact-row" href={`tel:+91${COMPANY.phone}`}>
            <span className="contact-row__icon" aria-hidden="true"><i className="bi bi-telephone-fill" /></span>
            <span className="contact-row__text"><span className="contact-row__label">Call</span><span className="contact-row__value">{COMPANY.phone}</span></span>
          </a>
          <a className="contact-row" href={`tel:+91${COMPANY.phoneOperations}`}>
            <span className="contact-row__icon" aria-hidden="true"><i className="bi bi-telephone-outbound-fill" /></span>
            <span className="contact-row__text"><span className="contact-row__label">Operations / F&amp;S Desk</span><span className="contact-row__value">{COMPANY.phoneOperations}</span></span>
          </a>
          <a className="contact-row" href={wa} target="_blank" rel="noopener noreferrer">
            <span className="contact-row__icon contact-row__icon--wa" aria-hidden="true"><i className="bi bi-whatsapp" /></span>
            <span className="contact-row__text"><span className="contact-row__label">WhatsApp</span><span className="contact-row__value">{COMPANY.whatsapp}</span></span>
          </a>
          <a className="contact-row" href={`mailto:${COMPANY.emailGeneral}`}>
            <span className="contact-row__icon" aria-hidden="true"><i className="bi bi-envelope-fill" /></span>
            <span className="contact-row__text"><span className="contact-row__label">General Email</span><span className="contact-row__value">{COMPANY.emailGeneral}</span></span>
          </a>
          <a className="contact-row" href={`mailto:${COMPANY.emailSupport}`}>
            <span className="contact-row__icon" aria-hidden="true"><i className="bi bi-headset" /></span>
            <span className="contact-row__text"><span className="contact-row__label">Support / Operations</span><span className="contact-row__value">{COMPANY.emailSupport}</span></span>
          </a>
          <a className="contact-row" href={`mailto:${COMPANY.emailOperations}`}>
            <span className="contact-row__icon" aria-hidden="true"><i className="bi bi-envelope-paper-fill" /></span>
            <span className="contact-row__text"><span className="contact-row__label">Operations / F&amp;S Email</span><span className="contact-row__value">{COMPANY.emailOperations}</span></span>
          </a>
          <a className="contact-row" href={COMPANY.linkedin} target="_blank" rel="noopener noreferrer">
            <span className="contact-row__icon" aria-hidden="true"><i className="bi bi-linkedin" /></span>
            <span className="contact-row__text"><span className="contact-row__label">LinkedIn</span><span className="contact-row__value">Vedanjay Power</span></span>
          </a>
          <a className="contact-row" href={COMPANY.website} target="_blank" rel="noopener noreferrer">
            <span className="contact-row__icon" aria-hidden="true"><i className="bi bi-globe" /></span>
            <span className="contact-row__text"><span className="contact-row__label">Website</span><span className="contact-row__value">vedanjay-power.com</span></span>
          </a>
          <div className="contact-row contact-row--static">
            <span className="contact-row__icon contact-row__icon--gold" aria-hidden="true"><i className="bi bi-clock-history" /></span>
            <span className="contact-row__text"><span className="contact-row__label">24×7 Operational Support</span><span className="contact-row__value">For QCA / Forecasting &amp; Scheduling services</span></span>
          </div>
        </div>
      </div>
    </section>
  );
}
