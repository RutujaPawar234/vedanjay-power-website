import { ORG_STRENGTHS } from '../../data/leadershipData.js';

export default function OrganizationalStrength() {
  return (
    <section className="section ops" id="organizational-strength">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-5 reveal-left">
            <span className="eyebrow eyebrow--light">Organizational Strength</span>
            <h2 className="section-title mt-2 ops__title">Experience translated into capability</h2>
            <div className="title-rule" />
            <p className="section-lead ops__lead">
              Under its leadership, Vedanjay Power combines renewable-energy expertise, regulatory
              understanding, and dependable operations across the power value chain.
            </p>
            <div className="context-figure" role="img" aria-label="15 plus years of experience since 2011">
              <span className="context-figure__value">15+</span>
              <span className="context-figure__label">Years of Experience — Established in 2011</span>
            </div>
          </div>

          <div className="col-lg-7">
            <ul className="orgstr-grid" aria-label="Organizational strengths">
              {ORG_STRENGTHS.map((s, i) => (
                <li className="orgstr-item reveal" style={{ '--d': `${i * 45}ms` }} key={s.text}>
                  <span className="orgstr-item__icon" aria-hidden="true"><i className={`bi ${s.icon}`} /></span>
                  <span className="orgstr-item__text">{s.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
