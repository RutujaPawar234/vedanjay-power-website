/* ============================================================
   Vedanjay Power — Chatbot knowledge base
   APPROVED website information ONLY. The bot never invents
   prices, regulations, client details, capacities, or legal advice.
   No API keys. No backend calls.
   ============================================================ */

export const CONTACT = {
  phone: '7666901814',
  emailGeneral: 'projects@vedanjay-power.com',
  emailSupport: 'forecasting.india@vedanjay-power.com',
  linkedin: 'https://in.linkedin.com/company/vedanjay-power-private-limited',
};

export const FALLBACK =
  `I don't have verified information about that. Please contact the Vedanjay Power team at ${CONTACT.emailGeneral} or ${CONTACT.phone}.`;

export const WELCOME = [
  'Hello! Welcome to Vedanjay Power.',
  'How can we assist you today?',
];

// Quick-reply chips shown on open (label + the intent they trigger).
export const QUICK_REPLIES = [
  { label: 'QCA & Forecasting', intent: 'qca' },
  { label: 'Open Access', intent: 'openaccess' },
  { label: 'ABT Metering & Telemetry', intent: 'metering' },
  { label: 'Electrical Infrastructure', intent: 'infrastructure' },
  { label: 'Grid Studies', intent: 'gridstudies' },
  { label: 'Careers', intent: 'careers' },
  { label: 'Contact Us', intent: 'contact' },
];

// Intents: matched by keyword scoring against the user's message.
export const INTENTS = [
  {
    id: 'greeting',
    keywords: ['hi', 'hello', 'hey', 'good morning', 'good evening', 'namaste'],
    answer: 'Hello! I can help with information about Vedanjay Power’s services, industries, projects, careers, and contact details. What would you like to know?',
  },
  {
    id: 'about',
    keywords: ['about', 'who are you', 'who is vedanjay', 'company', 'overview', 'established'],
    answer:
      'Vedanjay Power Pvt. Ltd., established in 2011, is a diversified power-sector solutions company supporting renewable-energy generators and eligible commercial and industrial consumers across India — spanning renewable energy, Forecasting & Scheduling, QCA, open access, metering, telemetry, transmission, electrical infrastructure, grid studies, and consultancy.',
    cta: { label: 'About Us', to: '/about' },
  },
  {
    id: 'services',
    keywords: ['service', 'services', 'what do you do', 'offer', 'solutions', 'capabilities'],
    answer:
      'Our services: QCA / Forecasting & Scheduling, Open-Access Power Sale & Purchase, ABT Metering & Telemetry, Electrical Infrastructure & Transmission, Grid Studies & Electrical Consultancy, and Renewable Energy Project Support.',
    cta: { label: 'View Services', to: '/services' },
  },
  {
    id: 'qca',
    keywords: ['qca', 'forecast', 'forecasting', 'schedule', 'scheduling', 'dsm', 'deviation'],
    answer:
      'QCA / Forecasting & Scheduling: end-to-end support for solar, wind, and hybrid projects — generation forecasting, schedule preparation and revisions, SLDC/RLDC coordination, generation monitoring, deviation/DSM analysis, and regulatory compliance support, with 24×7 operational support.',
    cta: { label: 'QCA / Forecasting', to: '/services#qca-forecasting-scheduling' },
  },
  {
    id: 'openaccess',
    keywords: ['open access', 'open-access', 'power sale', 'power purchase', 'procurement', 'transaction'],
    answer:
      'Open-Access Power Sale & Purchase: support for renewable-energy generators and eligible HT consumers — generator-consumer coordination, commercial support, open-access documentation, utility/DISCOM liaisoning, and transaction coordination.',
    cta: { label: 'Open Access', to: '/services#open-access-power' },
  },
  {
    id: 'metering',
    keywords: ['metering', 'meter', 'abt', 'telemetry', 'data communication', 'energy accounting'],
    answer:
      'ABT Metering & Telemetry: supply, installation, testing, commissioning, and support for ABT metering and telemetry systems — data communication, meter data support, energy accounting, and utility/grid coordination.',
    cta: { label: 'Metering & Telemetry', to: '/services#abt-metering-telemetry' },
  },
  {
    id: 'infrastructure',
    keywords: ['infrastructure', 'transmission', 'substation', 'feeder', 'cvt', 'high voltage', 'ehv', 'commissioning', 'stringing'],
    answer:
      'Electrical Infrastructure & Transmission: high-voltage electrical works, EHV feeder bay works, substation-related works, CVT installation, transmission line installation and stringing, HT metering yards, testing and commissioning, and utility liaisoning.',
    cta: { label: 'Infrastructure', to: '/services#electrical-infrastructure-transmission' },
  },
  {
    id: 'gridstudies',
    keywords: ['grid study', 'grid studies', 'consultancy', 'assessment', 'connectivity', 'technical report', 'feasibility'],
    answer:
      'Grid Studies & Electrical Consultancy: grid connectivity studies, electrical system assessment, technical reports, transmission planning support, grid integration consultancy, and regulatory/technical coordination.',
    cta: { label: 'Grid Studies', to: '/services#grid-studies-consultancy' },
  },
  {
    id: 'renewable',
    keywords: ['renewable', 'solar', 'wind', 'hybrid', 'green energy'],
    answer:
      'Vedanjay Power supports solar, wind, and hybrid renewable-energy projects, and manages a renewable portfolio of over 5,000 MW under QCA / Forecasting & Scheduling operations.',
    cta: { label: 'Industries', to: '/industries' },
  },
  {
    id: 'industries',
    keywords: ['industry', 'industries', 'who do you serve', 'consumers', 'commercial', 'industrial'],
    answer:
      'We serve two segments: Renewable Energy (solar, wind, hybrid projects) and Commercial & Industrial Consumers (open-access procurement, metering, and technical support).',
    cta: { label: 'Industries Served', to: '/industries' },
  },
  {
    id: 'projects',
    keywords: ['project', 'projects', 'portfolio', 'executed', 'mpptcl', 'inox'],
    answer:
      'Our project portfolio covers electrical infrastructure and transmission-related works — including EHV feeder bays, substation works, CVT installation, transmission line installation and stringing, HT metering yards, testing, and commissioning.',
    cta: { label: 'Projects', to: '/projects' },
  },
  {
    id: 'operations',
    keywords: ['states', 'sldc', 'rldc', 'wrldc', 'maharashtra', 'madhya pradesh', 'telangana', 'where operate'],
    answer:
      'Registered SLDC operations are in Maharashtra, Madhya Pradesh, and Telangana, with WRLDC registration for the Western Region.',
    cta: { label: 'About Us', to: '/about' },
  },
  {
    id: 'portfolio',
    keywords: ['5000', '5,000', 'mw', 'capacity', 'how much'],
    answer:
      'Vedanjay Power manages a 5,000+ MW renewable portfolio under QCA / Forecasting & Scheduling management (this refers to the managed QCA/F&S portfolio, not installed or owned generation capacity).',
  },
  {
    id: 'careers',
    keywords: ['career', 'careers', 'job', 'jobs', 'hiring', 'vacancy', 'apply', 'position', 'opening'],
    answer:
      'We have current openings in Forecasting & Scheduling Roles and Business Development Executive – Forecasting & Scheduling. You can apply via the Careers page, or email projects@vedanjay-power.com.',
    cta: { label: 'Careers', to: '/careers' },
  },
  {
    id: 'contact',
    keywords: ['contact', 'reach', 'phone', 'call', 'email', 'whatsapp', 'address', 'office', 'talk to'],
    answer:
      `You can reach Vedanjay Power at ${CONTACT.phone} (call/WhatsApp), ${CONTACT.emailGeneral} (general), or ${CONTACT.emailSupport} (support/operations). Corporate office: Indore, Madhya Pradesh; Branch: Pune, Maharashtra.`,
    cta: { label: 'Contact Us', to: '/contact' },
  },
  {
    id: 'support',
    keywords: ['support', '24x7', '24×7', 'hours', 'operational support'],
    answer:
      'Vedanjay Power provides 24×7 operational support for QCA / Forecasting & Scheduling services.',
    cta: { label: 'Contact Us', to: '/contact' },
  },
];
