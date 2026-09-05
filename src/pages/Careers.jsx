import { useRef, useState } from 'react';
import useReveal from '../hooks/useReveal.js';
import SEO from '../components/SEO.jsx';

import CareersHero from '../components/careers/CareersHero.jsx';
import CareerAreas from '../components/careers/CareerAreas.jsx';
import CurrentOpenings from '../components/careers/CurrentOpenings.jsx';
import ApplicationForm from '../components/careers/ApplicationForm.jsx';
import CareersCTA from '../components/careers/CareersCTA.jsx';

import '../styles/about.css';       // hero / breadcrumb
import '../styles/leadership.css';  // phil-card
import '../styles/services.css';    // enquiry form
import '../styles/careers.css';

const CAREERS_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Careers — Vedanjay Power Pvt. Ltd.',
  url: 'https://vedanjay-power.com/careers',
};

export default function Careers() {
  const rootRef = useRef(null);
  useReveal(rootRef);
  const [position, setPosition] = useState('');

  const applyFor = (title) => {
    setPosition(title);
    const el = document.getElementById('apply');
    if (el) {
      const y = window.scrollY + el.getBoundingClientRect().top - 70;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <main id="main-content" ref={rootRef}>
      <SEO
        title="Careers | Vedanjay Power Pvt. Ltd."
        description="Explore career opportunities with Vedanjay Power Pvt. Ltd. across forecasting and scheduling, renewable energy, power-sector operations, business development and electrical infrastructure."
        canonical="https://vedanjay-power.com/careers"
        jsonLd={CAREERS_JSONLD}
      />
      <CareersHero />
      <CareerAreas />
      <CurrentOpenings onApply={applyFor} />
      <ApplicationForm position={position} setPosition={setPosition} />
      <CareersCTA />
    </main>
  );
}
