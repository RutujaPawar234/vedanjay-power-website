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
                    <a className="download-row" href={d.url} target="_blank" rel="noopener noreferrer">
                      <span className="download-row__name">{d.name}</span>
                      <span className="download-row__act">
                        <i className="bi bi-box-arrow-up-right" aria-hidden="true" /> Open
                      </span>
                    </a>
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
