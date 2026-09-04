/**
 * Reusable horizontal/wrapping workflow visualization for a service.
 * Renders ordered steps as connected numbered nodes.
 */
export default function ServiceWorkflow({ steps, title = 'Process / Workflow' }) {
  if (!steps || !steps.length) return null;
  return (
    <div className="workflow" aria-label={title}>
      <h3 className="workflow__title">
        <i className="bi bi-diagram-2" aria-hidden="true" /> {title}
      </h3>
      <ol className="workflow__track">
        {steps.map((step, i) => (
          <li className="workflow__step reveal" style={{ '--d': `${i * 55}ms` }} key={step}>
            <span className="workflow__num" aria-hidden="true">{i + 1}</span>
            <span className="workflow__label">{step}</span>
            {i < steps.length - 1 && (
              <i className="bi bi-arrow-right workflow__arrow" aria-hidden="true" />
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
