import { PROJECT_CATEGORIES } from '../../data/projectsData.js';

export default function ProjectCategories() {
  return (
    <section className="section section--mist" id="project-categories">
      <div className="container">
        <div className="text-center reveal">
          <span className="eyebrow">Project Categories</span>
          <h2 className="section-title mt-2">Project &amp; service categories</h2>
          <div className="title-rule title-rule--center" />
        </div>

        <div className="row g-4 mt-2">
          {PROJECT_CATEGORIES.map((cat, i) => (
            <div className="col-md-6 col-lg-4 reveal" style={{ '--d': `${i * 55}ms` }} key={cat.title}>
              <article className="pcat-card">
                <div className="pcat-card__head">
                  <span className="pcat-card__icon" aria-hidden="true"><i className={`bi ${cat.icon}`} /></span>
                  <h3 className="pcat-card__title">{cat.title}</h3>
                </div>
                <ul className="pcat-card__list">
                  {cat.items.map((it) => (
                    <li key={it}><i className="bi bi-dot" aria-hidden="true" />{it}</li>
                  ))}
                </ul>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
