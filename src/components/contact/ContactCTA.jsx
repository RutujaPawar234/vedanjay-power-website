import EnquiryButton from '../EnquiryButton.jsx';
import { ENQUIRY_LABELS } from '../../data/enquiry.js';

export default function ContactCTA() {
  return (
    <section className="section cta" id="contact-cta">
      <div className="cta__grid" aria-hidden="true" />
      <div className="container position-relative">
        <div className="cta__inner reveal-scale">
          <span className="eyebrow eyebrow--light">Connecting to a More Sustainable Future</span>
          <h2 className="cta__title">Let’s Build a More Sustainable Power Future</h2>
          <p className="cta__text">
            Share your power-sector requirement and our team will get back to you.
          </p>
          <div className="cta__actions">
            <EnquiryButton label={ENQUIRY_LABELS.contact} icon="bi-send" />
          </div>
        </div>
      </div>
    </section>
  );
}
