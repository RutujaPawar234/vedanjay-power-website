import { Link } from 'react-router-dom';
import { JOURNEY } from '../data/homeData.js';

export default function JourneyPreview() {
  return (
    <section className="section" id="journey">
      <div className="container">
        <div className="text-center reveal">
          <span className="eyebrow">Our Journey</span>
          <h2 className="section-title mt-2">Growing capability since 2011</h2>
          <div className="title-rule title-rule--center" />
        </div>

        <div className="journey">
          <div className="journey__start reveal-scale">
            <span className="journey__year">{JOURNEY.start.year}</span>
            <span className="journey__start-label">{JOURNEY.start.label}</span>
          </div>

          <ol className="journey__track" aria-label="Areas of growth since establishment">
            {JOURNEY.growth.map((g, i) => (
              <li
                className="journey__item reveal"
                style={{ '--d': `${i * 60}ms` }}
                key={g}
              >
                <span className="journey__dot" aria-hidden="true" />
                <span className="journey__label">{g}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="text-center mt-4 reveal">
          <Link to="/about" className="btn-vp btn-vp-outline">
            Explore Our Journey
            <i className="bi bi-arrow-right" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
