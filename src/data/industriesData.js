/* ============================================================
   Vedanjay Power — Industries Served content
   Approved segments only: Renewable Energy, Commercial & Industrial.
   No invented industries, clients, projects, or statistics.
   ============================================================ */

export const OVERVIEW_CAPABILITIES = [
  { icon: 'bi-sun', text: 'Renewable Energy Expertise' },
  { icon: 'bi-graph-up-arrow', text: 'Forecasting & Scheduling' },
  { icon: 'bi-arrow-left-right', text: 'Open-Access Coordination' },
  { icon: 'bi-speedometer2', text: 'Metering & Telemetry' },
  { icon: 'bi-diagram-3', text: 'Electrical Infrastructure' },
  { icon: 'bi-broadcast-pin', text: 'Transmission Support' },
  { icon: 'bi-clipboard-data', text: 'Grid Studies' },
  { icon: 'bi-lightbulb', text: 'Technical Consultancy' },
];

// Reusable industry segments
export const SEGMENTS = [
  {
    id: 'renewable-energy',
    theme: 'solar',
    icon: 'bi-sun',
    image: '/images/industries/renewable.jpg',
    imageAlt: 'Grid-connected solar and wind renewable-energy infrastructure',
    label: 'Industry 01',
    title: 'Renewable Energy',
    desc: 'End-to-end consulting and operational support for solar, wind, and hybrid renewable-energy projects.',
    need: 'Solar, wind and hybrid generators must forecast output accurately, stay grid-compliant, and manage deviations to protect revenue.',
    role: 'Vedanjay Power acts as the QCA / Forecasting & Scheduling partner and technical support arm across the renewable operational lifecycle.',
    value: 'Improved forecast accuracy, reduced DSM exposure, grid compliance, and dependable 24×7 operational support.',
    areas: ['Solar', 'Wind', 'Hybrid Renewable-Energy Projects'],
    services: [
      'Forecasting & Scheduling',
      'QCA Services',
      'DSM Optimization',
      'Open-Access Power Sale / Purchase',
      'ABT Metering',
      'Telemetry',
      'Electrical Infrastructure',
      'Transmission Support',
      'Grid Studies',
      'Renewable Project Consultancy',
    ],
    flow: [
      'Generation',
      'Forecasting',
      'Scheduling',
      'Grid Coordination',
      'Monitoring',
      'DSM Analysis',
      'Infrastructure Support',
      'Technical Consultancy',
    ],
    flowTitle: 'How support can span the value chain',
    flowNote: 'Integrated support can span multiple stages of the power value chain. This is illustrative — not a fixed workflow for every client or project.',
  },
  {
    id: 'commercial-industrial',
    theme: 'grid',
    icon: 'bi-buildings',
    image: '/images/industries/commercial-industrial.jpg',
    imageAlt: 'Industrial facility with renewable power connectivity and transmission',
    label: 'Industry 02',
    title: 'Commercial & Industrial Consumers',
    desc: 'Power procurement, open-access, metering, and technical support solutions for eligible commercial and industrial consumers.',
    need: 'Commercial and industrial consumers seek reliable, cost-effective power — increasingly from renewable and open-access sources.',
    role: 'Vedanjay Power coordinates power procurement, open-access transactions, and the supporting technical infrastructure.',
    value: 'Access to renewable and open-access power, simplified transaction coordination, and dependable metering and connectivity support.',
    services: [
      'Open-access power purchase',
      'Renewable power procurement',
      'Power transaction coordination',
      'Metering and telemetry',
      'Electrical infrastructure consultancy',
      'Grid connectivity support',
    ],
    flow: [
      'Requirement Assessment',
      'Renewable Power Procurement / Open-Access Coordination',
      'Documentation & Coordination',
      'Scheduling / Transaction Coordination',
      'Metering & Telemetry Support',
      'Operational Follow-Up',
    ],
    flowTitle: 'A conceptual support flow',
    flowNote: 'A conceptual service flow that can vary based on project requirements.',
  },
];

// Renewable-energy capability highlights
export const RENEWABLE_CAPABILITIES = [
  {
    icon: 'bi-graph-up-arrow',
    title: 'Forecasting & Scheduling',
    text: 'Support for generation forecasting, schedule preparation and revisions, generation monitoring, deviation analysis, DSM optimization, and coordination.',
  },
  {
    icon: 'bi-patch-check',
    title: 'QCA Services',
    text: 'Support for solar, wind, and hybrid renewable-energy projects.',
  },
  {
    icon: 'bi-diagram-3',
    title: 'Grid Coordination',
    text: 'Experience in SLDC/RLDC coordination and support for applicable operational and regulatory requirements.',
  },
  {
    icon: 'bi-clock-history',
    title: '24×7 Operational Support',
    text: 'Continuous monitoring and operational support for critical Forecasting & Scheduling requirements.',
  },
  {
    icon: 'bi-cpu',
    title: 'Advanced Forecasting',
    text: 'AI/ML-enabled forecasting capabilities through partnership with ENERCAST GmbH, Germany.',
  },
];

// Services by application (organizational relevance, not mandatory claims)
export const APPLICATION_MATRIX = [
  {
    category: 'Forecasting & Operations',
    icon: 'bi-graph-up-arrow',
    renewable: ['Forecasting & Scheduling', 'QCA Services', 'DSM Optimization', 'Generation Monitoring'],
    consumer: [],
  },
  {
    category: 'Power Transactions',
    icon: 'bi-arrow-left-right',
    renewable: ['Open-Access Power Sale / Purchase'],
    consumer: ['Open-Access Power Purchase', 'Renewable Power Procurement', 'Power Transaction Coordination'],
  },
  {
    category: 'Metering & Data',
    icon: 'bi-speedometer2',
    renewable: ['ABT Metering', 'Telemetry'],
    consumer: ['Metering & Telemetry'],
  },
  {
    category: 'Infrastructure & Connectivity',
    icon: 'bi-diagram-3',
    renewable: ['Electrical Infrastructure', 'Transmission Support'],
    consumer: ['Electrical Infrastructure Consultancy', 'Grid Connectivity Support'],
  },
  {
    category: 'Technical Support',
    icon: 'bi-clipboard-data',
    renewable: ['Grid Studies', 'Renewable Project Consultancy'],
    consumer: ['Electrical Infrastructure Consultancy'],
  },
];

export const APPLICATION_INDUSTRIES = ['Renewable Energy', 'Commercial & Industrial'];

// Why industry-specific support matters
export const WHY_STRENGTHS = [
  { icon: 'bi-sun', text: 'Renewable Energy Expertise' },
  { icon: 'bi-geo-alt', text: 'Multi-State QCA Operations' },
  { icon: 'bi-sliders', text: 'DSM Optimization' },
  { icon: 'bi-diagram-3', text: 'Regulatory & Grid Coordination' },
  { icon: 'bi-arrow-left-right', text: 'Open-Access Expertise' },
  { icon: 'bi-speedometer2', text: 'Metering & Telemetry Capability' },
  { icon: 'bi-broadcast-pin', text: 'Electrical Infrastructure Expertise' },
  { icon: 'bi-lightbulb', text: 'Technical Consultancy' },
  { icon: 'bi-clock-history', text: '24×7 Operational Support' },
  { icon: 'bi-people', text: 'Client-Centric Approach' },
];

// Related project support (bridge to Projects page)
export const RELATED_PROJECTS = [
  { icon: 'bi-sun', text: 'Solar Projects' },
  { icon: 'bi-wind', text: 'Wind Projects' },
  { icon: 'bi-layers', text: 'Hybrid Renewable-Energy Projects' },
  { icon: 'bi-diagram-3', text: 'Electrical Infrastructure Projects' },
  { icon: 'bi-broadcast-pin', text: 'Transmission-Related Works' },
  { icon: 'bi-plugin', text: 'Grid Connectivity Projects' },
  { icon: 'bi-arrow-left-right', text: 'Open-Access Power Requirements' },
];
