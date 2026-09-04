/* ============================================================
   Vedanjay Power — Leadership content
   Approved facts only. No invented bios, quotes, qualifications,
   or LinkedIn profiles. No AI portraits of real people.
   ============================================================ */

import { COMPANY } from './homeData.js';

export const LEADERS = [
  {
    name: 'Mr. Gajanan Yadav',
    role: 'Managing Director (MD)',
    initials: 'GY',
    // Approved LinkedIn link provided in project information.
    linkedin: COMPANY.linkedin,
    linkedinStatus: 'available',
    photoStatus: 'To be attached',
  },
  {
    name: 'Mrs. Anjaly Yadav',
    role: 'Managing Director (MD)',
    initials: 'AY',
    linkedin: null,
    linkedinStatus: 'To be provided',
    photoStatus: 'To be attached',
  },
];

// Leadership philosophy — principles already reflected in company values.
export const PHILOSOPHY = [
  { icon: 'bi-gem', title: 'Technical Excellence', text: 'Continuous improvement in technical expertise and service quality.' },
  { icon: 'bi-hand-thumbs-up', title: 'Reliability', text: 'Accurate forecasting, dependable execution, and timely service delivery.' },
  { icon: 'bi-person-check', title: 'Customer Focus', text: 'Understanding client requirements and delivering practical, value-driven solutions.' },
  { icon: 'bi-lightbulb', title: 'Innovation', text: 'Using technology, data, and innovative approaches to improve power management.' },
  { icon: 'bi-file-earmark-check', title: 'Compliance & Responsibility', text: 'Strong standards of regulatory compliance, safety, quality, and responsible business practices.' },
  { icon: 'bi-tree', title: 'Sustainability', text: 'Supporting renewable energy and contributing to a cleaner, more efficient power ecosystem.' },
];

// Organizational strength (approved capabilities; distinct layout from About/Services).
export const ORG_STRENGTHS = [
  { icon: 'bi-arrow-repeat', text: 'End-to-End Power Solutions' },
  { icon: 'bi-sun', text: 'Renewable Energy Expertise' },
  { icon: 'bi-geo-alt', text: 'Multi-State QCA / SLDC Operations' },
  { icon: 'bi-shield-check', text: 'WRLDC Registration' },
  { icon: 'bi-diagram-3', text: 'Regulatory & Grid Coordination' },
  { icon: 'bi-clock-history', text: '24×7 Operational Support' },
  { icon: 'bi-speedometer2', text: 'Metering & Telemetry Capability' },
  { icon: 'bi-clipboard-data', text: 'Technical Consultancy' },
];
