import EnquiryButton from '../EnquiryButton.jsx';
import { ENQUIRY_LABELS } from '../../data/enquiry.js';

/**
 * Detailed service content. Rendered inside the ServicesExplorer panel.
 * Decorative heading/section icons removed; list markers kept for readability.
 */
export default function ServiceDetail({ service, index }) {
  const num = String(index + 1).padStart(2, '0');
  const enquiryLabel = ENQUIRY_LABELS[service.id] || ENQUIRY_LABELS.services;

  return (
    <div className="service-detail">
      <span className="eyebrow">Service {num}</span>
      <h2 className="section-title mt-2">{service.title}</h2>
      <div className="title-rule" />
      <p className="section-lead">{service.short}</p>
      <p className="text-muted-green">{service.detailed}</p>

      {service.capabilities && (
        <div className="svc-block">
          <h3 className="svc-block__title">{service.capabilitiesTitle || 'Key Capabilities'}</h3>
          <ul className="svc-list">
            {service.capabilities.map((c) => (
              <li key={c}><i className="bi bi-check2-circle" aria-hidden="true" />{c}</li>
            ))}
          </ul>
        </div>
      )}

      {(service.features || service.benefits) && (
        <div className="row g-4 mt-1">
          {service.features && (
            <div className={service.benefits ? 'col-lg-7' : 'col-12'}>
              <div className="svc-panel">
                <h3 className="svc-panel__title">Features</h3>
                <ul className="svc-grid">
                  {service.features.map((f) => (
                    <li key={f}><i className="bi bi-check2" aria-hidden="true" />{f}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          {service.benefits && (
            <div className="col-lg-5">
              <div className="svc-panel svc-panel--benefits">
                <h3 className="svc-panel__title">Benefits</h3>
                <ul className="svc-list svc-list--benefits">
                  {service.benefits.map((b) => (
                    <li key={b}><i className="bi bi-star-fill" aria-hidden="true" />{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="service-detail__cta">
        <EnquiryButton label={enquiryLabel} icon="bi-chat-dots" />
      </div>
    </div>
  );
}
