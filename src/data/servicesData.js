/* ============================================================
   Vedanjay Power — Services content
   Approved facts only. No invented services, numbers, or claims.
   ============================================================ */

// Power value chain (interactive overview)
export const VALUE_CHAIN = [
  { icon: 'bi-sun', label: 'Renewable Generation' },
  { icon: 'bi-graph-up-arrow', label: 'Forecasting & Scheduling' },
  { icon: 'bi-diagram-3', label: 'Grid Coordination' },
  { icon: 'bi-arrow-left-right', label: 'Power Transactions' },
  { icon: 'bi-speedometer2', label: 'Metering & Telemetry' },
  { icon: 'bi-broadcast-pin', label: 'Infrastructure & Transmission' },
  { icon: 'bi-clipboard-data', label: 'Grid Studies & Consultancy' },
];

export const SERVICES = [
  {
    id: 'qca-forecasting-scheduling',
    theme: 'ops',
    icon: 'bi-graph-up-arrow',
    image: '/images/services/qca.jpg',
    imageAlt: 'Renewable-energy forecasting and scheduling operations environment',
    title: 'QCA / Forecasting & Scheduling',
    short: 'End-to-end QCA, Forecasting & Scheduling support for renewable-energy generators.',
    detailed:
      'Vedanjay Power provides comprehensive Forecasting & Scheduling services for solar, wind, and hybrid renewable-energy projects. Our services include generation forecasting, schedule preparation and revisions, SLDC/RLDC coordination, generation monitoring, deviation analysis, DSM optimization, and regulatory compliance support.',
    features: [
      'Solar, wind, and hybrid forecasting',
      'Day-ahead forecasting',
      'Intraday scheduling support',
      'Schedule revisions',
      'SLDC/RLDC coordination',
      'Generation monitoring',
      'DSM/deviation analysis',
      'Regulatory compliance support',
      '24×7 operational support',
    ],
    benefits: [
      'Improved forecast accuracy',
      'Reduced DSM exposure',
      'Timely schedule submissions',
      'Better grid compliance',
      'Improved operational visibility',
      'Better revenue protection',
    ],
    workflow: [
      'Plant and meter data collection',
      'Weather and generation data analysis',
      'Forecast preparation',
      'Forecast validation',
      'Schedule preparation / submission',
      'SLDC/RLDC coordination',
      'Real-time generation monitoring',
      'Permitted schedule revisions',
      'Deviation / DSM analysis',
      'Reporting and operational support',
    ],
  },
  {
    id: 'open-access-power',
    theme: 'ecosystem',
    icon: 'bi-arrow-left-right',
    image: '/images/services/open-access.jpg',
    imageAlt: 'Renewable power transaction and open-access coordination across the grid',
    title: 'Open-Access Power Sale & Purchase',
    short: 'Open-access power sale and purchase solutions for renewable-energy generators and eligible consumers.',
    detailed:
      'Vedanjay Power supports renewable-energy generators and eligible HT consumers with open-access power sale and purchase under applicable intra-state and inter-state mechanisms.',
    capabilitiesTitle: 'Services include',
    capabilities: [
      'Generator-consumer coordination',
      'Commercial support',
      'Open-access documentation',
      'Utility/DISCOM liaisoning',
      'Transaction coordination',
    ],
    features: [
      'Renewable power sale support',
      'Renewable power purchase support',
      'Open-access coordination',
      'Generator-consumer coordination',
      'DISCOM/utility liaisoning',
      'Documentation support',
      'Transaction coordination',
      'Scheduling coordination',
      'Commercial and operational support',
    ],
    benefits: [
      'Access to renewable power markets',
      'Simplified open-access coordination',
      'Better generator-consumer connectivity',
      'Reduced administrative complexity',
      'Improved transaction management',
      'End-to-end operational support',
    ],
    workflow: [
      'Requirement assessment',
      'Generator / consumer identification',
      'Commercial coordination',
      'Open-access documentation',
      'Utility / DISCOM liaisoning',
      'Approval / coordination',
      'Scheduling and transaction coordination',
      'Billing / operational follow-up',
    ],
  },
  {
    id: 'abt-metering-telemetry',
    theme: 'grid',
    icon: 'bi-speedometer2',
    image: '/images/services/metering.jpg',
    imageAlt: 'Professional electrical metering and telemetry infrastructure',
    title: 'ABT Metering & Telemetry',
    short: 'ABT metering and telemetry solutions for accurate energy accounting, data acquisition, and grid communication.',
    detailed:
      'Vedanjay Power provides supply, installation, testing, commissioning, and support for ABT metering and telemetry systems used in renewable-energy and open-access power projects.',
    features: [
      'ABT metering solutions',
      'Meter supply and installation',
      'Testing and commissioning',
      'Telemetry systems',
      'Data communication',
      'Meter data support',
      'Energy accounting support',
      'Utility/grid coordination',
    ],
  },
  {
    id: 'electrical-infrastructure-transmission',
    theme: 'grid',
    icon: 'bi-diagram-3',
    image: '/images/services/infrastructure.jpg',
    imageAlt: 'High-voltage substation and transmission infrastructure',
    title: 'Electrical Infrastructure & Transmission',
    short: 'Electrical infrastructure, transmission, installation, testing, and commissioning solutions for power projects.',
    detailed:
      'Vedanjay Power provides technical execution and consultancy support for electrical infrastructure and transmission-related projects, including high-voltage installations, EHV feeder bays, substations, transmission lines, metering yards, testing, commissioning, and utility coordination.',
    capabilitiesTitle: 'Key Capabilities',
    capabilities: [
      'High-voltage electrical works',
      'Transmission infrastructure',
      'EHV feeder bay works',
      'Substation-related works',
      'CVT installation',
      'Transmission line installation and stringing',
      'HT metering yards',
      'Testing and commissioning',
      'Utility liaisoning',
      'Electrical infrastructure consultancy',
    ],
  },
  {
    id: 'grid-studies-consultancy',
    theme: 'ops',
    icon: 'bi-clipboard-data',
    image: '/images/services/grid-studies.jpg',
    imageAlt: 'Smart-grid planning and power-system analysis for renewable integration',
    title: 'Grid Studies & Electrical Consultancy',
    short: 'Technical grid studies, electrical assessments, reports, and consultancy for renewable-energy and power infrastructure projects.',
    detailed:
      'Vedanjay Power provides technical consultancy and grid-study support to help clients evaluate electrical systems, grid connectivity requirements, transmission arrangements, and project feasibility.',
    capabilitiesTitle: 'Key Capabilities',
    capabilities: [
      'Grid connectivity studies',
      'Electrical system assessment',
      'Technical reports',
      'Transmission planning support',
      'Grid integration consultancy',
      'Electrical infrastructure assessment',
      'Regulatory and technical coordination',
    ],
  },
  {
    id: 'renewable-energy-project-support',
    theme: 'solar',
    icon: 'bi-sun',
    image: '/images/services/renewable.jpg',
    imageAlt: 'Solar and wind renewable-energy project operations',
    title: 'Renewable Energy Project Support',
    short: 'End-to-end operational and technical support for solar, wind, and hybrid renewable-energy projects.',
    detailed:
      'Vedanjay Power supports solar, wind, and hybrid renewable-energy projects across their operational lifecycle — bringing together forecasting and scheduling, QCA, open-access transactions, metering, telemetry, electrical infrastructure, and grid consultancy under a single, integrated engagement.',
    capabilitiesTitle: 'Support areas',
    capabilities: [
      'Solar project support',
      'Wind project support',
      'Hybrid renewable-energy project support',
      'Forecasting & Scheduling / QCA',
      'Open-access power sale & purchase',
      'Metering & telemetry',
      'Electrical infrastructure & transmission',
      'Grid studies & technical consultancy',
    ],
  },
];

// Capability matrix (organizational, not a performance comparison)
export const CAPABILITY_MATRIX = [
  {
    category: 'Renewable Operations',
    icon: 'bi-sun',
    items: ['Forecasting & Scheduling', 'QCA Services', 'DSM Optimization', 'Generation Monitoring'],
  },
  {
    category: 'Power Transactions',
    icon: 'bi-arrow-left-right',
    items: ['Open-Access Coordination', 'Power Sale Support', 'Power Purchase Support', 'Generator-Consumer Coordination'],
  },
  {
    category: 'Infrastructure',
    icon: 'bi-diagram-3',
    items: ['ABT Metering', 'Telemetry', 'Electrical Infrastructure', 'Transmission Support', 'Testing & Commissioning'],
  },
  {
    category: 'Technical Consultancy',
    icon: 'bi-clipboard-data',
    items: ['Grid Studies', 'Electrical Assessment', 'Grid Connectivity', 'Technical Reports'],
  },
];

// Industries / application areas
export const INDUSTRIES = [
  {
    icon: 'bi-sun',
    title: 'Renewable Energy',
    intro: 'Supporting',
    items: ['Solar', 'Wind', 'Hybrid Renewable-Energy Projects'],
  },
  {
    icon: 'bi-buildings',
    title: 'Commercial & Industrial Consumers',
    intro: 'Supporting',
    items: [
      'Open-access power purchase',
      'Renewable power procurement',
      'Power transaction coordination',
      'Metering and telemetry',
      'Electrical infrastructure consultancy',
      'Grid connectivity support',
    ],
  },
];

// Why integrated services matter
export const INTEGRATED_STRENGTHS = [
  { icon: 'bi-arrow-repeat', text: 'End-to-End Power Solutions' },
  { icon: 'bi-sun', text: 'Renewable Energy Expertise' },
  { icon: 'bi-diagram-3', text: 'Regulatory & Grid Coordination' },
  { icon: 'bi-arrow-left-right', text: 'Open-Access Expertise' },
  { icon: 'bi-speedometer2', text: 'Metering & Telemetry Capability' },
  { icon: 'bi-broadcast-pin', text: 'Electrical Infrastructure Expertise' },
  { icon: 'bi-clipboard-data', text: 'Technical Consultancy' },
  { icon: 'bi-clock-history', text: '24×7 Operational Support' },
  { icon: 'bi-people', text: 'Client-Centric Approach' },
];

// Enquiry form — "Service Required" options
export const SERVICE_OPTIONS = [
  'QCA & Forecasting',
  'Open Access',
  'Metering & Telemetry',
  'Electrical Infrastructure',
  'Transmission',
  'Grid Studies',
  'Consultancy',
  'Other',
];
