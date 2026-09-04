/**
 * Reusable case-study card. Architecture only — rendered ONLY when
 * approved project data is supplied. No fabricated content.
 *
 * Expected future shape:
 *   { title, client, location, year, capacity, scope: [], summary, image, imageAlt }
 * Any field left undefined is simply omitted (never shown as fake or "N/A").
 */
export default function ProjectCaseStudyCard({ project }) {
  if (!project || !project.title) return null;
  const { title, client, location, year, capacity, scope = [], summary, image, imageAlt } = project;

  return (
    <article className="case-card">
      {image && (
        <div className="case-card__media">
          <img src={image} alt={imageAlt || title} loading="lazy" />
        </div>
      )}
      <div className="case-card__body">
        <h3 className="case-card__title">{title}</h3>
        <ul className="case-card__meta">
          {client && <li><i className="bi bi-buildings" aria-hidden="true" />{client}</li>}
          {location && <li><i className="bi bi-geo-alt" aria-hidden="true" />{location}</li>}
          {year && <li><i className="bi bi-calendar-event" aria-hidden="true" />{year}</li>}
          {capacity && <li><i className="bi bi-lightning-charge" aria-hidden="true" />{capacity}</li>}
        </ul>
        {summary && <p className="case-card__summary">{summary}</p>}
        {scope.length > 0 && (
          <ul className="case-card__scope">
            {scope.map((s) => <li key={s}><i className="bi bi-check2" aria-hidden="true" />{s}</li>)}
          </ul>
        )}
      </div>
    </article>
  );
}
