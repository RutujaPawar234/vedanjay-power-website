/* ============================================================
   Vedanjay Power — Project Portfolio content
   APPROVED information only. Unconfirmed fields are shown as
   pending — never as fabricated values, "0", or "N/A".
   No invented projects, dates, capacities, or client logos.
   ============================================================ */

export const PORTFOLIO_OVERVIEW = [
  { icon: 'bi-diagram-3', text: 'Electrical Infrastructure' },
  { icon: 'bi-broadcast-pin', text: 'Transmission-Related Works' },
  { icon: 'bi-clipboard-check', text: 'Testing & Commissioning' },
  { icon: 'bi-speedometer2', text: 'Metering Infrastructure' },
  { icon: 'bi-people', text: 'Utility Coordination' },
  { icon: 'bi-sun', text: 'Renewable-Energy Operational Support' },
  { icon: 'bi-graph-up-arrow', text: 'Forecasting & Scheduling / QCA' },
];

// Section 3 — approved portfolio record. Pending fields stay pending.
export const INFRASTRUCTURE_PORTFOLIO = {
  clients: ['MPPTCL', 'Inox Wind Infrastructure Services'],
  // Pending / non-factual-value fields (do NOT render as data)
  pending: {
    location: 'Madhya Pradesh and other project locations as per project records',
    year: 'To be confirmed project-wise',
    capacity: 'Project-wise capacity to be provided',
  },
  services: [
    'Electrical infrastructure erection',
    'Installation',
    'Testing',
    'Commissioning',
    'Transmission-related works',
    'Utility liaisoning',
    'Metering infrastructure',
  ],
};

// Section 4 — exact approved technical items, grouped by work category.
export const TECHNICAL_CAPABILITIES = [
  {
    icon: 'bi-tools',
    category: 'Infrastructure Installation',
    items: ['220 kV CVT installation'],
  },
  {
    icon: 'bi-building-gear',
    category: 'Substation & Feeder Systems',
    items: ['132 kV EHV feeder bay erection and civil works', '132 kV traction substation works'],
  },
  {
    icon: 'bi-broadcast-pin',
    category: 'Transmission Works',
    items: ['33 kV transmission line installation', 'Transmission line stringing'],
  },
  {
    icon: 'bi-speedometer2',
    category: 'Metering Infrastructure',
    items: ['HT metering-yard works'],
  },
  {
    icon: 'bi-clipboard-check',
    category: 'Testing & Commissioning',
    items: ['Testing and commissioning'],
  },
];

// Section 5 — careful, approved execution wording (no EPC/universal claims).
export const EXECUTION_CAPABILITIES = [
  { icon: 'bi-hammer', title: 'Erection & Installation', text: 'Support for electrical infrastructure erection and installation requirements.' },
  { icon: 'bi-broadcast-pin', title: 'Transmission-Related Works', text: 'Capabilities covering approved transmission-related project scopes.' },
  { icon: 'bi-clipboard-check', title: 'Testing & Commissioning', text: 'Technical execution involving testing and commissioning activities.' },
  { icon: 'bi-speedometer2', title: 'Metering Infrastructure', text: 'Support for approved HT metering-yard and related metering infrastructure works.' },
  { icon: 'bi-people', title: 'Utility Liaisoning', text: 'Coordination support related to project and utility requirements.' },
];

// Section 6 — renewable operational portfolio context (NOT installed/owned capacity).
export const RENEWABLE_CONTEXT = {
  figure: '5,000+ MW',
  figureLabel: 'Renewable Portfolio Under QCA / F&S Management',
  disclaimer:
    'This figure represents the renewable portfolio managed under QCA / Forecasting & Scheduling operations — not installed, constructed, or owned generation capacity.',
  areas: ['Solar', 'Wind', 'Hybrid'],
  capabilities: [
    'Renewable-energy forecasting',
    'Day-ahead and intraday scheduling support',
    'Schedule revisions',
    'SLDC/RLDC coordination',
    'Generation monitoring',
    'DSM / deviation monitoring',
    'Regulatory compliance support',
    'Operational communication',
  ],
};

// Section 7 — the ONLY approved results statement.
export const PROJECT_RESULTS_STATEMENT =
  'Successful execution of multiple electrical infrastructure works as listed in the company project portfolio.';

// Section 8 — project & service categories (approved).
export const PROJECT_CATEGORIES = [
  { icon: 'bi-sun', title: 'Renewable Energy Support', items: ['Solar', 'Wind', 'Hybrid'] },
  { icon: 'bi-graph-up-arrow', title: 'Power Operations', items: ['Forecasting & Scheduling', 'QCA Services', 'DSM Management', 'Generation Monitoring'] },
  { icon: 'bi-diagram-3', title: 'Electrical Infrastructure', items: ['High-Voltage Electrical Works', 'EHV Feeder Bay Works', 'Substation-Related Works', 'CVT Installation'] },
  { icon: 'bi-broadcast-pin', title: 'Transmission', items: ['Transmission Infrastructure', 'Transmission Line Installation', 'Transmission Line Stringing', 'Grid Connectivity Support'] },
  { icon: 'bi-speedometer2', title: 'Metering & Telemetry', items: ['ABT Metering', 'Telemetry', 'HT Metering Infrastructure'] },
  { icon: 'bi-clipboard-data', title: 'Technical Support', items: ['Grid Studies', 'Electrical Assessment', 'Technical Reports', 'Grid Integration Consultancy'] },
];

// Section 9 — reusable case-study architecture. INTENTIONALLY EMPTY.
// Populate ONLY with future approved project information.
export const CASE_STUDIES = [];
