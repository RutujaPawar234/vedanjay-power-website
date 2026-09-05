import { LEADERS } from '../../data/leadershipData.js';

export default function LeadershipProfiles() {
  return (
    <section className="section section--mist" id="leadership-profiles">
      <div className="container">
        <div className="text-center reveal">
          <span className="eyebrow">Leadership Profiles</span>
          <h2 className="section-title lead-profiles-title mt-2">Our Leadership Team</h2>
          <div className="title-rule title-rule--center" />
        </div>

        <div className="row g-4 justify-content-center mt-2">
          {LEADERS.map((l) => (
            <div className="col-sm-9 col-md-6 col-lg-4 reveal" key={l.name}>
              <article className="lead-profile">
                <div className="lead-profile__photo lead-profile__photo--img" role="img" aria-label={`Photograph of ${l.name}`}>
                  {l.photo ? (
                    <img className="lead-profile__img" src={l.photo} alt={l.name} loading="lazy" />
                  ) : (
                    <span className="lead-profile__initials" aria-hidden="true">{l.initials}</span>
                  )}
                </div>

                <div className="lead-profile__body">
                  <h3 className="lead-profile__name">{l.name}</h3>
                  <p className="lead-profile__role">{l.role}</p>

                  <div className="lead-profile__links">
                    {l.linkedinStatus === 'available' && l.linkedin ? (
                      <a
                        className="lead-profile__linkedin"
                        href={l.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${l.name} on LinkedIn`}
                      >
                        <i className="bi bi-linkedin" aria-hidden="true" /> LinkedIn
                      </a>
                    ) : (
                      <span className="lead-profile__pending">
                        <i className="bi bi-linkedin" aria-hidden="true" /> LinkedIn — {l.linkedinStatus}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
