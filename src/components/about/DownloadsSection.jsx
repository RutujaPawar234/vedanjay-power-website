import { DOWNLOAD_GROUPS } from '../../data/downloadsData.js';

/**
 * Downloads — regulatory and company documents, grouped by category.
 * Documents open on their official host in a new tab.
 */
export default function DownloadsSection() {
  return (
    <section className="section" id="downloads">
      <div className="container">
        <div className="downloads-groups reveal">
          {DOWNLOAD_GROUPS.map((g) => (
            <div className="downloads-group" key={g.title}>
              <h3 className="downloads-group__title">{g.title}</h3>
              <ul className="downloads-list">
                {g.items.map((d) => (
                  <li key={d.url}>
                    <div className="download-row">
                      <span className="download-row__name">{d.name}</span>
                      <span className="download-row__acts">
                        <a className="download-row__act" href={d.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${d.name}`}>
                          <i className="bi bi-eye" aria-hidden="true" /> View
                        </a>
                        <a className="download-row__act download-row__act--dl" href={d.url} download aria-label={`Download ${d.name}`}>
                          <i className="bi bi-download" aria-hidden="true" /> Download
                        </a>
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
