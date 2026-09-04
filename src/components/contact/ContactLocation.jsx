import { COMPANY } from '../../data/homeData.js';

// Address-based maps search (no invented coordinates or embedded map).
const mapsUrl = (lines) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Vedanjay Power Pvt. Ltd., ' + lines.join(', ')
  )}`;

const OFFICES = [
  { label: 'Indore Corporate / Main Office', lines: COMPANY.offices.corporate.lines },
  { label: 'Pune Branch', lines: COMPANY.offices.branch.lines },
];

export default function ContactLocation() {
  return (
    <section className="section section--mist" id="locations">
      <div className="container">
        <div className="text-center reveal">
          <span className="eyebrow">Our Locations</span>
          <h2 className="section-title mt-2">Where to find us</h2>
          <div className="title-rule title-rule--center" />
        </div>

        <div className="row g-4 mt-2">
          {OFFICES.map((o, i) => (
            <div className="col-lg-6 reveal" style={{ '--d': `${i * 70}ms` }} key={o.label}>
              <article className="location-card">
                {/* Map placeholder — ready for an approved map link/embed later. */}
                <div className="location-card__map" role="img" aria-label={`Map location for ${o.label} — to be added`}>
                  <i className="bi bi-geo-alt-fill" aria-hidden="true" />
                  <span>Map location to be added</span>
                </div>
                <div className="location-card__body">
                  <h3 className="location-card__title">{o.label}</h3>
                  <address className="location-card__address">
                    {o.lines.map((l) => <span key={l}>{l}</span>)}
                  </address>
                  <a className="location-card__link" href={mapsUrl(o.lines)} target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-map" aria-hidden="true" /> Open in Google Maps
                  </a>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
