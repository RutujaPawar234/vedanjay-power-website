import { APPLICATION_MATRIX, APPLICATION_INDUSTRIES } from '../../data/industriesData.js';

function Cell({ items }) {
  if (!items || items.length === 0) {
    return <span className="appmx__none" aria-label="Not typically applicable">—</span>;
  }
  return (
    <ul className="appmx__list">
      {items.map((it) => (
        <li key={it}>{it}</li>
      ))}
    </ul>
  );
}

export default function ServicesByApplication() {
  return (
    <section className="section section--mist" id="services-by-application">
      <div className="container">
        <div className="text-center reveal">
          <span className="eyebrow">Services by Application</span>
          <h2 className="section-title mt-2">Relevant support areas by industry</h2>
          <div className="title-rule title-rule--center" />
          <p className="section-lead mx-auto text-center">
            An organizational view of service relevance. Applicability varies by project — no
            service is mandatory for every industry.
          </p>
        </div>

        <div className="appmx reveal" role="table" aria-label="Relevant support areas by industry">
          <div className="appmx__head" role="row">
            <span role="columnheader">Category</span>
            <span role="columnheader">{APPLICATION_INDUSTRIES[0]}</span>
            <span role="columnheader">{APPLICATION_INDUSTRIES[1]}</span>
          </div>

          {APPLICATION_MATRIX.map((row) => (
            <div className="appmx__row" role="row" key={row.category}>
              <div className="appmx__cat" role="rowheader">
                {row.category}
              </div>
              <div className="appmx__cell" role="cell" data-label="Renewable Energy">
                <Cell items={row.renewable} />
              </div>
              <div className="appmx__cell" role="cell" data-label="Commercial & Industrial">
                <Cell items={row.consumer} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
