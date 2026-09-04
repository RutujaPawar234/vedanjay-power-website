import { useRef } from 'react';
import useReveal from '../hooks/useReveal.js';
import SEO from '../components/SEO.jsx';

import IndustriesHero from '../components/industries/IndustriesHero.jsx';
import IndustriesOverview from '../components/industries/IndustriesOverview.jsx';
import IndustrySegment from '../components/industries/IndustrySegment.jsx';
import RenewableCapabilities from '../components/industries/RenewableCapabilities.jsx';
import ServicesByApplication from '../components/industries/ServicesByApplication.jsx';
import WhyIndustrySupport from '../components/industries/WhyIndustrySupport.jsx';
import RelatedProjects from '../components/industries/RelatedProjects.jsx';
import IndustriesCTA from '../components/industries/IndustriesCTA.jsx';

import { SEGMENTS } from '../data/industriesData.js';
import '../styles/about.css'; // shared hero / visual / breadcrumb classes
import '../styles/services.css'; // shared workflow / svc-grid classes
import '../styles/industries.css';

const INDUSTRIES_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Industries Served — Vedanjay Power Pvt. Ltd.',
  url: 'https://vedanjay-power.com/industries',
  about: ['Renewable Energy', 'Commercial & Industrial Consumers'],
};

export default function Industries() {
  const rootRef = useRef(null);
  useReveal(rootRef);

  return (
    <main id="main-content" ref={rootRef}>
      <SEO
        title="Industries Served | Renewable Energy & Power Solutions | Vedanjay Power"
        description="Vedanjay Power supports renewable-energy projects — solar, wind, and hybrid — and eligible commercial and industrial consumers with open-access power, QCA services, Forecasting & Scheduling, metering, telemetry, and power infrastructure."
        canonical="https://vedanjay-power.com/industries"
        jsonLd={INDUSTRIES_JSONLD}
      />
      <IndustriesHero />
      <IndustriesOverview />
      <IndustrySegment segment={SEGMENTS[0]} index={0} />
      <RenewableCapabilities />
      <IndustrySegment segment={SEGMENTS[1]} index={1} />
      <ServicesByApplication />
      <WhyIndustrySupport />
      <RelatedProjects />
      <IndustriesCTA />
    </main>
  );
}
