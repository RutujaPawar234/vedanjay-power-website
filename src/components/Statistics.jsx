import useCountUp from '../hooks/useCountUp.js';
import { STATS } from '../data/homeData.js';

function StatItem({ stat }) {
  const [display, ref] = useCountUp(stat.value, { duration: 1700 });
  const formatted = Number(display).toLocaleString('en-IN');

  return (
    <div className={`stat ${stat.big ? 'stat--big' : ''}`} ref={ref}>
      <div className="stat__value">
        {stat.literal ? stat.literal : (
          <>
            {formatted}
            {stat.suffix && <span className="stat__suffix">{stat.suffix}</span>}
          </>
        )}
      </div>
      <div className="stat__label">{stat.label}</div>
    </div>
  );
}

export default function Statistics() {
  return (
    <section className="section stats-band" id="stats" aria-label="Key statistics">
      <div className="container">
        <div className="row g-4 g-lg-0 stats-row">
          {STATS.map((s) => (
            <div className="col-6 col-lg-3" key={s.label}>
              <StatItem stat={s} />
            </div>
          ))}
        </div>

        <ul className="stats-meta" aria-label="Additional facts">
          <li><i className="bi bi-calendar-check" aria-hidden="true" /> Established in 2011</li>
          <li><i className="bi bi-shield-check" aria-hidden="true" /> WRLDC Registration</li>
          <li><i className="bi bi-lightning-charge" aria-hidden="true" /> Solar&nbsp;|&nbsp;Wind&nbsp;|&nbsp;Hybrid</li>
        </ul>
      </div>
    </section>
  );
}
