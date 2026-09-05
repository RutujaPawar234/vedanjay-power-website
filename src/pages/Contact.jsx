import { useRef } from 'react';
import useReveal from '../hooks/useReveal.js';
import SEO from '../components/SEO.jsx';
import { COMPANY } from '../data/homeData.js';

import ContactHero from '../components/contact/ContactHero.jsx';
import ContactInfo from '../components/contact/ContactInfo.jsx';
import ContactForm from '../components/contact/ContactForm.jsx';
import ContactLocation from '../components/contact/ContactLocation.jsx';
import ContactFAQ from '../components/contact/ContactFAQ.jsx';
import ContactCTA from '../components/contact/ContactCTA.jsx';

import '../styles/about.css';
import '../styles/services.css'; // enquiry form
import '../styles/contact.css';

const CONTACT_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Vedanjay Power Pvt. Ltd.',
  url: 'https://vedanjay-power.com/',
  email: COMPANY.emailGeneral,
  telephone: `+91-${COMPANY.phone}`,
  sameAs: [COMPANY.linkedin],
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress: '4/F/S3, Nai Sadak, Scheme No. 78',
      addressLocality: 'Indore', postalCode: '452010', addressRegion: 'Madhya Pradesh', addressCountry: 'IN',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: 'Flat No. 210, Grand Horizon, Behind Brahma Hotel, Sinhagad Road, Pune City',
      addressLocality: 'Pune', postalCode: '411041', addressRegion: 'Maharashtra', addressCountry: 'IN',
    },
  ],
};

export default function Contact() {
  const rootRef = useRef(null);
  useReveal(rootRef);

  return (
    <main id="main-content" ref={rootRef}>
      <SEO
        title="Contact Vedanjay Power | Power & Renewable Energy Solutions"
        description="Contact Vedanjay Power Pvt. Ltd. for QCA, forecasting and scheduling, open-access power, ABT metering, telemetry, electrical infrastructure, transmission, grid studies and renewable-energy support."
        canonical="https://vedanjay-power.com/contact"
        jsonLd={CONTACT_JSONLD}
      />
      <ContactHero />
      <ContactFAQ />
      <ContactForm />
      <ContactInfo />
      <ContactLocation />
      <ContactCTA />
    </main>
  );
}
