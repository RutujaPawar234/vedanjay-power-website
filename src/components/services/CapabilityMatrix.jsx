import { useState } from 'react';
import { CAPABILITY_MATRIX } from '../../data/servicesData.js';

export default function CapabilityMatrix() {
  const [active, setActive] = useState(0);
  const current = CAPABILITY_MATRIX[active];

  return (
    <section className="section" id="capability-matrix">
      <div className="container">
        <div className="text-center reveal">
          <span className="eyebrow">Capability Matrix</span>
          <h2 className="section-title mt-2">Find the capability for your requirement</h2>
          <div className="title-rule title-rule--center" />
          <p className="section-lead mx-auto text-center">
            An organizational view of our capabilities across the power sector.
          </p>
        </div>

        <div className="matrix">
          <div className="matrix__tabs" role="tablist" aria-label="Capability categories">
            {CAPABILITY_MATRIX.map((cat, i) => (
              <button
                key={cat.category}
                type="button"
                role="tab"
                aria-selected={i === active}
                className={`matrix__tab ${i === active ? 'is-active' : ''}`}
                onClick={() => setActive(i)}
              >
                <i className={`bi ${cat.icon}`} aria-hidden="true" />
                {cat.category}
              </button>
            ))}
          </div>

          <div className="matrix__panel" role="tabpanel" key={active}>
            <ul className="matrix__items">
              {current.items.map((item) => (
                <li key={item} className="matrix__item">
                  <i className="bi bi-check2-circle" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
