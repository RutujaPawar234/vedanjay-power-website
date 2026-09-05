import { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * Compact 24×7 operational-support highlight. Scope is explicitly limited to
 * QCA / Forecasting & Scheduling operations — NOT general corporate hours.
 * Uses the supplied graphic (/images/home/ops-24x7.png) when present,
 * otherwise an animated CSS/SVG monitoring scene.
 */
export default function OperationalSupport() {
  const [imgOk, setImgOk] = useState(false);

  return (
    <section className="section ops-support" id="operational-support">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 reveal-left">
            <span className="eyebrow">Always On</span>
            <h2 className="section-title mt-2 ops-support__title">24×7 Operational Support</h2>
            <div className="title-rule" />
            <p className="section-lead ops-support__lead">
              Round-the-clock monitoring and support for QCA / Forecasting &amp; Scheduling
              operations — keeping renewable schedules accurate and grid-compliant.
            </p>
            <ul className="ops-support__list" aria-label="Operational support highlights">
              <li><i className="bi bi-activity" aria-hidden="true" /> Continuous real-time monitoring</li>
              <li><i className="bi bi-arrow-repeat" aria-hidden="true" /> Schedule revisions &amp; DSM tracking</li>
              <li><i className="bi bi-diagram-3" aria-hidden="true" /> SLDC / RLDC coordination</li>
            </ul>
            <Link to="/services" className="btn-vp btn-vp-sm ops-support__cta mt-2">
              QCA &amp; Forecasting Services
              <i className="bi bi-arrow-right" aria-hidden="true" />
            </Link>
          </div>

          <div className="col-lg-6 reveal-right">
            <div className={`ops-monitor ${imgOk ? 'has-img' : ''}`} role="img" aria-label="Continuous 24 by 7 renewable forecasting operations monitoring">
              {/* Supplied graphic (drop /images/home/ops-24x7.png). Shows
                  above the animation when present; hidden until it loads. */}
              <img
                className="ops-monitor__img"
                src="/images/home/ops-24x7.png"
                alt="24/7 operations — always monitoring, always on"
                loading="lazy"
                onError={() => setImgOk(false)}
                onLoad={(e) => setImgOk(!!e.currentTarget.naturalWidth)}
                style={imgOk ? undefined : { display: 'none' }}
              />

              {/* Animated monitoring scene — always shown, above/around the image. */}
              <span className="ops-monitor__ring" aria-hidden="true">
                <span className="ops-monitor__pulse" />
                <span className="ops-monitor__badge">24×7</span>
              </span>
              <svg className="ops-monitor__wave" viewBox="0 0 320 90" aria-hidden="true" focusable="false" preserveAspectRatio="none">
                <path id="opsWave1" className="ops-wave__line" d="M0 60 Q 40 20 80 50 T 160 45 T 240 40 T 320 48" fill="none" stroke="var(--vp-green-600)" strokeWidth="2.5" />
                <path id="opsWave2" className="ops-wave__line ops-wave__line--2" d="M0 70 Q 40 45 80 65 T 160 60 T 240 58 T 320 62" fill="none" stroke="var(--vp-green-400)" strokeWidth="2" opacity="0.8" />
                <circle r="3.5" fill="var(--vp-green-600)">
                  <animateMotion dur="3s" repeatCount="indefinite" rotate="auto"><mpath href="#opsWave1" /></animateMotion>
                </circle>
                <circle r="3" fill="var(--vp-green-500)">
                  <animateMotion dur="3.6s" begin="0.6s" repeatCount="indefinite" rotate="auto"><mpath href="#opsWave2" /></animateMotion>
                </circle>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
