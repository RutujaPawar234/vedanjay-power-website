import { Link } from 'react-router-dom';
import { COMPANY, NAV_LINKS } from '../data/homeData.js';
import BrandLogo from './BrandLogo.jsx';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="vp-footer" id="footer">
      <div className="container">
        <div className="row g-4 gy-5">
          {/* Brand + tagline + social */}
          <div className="col-lg-4">
            <div className="vp-brand vp-brand--footer">
              <BrandLogo />
            </div>

            <div className="vp-footer__ops">
              <i className="bi bi-clock-history" aria-hidden="true" />
              24×7 operational support for QCA / Forecasting &amp; Scheduling services.
            </div>

            <div className="vp-footer__social">
              <a href={COMPANY.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Vedanjay Power on LinkedIn">
                <i className="bi bi-linkedin" aria-hidden="true" />
              </a>
              <a href={COMPANY.facebook} target="_blank" rel="noopener noreferrer" aria-label="Vedanjay Power on Facebook">
                <i className="bi bi-facebook" aria-hidden="true" />
              </a>
              <a href={`https://wa.me/91${COMPANY.whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Vedanjay Power">
                <i className="bi bi-whatsapp" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="col-6 col-lg-2">
            <h2 className="vp-footer__heading">Quick Links</h2>
            <ul className="vp-footer__links">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div className="col-6 col-lg-3">
            <h2 className="vp-footer__heading">{COMPANY.offices.corporate.label}</h2>
            <address className="vp-footer__address">
              {COMPANY.offices.corporate.lines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </address>
            <h2 className="vp-footer__heading mt-4">{COMPANY.offices.branch.label}</h2>
            <address className="vp-footer__address">
              {COMPANY.offices.branch.lines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </address>
          </div>

          {/* Contact */}
          <div className="col-lg-3">
            <h2 className="vp-footer__heading">Contact</h2>
            <ul className="vp-footer__contact">
              <li>
                <i className="bi bi-telephone" aria-hidden="true" />
                <a href={`tel:+91${COMPANY.phone}`}>{COMPANY.phone}</a>
              </li>
              <li>
                <i className="bi bi-telephone-outbound" aria-hidden="true" />
                <a href={`tel:+91${COMPANY.phoneOperations}`}>{COMPANY.phoneOperations} (Operations)</a>
              </li>
              <li>
                <i className="bi bi-whatsapp" aria-hidden="true" />
                <a href={`https://wa.me/91${COMPANY.whatsapp}`} target="_blank" rel="noopener noreferrer">
                  {COMPANY.whatsapp} (WhatsApp)
                </a>
              </li>
              <li>
                <i className="bi bi-envelope" aria-hidden="true" />
                <a href={`mailto:${COMPANY.emailGeneral}`}>{COMPANY.emailGeneral}</a>
              </li>
              <li>
                <i className="bi bi-headset" aria-hidden="true" />
                <a href={`mailto:${COMPANY.emailSupport}`}>{COMPANY.emailSupport}</a>
              </li>
              <li>
                <i className="bi bi-envelope-paper" aria-hidden="true" />
                <a href={`mailto:${COMPANY.emailOperations}`}>{COMPANY.emailOperations}</a>
              </li>
              <li>
                <i className="bi bi-globe" aria-hidden="true" />
                <a href={COMPANY.website} target="_blank" rel="noopener noreferrer">vedanjay-power.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="vp-footer__bottom">
          <p>© {year} {COMPANY.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
