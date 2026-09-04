import { useRef } from 'react';
import useReveal from '../hooks/useReveal.js';
import SEO from '../components/SEO.jsx';

import Hero from '../components/Hero.jsx';
import CompanyIntro from '../components/CompanyIntro.jsx';
import Statistics from '../components/Statistics.jsx';
import PowerEcosystem from '../components/PowerEcosystem.jsx';
import FeaturedServices from '../components/FeaturedServices.jsx';
import WhyChooseUs from '../components/WhyChooseUs.jsx';
import RenewableFocus from '../components/RenewableFocus.jsx';
import OperationalSupport from '../components/OperationalSupport.jsx';
import CTASection from '../components/CTASection.jsx';

const HOME_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Vedanjay Power Pvt. Ltd.',
  url: 'https://vedanjay-power.com/',
  publisher: { '@type': 'Organization', name: 'Vedanjay Power Pvt. Ltd.' },
};

export default function Home() {
  const rootRef = useRef(null);
  useReveal(rootRef);

  // Homepage = overview only. Detailed company history (About), full service
  // detail (Services), leadership bios (Leadership) etc. live on their own
  // pages and are intentionally NOT duplicated here.
  return (
    <main id="main-content" ref={rootRef}>
      <SEO jsonLd={HOME_JSONLD} />
      <Hero />
      <CompanyIntro />
      <Statistics />
      <PowerEcosystem />
      <FeaturedServices />
      <WhyChooseUs />
      <RenewableFocus />
      <OperationalSupport />
      <CTASection />
    </main>
  );
}
