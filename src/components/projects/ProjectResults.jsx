import { PROJECT_RESULTS_STATEMENT } from '../../data/projectsData.js';

export default function ProjectResults() {
  return (
    <section className="section" id="project-results">
      <div className="container">
        <div className="results-band reveal-scale">
          <span className="results-band__icon" aria-hidden="true"><i className="bi bi-patch-check-fill" /></span>
          <span className="eyebrow">Project Results</span>
          <p className="results-band__statement">{PROJECT_RESULTS_STATEMENT}</p>
        </div>
      </div>
    </section>
  );
}
