import { AWARDS } from '../../data/awardsData.js';

/**
 * Awards & Recognition — certificate images published by the company.
 * Click a card to open the full certificate.
 */
export default function AwardsRecognition() {
  return (
    <section className="section" id="awards">
      <div className="container">
        <div className="row g-4">
          {AWARDS.map((a, i) => (
            <div className="col-6 col-lg-3 reveal" style={{ '--d': `${i * 35}ms` }} key={a.title}>
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
