import { AWARDS } from '../../data/awardsData.js';

/**
 * Awards & Recognition — company-published awards. Documents/certificates
 * can be added later as downloadable files under /public/docs.
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
            Industry awards and recognitions received by Vedanjay Power Pvt. Ltd.
          </p>
        </div>

        <div className="row g-4 mt-2">
          {AWARDS.map((a, i) => (
            <div className="col-md-6 col-lg-4 reveal" style={{ '--d': `${i * 45}ms` }} key={a.title}>
              <article className="award-card">
                {(a.year || a.issuer) && (
                  <span className="award-card__meta">
                    {a.issuer}{a.issuer && a.year ? ' · ' : ''}{a.year}
                  </span>
                )}
                <h3 className="award-card__title">{a.title}</h3>
                <p className="award-card__text">{a.text}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
