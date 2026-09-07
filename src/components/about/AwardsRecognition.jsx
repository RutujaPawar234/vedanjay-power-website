import { AWARDS } from '../../data/awardsData.js';

/**
 * Awards & Recognition — certificate images published by the company.
 * Click a card to open the full certificate.
 */
export default function AwardsRecognition() {
  return (
    <section className="section section--mist" id="awards">
      <div className="container">
        <div className="text-center reveal">
          <span className="eyebrow">Awards &amp; Recognition</span>
          <h2 className="section-title mt-2">Recognised across the solar &amp; power sector</h2>
          <div className="title-rule title-rule--center" />
          <p className="section-lead mx-auto text-center">
            Industry awards and certificates received by Vedanjay Power Pvt. Ltd.
          </p>
        </div>

        <div className="row g-4 mt-2">
          {AWARDS.map((a, i) => (
            <div className="col-sm-6 col-lg-4 reveal" style={{ '--d': `${i * 40}ms` }} key={a.title}>
              <a
                className="award-cert"
                href={a.img}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View certificate: ${a.title}`}
              >
                <div className="award-cert__media">
                  <img src={a.img} alt={a.title} loading="lazy" />
                  <span className="award-cert__view"><i className="bi bi-arrows-fullscreen" aria-hidden="true" /> View</span>
                </div>
                <div className="award-cert__body">
                  <h3 className="award-cert__title">{a.title}</h3>
                  <p className="award-cert__caption">{a.caption}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
