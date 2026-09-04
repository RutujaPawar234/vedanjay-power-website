import { Link } from 'react-router-dom';
import EnquiryButton from '../EnquiryButton.jsx';
import { ENQUIRY_LABELS } from '../../data/enquiry.js';

export default function ServiceCTA() {
  return (
    <section className="section cta cta--enquiry" id="enquiry">
      <div className="cta__grid" aria-hidden="true" />
      <div className="container position-relative">
        <div className="cta__inner reveal-scale">
          <span className="eyebrow eyebrow--light">Get in Touch</span>
          <h2 className="cta__title">Discuss Your Power-Sector Requirements</h2>
          <p className="cta__text">
            Share your requirement through our official service-enquiry form. Our team responds
            across QCA and Forecasting, Open Access, Metering and Telemetry, Electrical
            Infrastructure, Transmission, Grid Studies, and Consultancy.
          </p>
          <div className="cta__actions">
            <EnquiryButton label={ENQUIRY_LABELS.services} icon="bi-clipboard-check" />
            <Link to="/contact" className="btn-vp btn-vp-ghost">
              <i className="bi bi-envelope" aria-hidden="true" /> Contact Vedanjay Power
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
