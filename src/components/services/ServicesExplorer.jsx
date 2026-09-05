import { useState } from 'react';
import { SERVICES } from '../../data/servicesData.js';
import ServiceDetail from './ServiceDetail.jsx';

/**
 * Tabbed services explorer: a vertical list of all services on the left,
 * the selected service's full detail on the right. Replaces the earlier
 * horizontally-scrolling nav + long stacked sections.
 */
export default function ServicesExplorer() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = SERVICES[activeIdx];

  return (
    <section className="section svc-explorer-section" id="services">
      <div className="container">
        <div className="text-center reveal">
          <span className="eyebrow">What We Do</span>
          <h2 className="section-title mt-2">Explore our services</h2>
          <div className="title-rule title-rule--center" />
        </div>

        <div className="svc-explorer mt-4">
          <aside className="svc-explorer__nav" aria-label="Select a service">
            <ul className="svc-explorer__list" role="tablist" aria-orientation="vertical">
              {SERVICES.map((s, i) => (
                <li key={s.id} role="presentation">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={i === activeIdx}
                    className={`svc-explorer__item ${i === activeIdx ? 'is-active' : ''}`}
                    onClick={() => setActiveIdx(i)}
                  >
                    <span className="svc-explorer__num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="svc-explorer__title">{s.title}</span>
                    <i className="bi bi-chevron-right svc-explorer__arrow" aria-hidden="true" />
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          <div className="svc-explorer__panel" role="tabpanel" key={active.id}>
            <ServiceDetail service={active} index={activeIdx} />
          </div>
        </div>
      </div>
    </section>
  );
}
