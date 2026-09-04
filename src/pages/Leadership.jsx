import { useRef } from 'react';
import useReveal from '../hooks/useReveal.js';
import SEO from '../components/SEO.jsx';

import LeadershipHero from '../components/leadership/LeadershipHero.jsx';
import LeadershipIntro from '../components/leadership/LeadershipIntro.jsx';
import LeadershipProfiles from '../components/leadership/LeadershipProfiles.jsx';
import OrganizationalStrength from '../components/leadership/OrganizationalStrength.jsx';
import LeadershipCTA from '../components/leadership/LeadershipCTA.jsx';

import '../styles/about.css'; // shared hero / visual / breadcrumb classes
import '../styles/projects.css'; // shared context-figure classes
import '../styles/leadership.css';

const LEADERSHIP_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'Leadership — Vedanjay Power Pvt. Ltd.',
  url: 'https://vedanjay-power.com/leadership',
  about: {
    '@type': 'Organization',
    name: 'Vedanjay Power Pvt. Ltd.',
    url: 'https://vedanjay-power.com/',
  },
};

export default function Leadership() {
  const rootRef = useRef(null);
  useReveal(rootRef);

  return (
    <main id="main-content" ref={rootRef}>
      <SEO
        title="Leadership | Vedanjay Power Pvt. Ltd."
        description="Meet the leadership of Vedanjay Power Pvt. Ltd. — Managing Directors guiding a diversified power-sector company across renewable energy, Forecasting & Scheduling, open access, electrical infrastructure, and grid consultancy."
        canonical="https://vedanjay-power.com/leadership"
        jsonLd={LEADERSHIP_JSONLD}
      />
      <LeadershipHero />
      <LeadershipIntro />
      <LeadershipProfiles />
      <OrganizationalStrength />
      <LeadershipCTA />
    </main>
  );
}
