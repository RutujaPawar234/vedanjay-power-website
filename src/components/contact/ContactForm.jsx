import EnquiryButton from '../EnquiryButton.jsx';
import { ENQUIRY_LABELS } from '../../data/enquiry.js';
import { COMPANY } from '../../data/homeData.js';

/**
 * Service enquiry → official Vedanjay Google Form (single enquiry workflow).
 * No duplicate form fields are collected on the site.
 */
export default function ContactForm() {
  return (
    <section className="section section--mist" id="enquiry">
      <div className="container">
        <div className="text-center reveal">
          <span className="eyebrow">Enquiry</span>
          <h2 className="section-title mt-2">Send us your requirement</h2>
          <div className="title-rule title-rule--center" />
        </div>

        <div className="row justify-content-center mt-2">
          <div className="col-lg-8">
            <div className="enquiry-card reveal">
              <span className="enquiry-card__icon" aria-hidden="true"><i className="bi bi-clipboard-check" /></span>
              <h3 className="enquiry-card__title">Official Service Enquiry Form</h3>
              <p className="enquiry-card__text">
                Share your company details, service interest and requirement through our official
                enquiry form. Our team will get back to you.
              </p>
              <ul className="enquiry-card__list" aria-label="What the form collects">
                <li><i className="bi bi-check2-circle" aria-hidden="true" /> Company &amp; contact details</li>
                <li><i className="bi bi-check2-circle" aria-hidden="true" /> Service interest &amp; requirement</li>
                <li><i className="bi bi-check2-circle" aria-hidden="true" /> Preferred discussion date</li>
              </ul>
              <EnquiryButton label={ENQUIRY_LABELS.contact} icon="bi-send" />
              <p className="enquiry-card__alt">
                Prefer to reach us directly? Email{' '}
                <a href={`mailto:${COMPANY.emailGeneral}`}>{COMPANY.emailGeneral}</a> or call{' '}
                <a href={`tel:+91${COMPANY.phone}`}>{COMPANY.phone}</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
