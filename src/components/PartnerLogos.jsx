import { PARTNERS } from '../data/partnersData.js';
import '../styles/partners.css';

/**
 * "Our Partners" — the 22 company-approved logos in a horizontally
 * scrollable strip (manual scroll / swipe; no auto-motion).
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
  return (
    <section className="section section--mist" id="partners">
      <div className="container">
        <div className="text-center reveal">
          <span className="eyebrow">Our Partners</span>
          <h2 className="section-title partners-title mt-2">Trusted by leaders across the power sector</h2>
          <div className="title-rule title-rule--center" />
        </div>
      </div>

      {/* Manually scrollable logo strip (swipe / drag / scroll). */}
      <div className="container">
        <div className="partner-scroll reveal" role="group" aria-label="Partner logos — scroll to view all" tabIndex={0}>
          {PARTNERS.map((p) => <PartnerCard key={p.file} partner={p} />)}
        </div>
      </div>
    </section>
  );
}
