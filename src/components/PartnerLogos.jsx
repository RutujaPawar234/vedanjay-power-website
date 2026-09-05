import { PARTNERS } from '../data/partnersData.js';
import '../styles/partners.css';

/**
 * "Our Partners" — premium continuous logo marquee on the homepage.
 * Uses ONLY the 22 company-approved logo assets in /public/images/partners.
 * Right-to-left seamless loop (list duplicated), pauses on hover.
 * Reduced-motion users get a static responsive grid instead (CSS-driven).
 */
function PartnerCard({ partner }) {
  return (
    <div className="partner-card" title={partner.name}>
      <img
        className="partner-card__logo"
        src={`/images/partners/${partner.file}`}
        alt={`${partner.name} logo`}
        loading="lazy"
        width="160"
        height="72"
      />
    </div>
  );
}

export default function PartnerLogos() {
  // Duplicate the full list so the marquee loops with no visible jump.
  const loop = [...PARTNERS, ...PARTNERS];

  return (
    <section className="section section--mist" id="partners">
      <div className="container">
        <div className="text-center reveal">
          <span className="eyebrow">Our Partners</span>
          <h2 className="section-title mt-2">Trusted by leaders across the power sector</h2>
          <div className="title-rule title-rule--center" />
        </div>
      </div>

      {/* Continuous marquee (motion). Falls back to a static grid under
          prefers-reduced-motion via CSS. */}
      <div className="partner-marquee reveal" aria-hidden="true">
        <div className="partner-marquee__track">
          {loop.map((p, i) => <PartnerCard key={`${p.file}-${i}`} partner={p} />)}
        </div>
      </div>

      {/* Static grid shown only when motion is reduced (CSS toggles it). */}
      <div className="container partner-grid" aria-hidden="true">
        {PARTNERS.map((p) => <PartnerCard key={p.file} partner={p} />)}
      </div>

      {/* Accessible list of all partners (visually hidden, SR/SEO). */}
      <ul className="visually-hidden">
        {PARTNERS.map((p) => <li key={p.file}>{p.name}</li>)}
      </ul>
    </section>
  );
}
