import { AWARDS } from '../../data/awardsData.js';

/**
 * Downloads — award certificates available to download. Add more documents
 * (brochures, profiles) to /public/docs and extend this list as needed.
 */
export default function DownloadsSection() {
  return (
    <section className="section" id="downloads">
      <div className="container">
        <div className="text-center reveal">
          <span className="eyebrow">Downloads</span>
          <h2 className="section-title mt-2">Certificates &amp; documents</h2>
          <div className="title-rule title-rule--center" />
          <p className="section-lead mx-auto text-center">
            Download Vedanjay Power’s award certificates.
          </p>
        </div>

        <ul className="downloads-list reveal">
          {AWARDS.map((a) => (
            <li key={a.img}>
              <a className="download-row" href={a.img} download>
                <span className="download-row__info">
                  <span className="download-row__name">{a.title}</span>
                  <span className="download-row__meta">{a.caption}</span>
                </span>
                <span className="download-row__act">
                  <i className="bi bi-download" aria-hidden="true" /> Download
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
