import { ENQUIRY_FORM_URL } from '../data/enquiry.js';

/**
 * Premium CTA that opens the official Vedanjay service-enquiry Google Form
 * in a new tab. Single enquiry destination site-wide.
 */
export default function EnquiryButton({
  label = 'Discuss Your Requirement',
  className = 'btn-vp btn-vp-gold',
  icon = 'bi-chat-dots',
}) {
  return (
    <a
      href={ENQUIRY_FORM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {icon && <i className={`bi ${icon}`} aria-hidden="true" />}
      {label}
      <i className="bi bi-box-arrow-up-right enquiry-ext" aria-hidden="true" />
    </a>
  );
}
