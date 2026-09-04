import { Link } from 'react-router-dom';
import EnquiryButton from './EnquiryButton.jsx';
import { ENQUIRY_LABELS } from '../data/enquiry.js';

export default function CTASection() {
  return (
    <section className="section cta" id="enquiry">
      <div className="cta__grid" aria-hidden="true" />
      <div className="container position-relative">
        <div className="cta__inner reveal-scale">
          <span className="eyebrow eyebrow--light">Let’s Work Together</span>
          <h2 className="cta__title">Powering Every Stage of the Energy Journey</h2>
          <p className="cta__text">
            End-to-end power-sector solutions across renewable energy, forecasting,
            open access, infrastructure and grid consultancy.
          </p>
          <div className="cta__actions">
            <Link to="/services" className="btn-vp btn-vp-gold">
              <i className="bi bi-grid-1x2" aria-hidden="true" />
              Explore Our Solutions
            </Link>
            <EnquiryButton label={ENQUIRY_LABELS.home} icon="bi-chat-dots" className="btn-vp btn-vp-ghost" />
            <Link to="/contact" className="btn-vp btn-vp-ghost">
              <i className="bi bi-envelope" aria-hidden="true" />
              Let’s Connect
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
