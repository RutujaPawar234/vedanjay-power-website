/* ============================================================
   Vedanjay Power — Contact content
   Approved contact details only. No invented numbers, emails,
   office hours, or map coordinates.
   ============================================================ */

// Service dropdown — approved service categories only.
export const SERVICE_OPTIONS = [
  'QCA / Forecasting & Scheduling',
  'Open-Access Power Sale & Purchase',
  'ABT Metering & Telemetry',
  'Electrical Infrastructure & Transmission',
  'Grid Studies & Electrical Consultancy',
  'Renewable Energy Project Support',
  'Other Enquiry',
];

// Quick "what do you need help with" cards → link to the relevant service.
export const SERVICE_CARDS = [
  { icon: 'bi-graph-up-arrow', title: 'QCA / Forecasting & Scheduling', to: '/services#qca-forecasting-scheduling' },
  { icon: 'bi-arrow-left-right', title: 'Open-Access Power', to: '/services#open-access-power' },
  { icon: 'bi-speedometer2', title: 'ABT Metering & Telemetry', to: '/services#abt-metering-telemetry' },
  { icon: 'bi-diagram-3', title: 'Electrical Infrastructure & Transmission', to: '/services#electrical-infrastructure-transmission' },
  { icon: 'bi-clipboard-data', title: 'Grid Studies & Consultancy', to: '/services#grid-studies-consultancy' },
  { icon: 'bi-sun', title: 'Renewable Energy Project Support', to: '/services#renewable-energy-project-support' },
];

// FAQ — answered only from approved website information.
export const FAQ = [
  {
    q: 'What services does Vedanjay Power provide?',
    a: 'Vedanjay Power provides integrated power-sector solutions: QCA / Forecasting & Scheduling, open-access power sale & purchase, ABT metering & telemetry, electrical infrastructure & transmission, grid studies & electrical consultancy, and renewable-energy project support.',
  },
  {
    q: 'Which renewable-energy projects does Vedanjay support?',
    a: 'Vedanjay Power supports solar, wind, and hybrid renewable-energy projects.',
  },
  {
    q: 'Which states have registered SLDC operations?',
    a: 'Registered SLDC operations are in Maharashtra, Madhya Pradesh, and Telangana, along with WRLDC registration for the Western Region.',
  },
  {
    q: 'Does Vedanjay provide QCA and Forecasting & Scheduling?',
    a: 'Yes. Vedanjay Power provides QCA and Forecasting & Scheduling services for renewable-energy projects, with 24×7 operational support for these services.',
  },
  {
    q: 'How can I contact Vedanjay Power?',
    a: 'Call or WhatsApp 7666901814, email projects@vedanjay-power.com (general) or forecasting.india@vedanjay-power.com (support/operations), or use the enquiry form on this page.',
  },
];
