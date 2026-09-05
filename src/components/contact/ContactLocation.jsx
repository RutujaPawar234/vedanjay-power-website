import { COMPANY } from '../../data/homeData.js';

// Address-based maps (no invented coordinates). Query is the office address,
// so the embed and the "open" link both resolve via Google's own geocoding.
const addressQuery = (lines) =>
  encodeURIComponent('Vedanjay Power Pvt. Ltd., ' + lines.join(', '));

const mapsUrl = (lines) =>
  `https://www.google.com/maps/search/?api=1&query=${addressQuery(lines)}`;

const embedUrl = (lines) =>
  `https://maps.google.com/maps?q=${addressQuery(lines)}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

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
                {/* Embedded Google Map resolved from the office address. */}
                <div className="location-card__map">
                  <iframe
                    className="location-card__mapframe"
                    src={embedUrl(o.lines)}
                    title={`Map of ${o.label}`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
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
