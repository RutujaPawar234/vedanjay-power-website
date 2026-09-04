import ServiceWorkflow from './ServiceWorkflow.jsx';
import EnquiryButton from '../EnquiryButton.jsx';
import { ENQUIRY_LABELS } from '../../data/enquiry.js';

/**
 * Reusable detailed service section (text-first, no imagery).
 */
export default function ServiceDetail({ service, index }) {
  const num = String(index + 1).padStart(2, '0');
  const enquiryLabel = ENQUIRY_LABELS[service.id] || ENQUIRY_LABELS.services;

  return (
    <section
      className={`section service-detail ${index % 2 === 1 ? 'section--mist' : ''}`}
      id={service.id}
    >
      <div className="container">
        <div className="row g-4">
          {/* Copy */}
          <div className="col-lg-11 reveal">
            <span className="eyebrow">Service {num}</span>
            <h2 className="section-title mt-2 d-flex align-items-center gap-2">
              <span className="service-detail__icon" aria-hidden="true">
                <i className={`bi ${service.icon}`} />
              </span>
              {service.title}
            </h2>
            <div className="title-rule" />
            <p className="section-lead">{service.short}</p>
            <p className="text-muted-green">{service.detailed}</p>

            {service.capabilities && (
              <div className="svc-block">
                <h3 className="svc-block__title">
                  <i className="bi bi-list-check" aria-hidden="true" />
                  {service.capabilitiesTitle || 'Key Capabilities'}
                </h3>
                <ul className="svc-list">
                  {service.capabilities.map((c) => (
                    <li key={c}><i className="bi bi-check2-circle" aria-hidden="true" />{c}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Features + Benefits */}
        {(service.features || service.benefits) && (
          <div className="row g-4 mt-1">
            {service.features && (
              <div className={service.benefits ? 'col-lg-7' : 'col-12'}>
                <div className="svc-panel reveal">
                  <h3 className="svc-panel__title"><i className="bi bi-gear-wide-connected" aria-hidden="true" /> Features</h3>
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
                <div className="svc-panel svc-panel--benefits reveal">
                  <h3 className="svc-panel__title"><i className="bi bi-graph-up-arrow" aria-hidden="true" /> Benefits</h3>
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

        {/* Workflow */}
        {service.workflow && (
          <div className="mt-4 reveal">
            <ServiceWorkflow steps={service.workflow} />
          </div>
        )}

        {/* Service-specific enquiry CTA → official Google Form */}
        <div className="service-detail__cta reveal">
          <EnquiryButton label={enquiryLabel} icon="bi-chat-dots" />
        </div>
      </div>
    </section>
  );
}
