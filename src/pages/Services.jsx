import { useRef } from 'react';
import useReveal from '../hooks/useReveal.js';
import SEO from '../components/SEO.jsx';

import ServicesHero from '../components/services/ServicesHero.jsx';
import ServicesExplorer from '../components/services/ServicesExplorer.jsx';
import CapabilityMatrix from '../components/services/CapabilityMatrix.jsx';
import WhyIntegrated from '../components/services/WhyIntegrated.jsx';
import ServiceCTA from '../components/services/ServiceCTA.jsx';

import { SERVICES } from '../data/servicesData.js';
import '../styles/about.css'; // shared hero / visual / breadcrumb classes
import '../styles/services.css';

const SERVICES_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Vedanjay Power Services',
  itemListElement: SERVICES.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: s.title,
    description: s.short,
  })),
};

export default function Services() {
  const rootRef = useRef(null);
  useReveal(rootRef);

  return (
    <main id="main-content" ref={rootRef}>
      <SEO
        title="Power Sector Services | Vedanjay Power Pvt. Ltd."
        description="Vedanjay Power delivers integrated power-sector services: QCA and Forecasting & Scheduling, open-access power, ABT metering, telemetry, electrical infrastructure, transmission, grid studies, and power consultancy for renewable energy across India."
        canonical="https://vedanjay-power.com/services"
        jsonLd={SERVICES_JSONLD}
      />
      <ServicesHero />
      <ServicesExplorer />
      <CapabilityMatrix />
      <WhyIntegrated />
      <ServiceCTA />
    </main>
  );
}
