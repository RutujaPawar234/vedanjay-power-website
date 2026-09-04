import { useMemo, useState } from 'react';
import useCountUp from '../../hooks/useCountUp.js';
import {
  PORTFOLIO_PROJECTS,
  PORTFOLIO_BY_STATE,
  PORTFOLIO_TOTAL_MW,
  PORTFOLIO_COUNT,
} from '../../data/portfolioData.js';

const techIcon = { Solar: 'bi-sun', Wind: 'bi-wind', Renewable: 'bi-lightning-charge' };

export default function RenewablePortfolio() {
  const [active, setActive] = useState('all');
  const [countDisplay, countRef] = useCountUp(5509.18, { duration: 1600, decimals: 0 });

  const projects = useMemo(
    () => (active === 'all' ? PORTFOLIO_PROJECTS : PORTFOLIO_PROJECTS.filter((p) => p.state === active)),
    [active]
  );

  return (
    <section className="section section--mist" id="renewable-portfolio">
      <div className="container">
        <div className="text-center reveal">
          <span className="eyebrow">Renewable Portfolio</span>
          <h2 className="section-title mt-2">Portfolio under QCA / Forecasting &amp; Scheduling</h2>
          <div className="title-rule title-rule--center" />
          <p className="section-lead mx-auto text-center">
            Renewable-energy projects managed under our QCA / Forecasting &amp; Scheduling operations.
            This represents the managed F&amp;S portfolio — not owned or installed generation capacity.
          </p>
        </div>

        {/* Headline totals */}
        <div className="pf-totals reveal" ref={countRef}>
          <div className="pf-total">
            <span className="pf-total__value">{PORTFOLIO_TOTAL_MW}<span className="pf-total__unit"> MW</span></span>
            <span className="pf-total__label">Managed under QCA / F&amp;S</span>
          </div>
          <div className="pf-total">
            <span className="pf-total__value">{PORTFOLIO_COUNT}</span>
            <span className="pf-total__label">Renewable Projects</span>
          </div>
          <div className="pf-total">
            <span className="pf-total__value">{PORTFOLIO_BY_STATE.length}</span>
            <span className="pf-total__label">States / Regions</span>
          </div>
        </div>

        {/* Interactive by-state filter */}
        <div className="pf-states" role="group" aria-label="Filter portfolio by state">
          <button type="button" className={`pf-state ${active === 'all' ? 'is-active' : ''}`} onClick={() => setActive('all')}>
            <span className="pf-state__name">All States</span>
            <span className="pf-state__meta">{PORTFOLIO_COUNT} · {PORTFOLIO_TOTAL_MW} MW</span>
          </button>
          {PORTFOLIO_BY_STATE.map((s) => (
            <button
              key={s.state}
              type="button"
              className={`pf-state ${active === s.state ? 'is-active' : ''}`}
              onClick={() => setActive(s.state)}
              aria-pressed={active === s.state}
            >
              <span className="pf-state__name">{s.state}</span>
              <span className="pf-state__meta">{s.count} · {s.mw} MW</span>
            </button>
          ))}
        </div>

        {/* Project list */}
        <div className="pf-table-wrap reveal">
          <table className="pf-table">
            <caption className="visually-hidden">
              Renewable projects managed under QCA / Forecasting &amp; Scheduling
              {active !== 'all' ? ` in ${active}` : ''}
            </caption>
            <thead>
              <tr>
                <th scope="col">Project</th>
                <th scope="col">Technology</th>
                <th scope="col" className="pf-num">Capacity (MW)</th>
                <th scope="col">Location</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((p) => (
                <tr key={p.name}>
                  <td data-label="Project">{p.name}</td>
                  <td data-label="Technology">
                    <span className="pf-tech"><i className={`bi ${techIcon[p.tech]}`} aria-hidden="true" /> {p.tech}</span>
                  </td>
                  <td data-label="Capacity (MW)" className="pf-num">{p.mw}</td>
                  <td data-label="Location">{p.state}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="pf-note">Portfolio figures are managed QCA / F&amp;S capacities. Project-specific details are available on request.</p>
      </div>
    </section>
  );
}
