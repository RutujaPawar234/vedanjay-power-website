/* ============================================================
   Vedanjay Power — Homepage content
   Single source of truth. Only officially provided facts.
   Do not invent statistics, milestones, clients, or dates.
   ============================================================ */

export const COMPANY = {
  name: 'Vedanjay Power Pvt. Ltd.',
  tagline: 'Connecting to a More Sustainable Future',
  established: '2011',
  website: 'https://vedanjay-power.com/',
  linkedin: 'https://in.linkedin.com/company/vedanjay-power-private-limited',
  phone: '7666901814',
  phoneOperations: '9981500612',
  whatsapp: '7666901814',
  emailGeneral: 'projects@vedanjay-power.com',
  emailSupport: 'forecasting.india@vedanjay-power.com',
  emailOperations: 'operations.fns@vedanjay-power.com',
  offices: {
    corporate: {
      label: 'Corporate Office',
      lines: [
        '4/F/S3, Nai Sadak',
        'Scheme No. 78',
        'Indore – 452010',
        'Madhya Pradesh, India',
      ],
    },
    branch: {
      label: 'Branch Office',
      lines: [
        'Flat No. 210, Grand Horizon',
        'Behind Brahma Hotel, Sinhagad Road',
        'Pune City, Pune – 411041',
        'Maharashtra, India',
      ],
    },
  },
};

// ---------- Hero scenes (image/video-ready architecture) ----------
// `media` points to a future asset in /public/images/hero. Until real
// AI-generated visuals are attached, each scene renders a premium
// CSS + SVG scene keyed by `theme`.
export const HERO_SCENES = [
  {
    id: 'solar',
    theme: 'solar',
    align: 'left',
    media: '/images/hero/solar-sunrise.jpg',
    alt: 'Large-scale solar power plant at sunrise',
    headline: 'Connecting to a More Sustainable Future',
    text: 'End-to-end power-sector solutions for renewable energy, power operations and grid connectivity.',
    cta: { label: 'Explore Our Services', to: '/services' },
  },
  {
    id: 'grid',
    theme: 'grid',
    align: 'left',
    media: '/images/hero/transmission.jpg',
    alt: 'Electrical transmission towers and substation infrastructure',
    headline: 'Reliable Power. Smarter Operations.',
    text: 'Technical and operational depth across grid connectivity, electrical infrastructure, transmission, metering and telemetry.',
    cta: { label: 'Explore Our Capabilities', to: '/services' },
  },
  {
    id: 'wind',
    theme: 'wind',
    align: 'left',
    media: '/images/hero/wind-hybrid.jpg',
    alt: 'Wind turbines across a hybrid renewable-energy site',
    headline: 'Turning Renewable Energy into Reliable Power',
    text: 'Forecasting, scheduling and operational support for solar, wind and hybrid renewable projects.',
    cta: { label: 'QCA & Forecasting', to: '/services' },
  },
];

// ---------- Power ecosystem / business verticals ----------
export const VERTICALS = [
  {
    icon: 'bi-graph-up-arrow',
    title: 'Forecasting & Scheduling / QCA Services',
    text: 'Accurate Forecasting & Scheduling and QCA services for renewable-energy projects.',
  },
  {
    icon: 'bi-arrow-left-right',
    title: 'Open-Access Power Sale & Purchase',
    text: 'Open-access power solutions supporting sale and purchase of energy.',
  },
  {
    icon: 'bi-speedometer2',
    title: 'ABT Metering & Telemetry',
    text: 'ABT metering and telemetry solutions for reliable measurement and data flow.',
  },
  {
    icon: 'bi-diagram-3',
    title: 'Electrical Infrastructure',
    text: 'Electrical infrastructure solutions across the power value chain.',
  },
  {
    icon: 'bi-broadcast-pin',
    title: 'Transmission & Grid Connectivity',
    text: 'Transmission and grid connectivity support for power projects.',
  },
  {
    icon: 'bi-clipboard-data',
    title: 'Grid Studies & Consultancy',
    text: 'Grid studies and technical electrical consultancy services.',
  },
  {
    icon: 'bi-sun',
    title: 'Renewable Energy Project Support',
    text: 'End-to-end support for solar, wind, and hybrid renewable-energy projects.',
  },
];

// ---------- Power ecosystem flow (homepage visual chain) ----------
// A single connected value chain, generation → grid. Short labels only;
// the detailed QCA/F&S process lives on the Services page.
export const ECOSYSTEM_FLOW = [
  { icon: 'bi-sun', label: 'Renewable Generation', text: 'Solar, wind & hybrid projects.' },
  { icon: 'bi-graph-up-arrow', label: 'Forecasting & Scheduling', text: 'Accurate generation forecasts.' },
  { icon: 'bi-diagram-3', label: 'QCA / Grid Coordination', text: 'SLDC / RLDC coordination.' },
  { icon: 'bi-arrow-left-right', label: 'Power Transactions', text: 'Open-access sale & purchase.' },
  { icon: 'bi-speedometer2', label: 'Metering & Telemetry', text: 'ABT metering & data flow.' },
  { icon: 'bi-building-gear', label: 'Electrical Infrastructure', text: 'Transmission & connectivity.' },
  { icon: 'bi-clipboard-data', label: 'Grid Studies & Consultancy', text: 'Technical electrical advisory.' },
];

// ---------- Renewable energy focus (homepage visual only) ----------
export const RENEWABLES = [
  { icon: 'bi-sun', title: 'Solar', text: 'Utility-scale and distributed solar generation support.' },
  { icon: 'bi-wind', title: 'Wind', text: 'Forecasting and operations for wind generation.' },
  { icon: 'bi-lightning-charge', title: 'Hybrid', text: 'Combined solar–wind hybrid project support.' },
];

// ---------- Why Vedanjay — curated strongest differentiators ----------
// Central metric (5,000+ MW) is shown separately; these surround it.
export const WHY_DIFFERENTIATORS = [
  { icon: 'bi-award', text: '15+ Years of Power-Sector Experience' },
  { icon: 'bi-geo-alt', text: 'Multi-State QCA / SLDC Operations' },
  { icon: 'bi-shield-check', text: 'WRLDC Registration' },
  { icon: 'bi-cpu', text: 'AI/ML-Enabled Forecasting (with ENERCAST GmbH, Germany)' },
  { icon: 'bi-clock-history', text: '24×7 Operational Support' },
  { icon: 'bi-arrow-repeat', text: 'End-to-End Power Solutions' },
];

// ---------- Why choose us ----------
export const WHY_POINTS = [
  { icon: 'bi-patch-check', text: 'Proven Renewable-Energy Expertise' },
  { icon: 'bi-geo-alt', text: 'Multi-State QCA / SLDC Operations' },
  { icon: 'bi-shield-check', text: 'WRLDC Registration' },
  { icon: 'bi-cpu', text: 'AI/ML-Enabled Forecasting Technology' },
  { icon: 'bi-clock-history', text: '24×7 Monitoring & Operational Support' },
  { icon: 'bi-plug', text: 'Open-Access Power Expertise' },
  { icon: 'bi-speedometer2', text: 'ABT Metering & Telemetry Solutions' },
  { icon: 'bi-diagram-3', text: 'Transmission & Electrical Infrastructure Capability' },
  { icon: 'bi-clipboard-data', text: 'Grid Study & Technical Consultancy' },
  { icon: 'bi-file-earmark-check', text: 'Regulatory & Compliance Support' },
  { icon: 'bi-arrow-repeat', text: 'End-to-End Project Support' },
  { icon: 'bi-cash-coin', text: 'Cost-Effective & Client-Focused Solutions' },
];

// ---------- Key statistics ----------
export const STATS = [
  { value: 15, suffix: '+', label: 'Years of Experience' },
  { value: 5000, suffix: '+ MW', label: 'Renewable Portfolio Under QCA / F&S Management', big: true },
  { value: 3, suffix: '', label: 'Registered SLDC Operating States' },
  { value: 24, suffix: '×7', label: 'Operational Support', literal: '24×7' },
];

// ---------- Featured services ----------
export const SERVICES = [
  {
    icon: 'bi-graph-up-arrow',
    title: 'QCA / Forecasting & Scheduling',
    text: 'Reliable and accurate Forecasting & Scheduling and QCA services for renewable-energy projects.',
    benefit: 'Optimize generation and reduce DSM exposure.',
  },
  {
    icon: 'bi-arrow-left-right',
    title: 'Open-Access Power Sale & Purchase',
    text: 'Open-access power solutions covering the sale and purchase of energy.',
    benefit: 'Improve commercial performance through open access.',
  },
  {
    icon: 'bi-speedometer2',
    title: 'ABT Metering & Telemetry',
    text: 'ABT metering and telemetry capability for accurate measurement and data communication.',
    benefit: 'Dependable metering and real-time data flow.',
  },
  {
    icon: 'bi-diagram-3',
    title: 'Electrical Infrastructure & Transmission',
    text: 'Electrical infrastructure, transmission, and grid-connectivity solutions.',
    benefit: 'Connect projects reliably to the grid.',
  },
  {
    icon: 'bi-clipboard-data',
    title: 'Grid Studies & Electrical Consultancy',
    text: 'Technically sound grid studies and electrical consultancy services.',
    benefit: 'Simplify complex technical requirements.',
  },
  {
    icon: 'bi-sun',
    title: 'Renewable Energy Project Support',
    text: 'End-to-end support for solar, wind, and hybrid renewable-energy projects.',
    benefit: 'A single partner across the project lifecycle.',
  },
];

// ---------- Operations flow ----------
export const OPS_FLOW = [
  { icon: 'bi-database', label: 'Data & Meter Inputs' },
  { icon: 'bi-cloud-sun', label: 'Weather & Generation Analysis' },
  { icon: 'bi-graph-up', label: 'Forecast Preparation' },
  { icon: 'bi-send-check', label: 'Schedule Submission' },
  { icon: 'bi-diagram-3', label: 'SLDC / RLDC Coordination' },
  { icon: 'bi-activity', label: 'Real-Time Monitoring' },
  { icon: 'bi-sliders', label: 'Deviation / DSM Analysis' },
  { icon: 'bi-headset', label: 'Operational Support' },
];

// ---------- Areas of operation ----------
export const AREAS = [
  { region: 'Maharashtra', detail: 'Registered SLDC Operations' },
  { region: 'Madhya Pradesh', detail: 'Registered SLDC Operations' },
  { region: 'Telangana', detail: 'Registered SLDC Operations' },
  { region: 'Western Region', detail: 'Registered WRLDC Operations' },
];

// ---------- Journey preview (only 2011 is a dated milestone) ----------
export const JOURNEY = {
  start: { year: '2011', label: 'Company Established' },
  growth: [
    'Renewable Energy Services',
    'Forecasting & Scheduling',
    'Multi-State Operations',
    'WRLDC Registration',
    'Open-Access Services',
    'Metering & Telemetry',
    'Electrical Infrastructure',
    'Grid Studies & Consultancy',
    '5,000+ MW Portfolio',
  ],
};

// ---------- Leadership (no fake portraits, no invented LinkedIn) ----------
export const LEADERS = [
  {
    name: 'Mr. Gajanan Yadav',
    role: 'Founder',
    initials: 'GY',
    photo: '/images/leadership/gajanan-yadav.jpg',
    linkedin: 'https://in.linkedin.com/company/vedanjay-power-private-limited',
  },
  {
    name: 'Mrs. Anjali Yadav',
    role: 'Co-Founder',
    initials: 'AY',
    photo: '/images/leadership/anjali-yadav.jpg',
    linkedin: null,
  },
  {
    name: 'Ms. Ankita Yadav',
    role: 'Chief Executive Officer (CEO)',
    initials: 'AY',
    photo: '/images/leadership/ankita-yadav.jpg',
    linkedin: null,
  },
];

// ---------- Navigation ----------
export const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/industries', label: 'Industries' },
  { to: '/projects', label: 'Projects' },
  { to: '/leadership', label: 'Leadership' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' },
];
