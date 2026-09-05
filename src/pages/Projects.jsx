import { useRef } from 'react';
import useReveal from '../hooks/useReveal.js';
import SEO from '../components/SEO.jsx';

import ProjectsHero from '../components/projects/ProjectsHero.jsx';
import PortfolioOverview from '../components/projects/PortfolioOverview.jsx';
import TechnicalCapabilities from '../components/projects/TechnicalCapabilities.jsx';
import ExecutionCapabilities from '../components/projects/ExecutionCapabilities.jsx';
import RenewablePortfolioContext from '../components/projects/RenewablePortfolioContext.jsx';
import RenewablePortfolio from '../components/projects/RenewablePortfolio.jsx';
import ProjectCategories from '../components/projects/ProjectCategories.jsx';
import ProjectCaseStudyCard from '../components/projects/ProjectCaseStudyCard.jsx';
import ProjectCTA from '../components/projects/ProjectCTA.jsx';

import { CASE_STUDIES } from '../data/projectsData.js';
import '../styles/about.css'; // shared hero / visual / breadcrumb classes
import '../styles/services.css'; // shared svc-grid classes
import '../styles/projects.css';

const PROJECTS_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Project Portfolio — Vedanjay Power Pvt. Ltd.',
  url: 'https://vedanjay-power.com/projects',
};

export default function Projects() {
  const rootRef = useRef(null);
  useReveal(rootRef);

  return (
    <main id="main-content" ref={rootRef}>
      <SEO
        title="Projects & Power Infrastructure Portfolio | Vedanjay Power Pvt. Ltd."
        description="Vedanjay Power's project portfolio spans electrical infrastructure, transmission-related works, testing and commissioning, metering infrastructure, and renewable-energy operational support including QCA and Forecasting & Scheduling."
        canonical="https://vedanjay-power.com/projects"
        jsonLd={PROJECTS_JSONLD}
      />
      <ProjectsHero />
      <PortfolioOverview />
      <TechnicalCapabilities />
      <ExecutionCapabilities />
      <RenewablePortfolioContext />
      <RenewablePortfolio />
      <ProjectCategories />

      {/* Case studies — architecture ready; rendered only when approved data exists */}
      {CASE_STUDIES.length > 0 && (
        <section className="section" id="case-studies">
          <div className="container">
            <div className="text-center reveal">
              <span className="eyebrow">Case Studies</span>
              <h2 className="section-title mt-2">Selected project case studies</h2>
              <div className="title-rule title-rule--center" />
            </div>
            <div className="row g-4 mt-2">
              {CASE_STUDIES.map((p) => (
                <div className="col-md-6 col-lg-4" key={p.title}>
                  <ProjectCaseStudyCard project={p} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <ProjectCTA />
    </main>
  );
}
