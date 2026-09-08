import { useRef } from 'react';
import useReveal from '../hooks/useReveal.js';
import SEO from '../components/SEO.jsx';

import AboutHero from '../components/about/AboutHero.jsx';
import WhoWeAre from '../components/about/WhoWeAre.jsx';
import OurStory from '../components/about/OurStory.jsx';
import MilestonesTimeline from '../components/about/MilestonesTimeline.jsx';
import VisionSection from '../components/about/VisionSection.jsx';
import MissionSection from '../components/about/MissionSection.jsx';
import CoreValues from '../components/about/CoreValues.jsx';
import Achievements from '../components/about/Achievements.jsx';
import AreasOfOperation from '../components/AreasOfOperation.jsx';
import AboutCTA from '../components/about/AboutCTA.jsx';

import '../styles/about.css';

const ABOUT_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Vedanjay Power Pvt. Ltd.',
  url: 'https://vedanjay-power.com/about',
  about: {
    '@type': 'Organization',
    name: 'Vedanjay Power Pvt. Ltd.',
    foundingDate: '2011',
    url: 'https://vedanjay-power.com/',
  },
};

export default function About() {
  const rootRef = useRef(null);
  useReveal(rootRef);

  return (
    <main id="main-content" ref={rootRef}>
      <SEO
        title="About Vedanjay Power Pvt. Ltd. | Power & Renewable Energy Solutions"
        description="Established in 2011, Vedanjay Power Pvt. Ltd. is a diversified power-sector solutions company delivering renewable energy, QCA services, Forecasting & Scheduling, open-access power, grid infrastructure, and electrical consultancy across India."
        canonical="https://vedanjay-power.com/about"
        jsonLd={ABOUT_JSONLD}
      />
      <AboutHero />
      <WhoWeAre />
      <OurStory />
      <MilestonesTimeline />
      <VisionSection />
      <MissionSection />
      <CoreValues />
      <Achievements />
      <AreasOfOperation />
      <AboutCTA />
    </main>
  );
}
