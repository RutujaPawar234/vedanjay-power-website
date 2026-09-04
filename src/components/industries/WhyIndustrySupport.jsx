import { WHY_STRENGTHS } from '../../data/industriesData.js';

export default function WhyIndustrySupport() {
  return (
    <section className="section ops" id="why-industry">
      <div className="container">
        <div className="text-center reveal">
          <span className="eyebrow eyebrow--light">Why Industry-Specific Support</span>
          <h2 className="section-title mt-2 ops__title">Power-sector needs are rarely one-dimensional</h2>
          <div className="title-rule title-rule--center" />
          <p className="section-lead mx-auto text-center ops__lead">
            Requirements often combine technical, commercial, operational, and coordination
            elements. Integrated expertise connects them.
          </p>
        </div>

        <ul className="why-strip" aria-label="Industry strengths">
          {WHY_STRENGTHS.map((s, i) => (
            <li className="why-strip__item reveal" style={{ '--d': `${i * 45}ms` }} key={s.text}>
              <span className="why-strip__icon" aria-hidden="true"><i className={`bi ${s.icon}`} /></span>
              <span className="why-strip__text">{s.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
