import { Link } from 'react-router-dom';
import { LEADERS } from '../data/homeData.js';

export default function LeadershipPreview() {
  return (
    <section className="section section--mist" id="leadership">
      <div className="container">
        <div className="text-center reveal">
          <span className="eyebrow">Leadership</span>
          <h2 className="section-title mt-2">Guided by experienced leadership</h2>
          <div className="title-rule title-rule--center" />
        </div>

        <div className="row g-4 justify-content-center mt-2">
          {LEADERS.map((l) => (
            <div className="col-sm-8 col-md-5 col-lg-4 reveal" key={l.name}>
              <article className="leader-card">
                {/* Placeholder container — awaiting approved photograph.
                    No fabricated portrait is used. */}
                <div className={`leader-card__photo ${l.photo ? 'leader-card__photo--img' : ''}`} role="img" aria-label={`Photograph of ${l.name}`}>
                  {l.photo ? (
                    <img className="leader-card__img" src={l.photo} alt={l.name} loading="lazy" />
                  ) : (
                    <span className="leader-card__initials" aria-hidden="true">{l.initials}</span>
                  )}
                </div>
                <h3 className="leader-card__name">{l.name}</h3>
                <p className="leader-card__role">{l.role}</p>
                {l.linkedin && (
                  <a
                    className="leader-card__linkedin"
                    href={l.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${l.name} on LinkedIn`}
                  >
                    <i className="bi bi-linkedin" aria-hidden="true" /> LinkedIn
                  </a>
                )}
              </article>
            </div>
          ))}
        </div>

        <div className="text-center mt-4 reveal">
          <Link to="/leadership" className="btn-vp btn-vp-outline">
            Meet Our Leadership
            <i className="bi bi-arrow-right" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
