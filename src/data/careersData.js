/* ============================================================
   Vedanjay Power — Careers content
   Approved values, capabilities, and openings only.
   No invented benefits, salary, requirements, or role details.
   ============================================================ */

export const WHY_WORK = [
  { icon: 'bi-gem', title: 'Technical Excellence', text: 'Continuous improvement in technical expertise and service quality.' },
  { icon: 'bi-lightbulb', title: 'Innovation', text: 'Using technology, data, and innovative approaches to improve power management.' },
  { icon: 'bi-hand-thumbs-up', title: 'Reliability', text: 'Accurate forecasting, dependable execution, and timely service delivery.' },
  { icon: 'bi-person-check', title: 'Customer Focus', text: 'Understanding client requirements and delivering practical, value-driven solutions.' },
  { icon: 'bi-tree', title: 'Sustainability', text: 'Supporting renewable energy and a cleaner, more efficient power ecosystem.' },
  { icon: 'bi-file-earmark-check', title: 'Compliance & Responsibility', text: 'Strong standards of regulatory compliance, safety, quality, and responsible practices.' },
  { icon: 'bi-diagram-3', title: 'Power-Sector Exposure', text: 'Work across forecasting, open access, metering, transmission, and grid consultancy.' },
  { icon: 'bi-sun', title: 'Renewable Energy Expertise', text: 'Contribute to solar, wind, and hybrid renewable-energy operations.' },
];

export const CAREER_AREAS = [
  { icon: 'bi-bar-chart-line-fill', title: 'Forecasting & Scheduling', text: 'Renewable-energy forecasting, scheduling, QCA, and DSM operations.' },
  { icon: 'bi-broadcast-pin', title: 'Power-Sector Operations', text: 'Generation monitoring, deviation analysis, and operational support.' },
  { icon: 'bi-briefcase-fill', title: 'Business Development', text: 'Client engagement and growth across power-sector services.' },
  { icon: 'bi-sun-fill', title: 'Renewable Energy', text: 'Support for solar, wind, and hybrid renewable-energy projects.' },
  { icon: 'bi-diagram-3-fill', title: 'Technical / Electrical Infrastructure', text: 'Electrical infrastructure, transmission, testing, and commissioning.' },
];

// Only the approved openings. No invented salary/experience/location/etc.
export const OPENINGS = [
  {
    id: 'forecasting-scheduling-roles',
    icon: 'bi-graph-up-arrow',
    title: 'Forecasting & Scheduling Roles',
    detail: 'Detailed role information will be shared during the recruitment process.',
  },
  {
    id: 'bde-forecasting-scheduling',
    icon: 'bi-briefcase',
    title: 'Business Development Executive – Forecasting & Scheduling',
    detail: 'Detailed role information will be shared during the recruitment process.',
  },
];

// Position dropdown — matches openings exactly.
export const POSITIONS = OPENINGS.map((o) => o.title);
