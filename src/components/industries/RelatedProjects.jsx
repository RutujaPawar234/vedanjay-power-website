import { Link } from 'react-router-dom';
import { RELATED_PROJECTS } from '../../data/industriesData.js';

export default function RelatedProjects() {
  return (
    <section className="section" id="related-projects">
      <div className="container">
        <div className="text-center reveal">
          <span className="eyebrow">Related Project Support</span>
          <h2 className="section-title mt-2">Project categories we support</h2>
          <div className="title-rule title-rule--center" />
        </div>

        <div className="row g-3 g-md-4 mt-2">
          {RELATED_PROJECTS.map((p, i) => (
            <div className="col-6 col-md-4 col-lg-3 reveal" style={{ '--d': `${i * 55}ms` }} key={p.text}>
              <div className="proj-cat">
                <span className="proj-cat__text">{p.text}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4 reveal">
          <Link to="/projects" className="btn-vp btn-vp-gold">
            Explore Our Project Portfolio
            <i className="bi bi-arrow-right" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
