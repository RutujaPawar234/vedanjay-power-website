import HeroScene from '../HeroScene.jsx';
import { STORY_CAPABILITIES, STORY_FOCUS, STORY_DRIVERS } from '../../data/aboutData.js';

export default function OurStory() {
  return (
    <section className="section" id="our-story">
      <div className="container">
        <div className="row g-5 align-items-start">
          <div className="col-lg-5 reveal-left">
            <div className="about-visual about-visual--tall">
              <div className="about-visual__frame" role="img" aria-label="Wind and grid infrastructure representing Vedanjay Power's growth">
                <HeroScene theme="wind" />
                <img
                  className="about-visual__img"
                  src="/images/about/our-story.jpg"
                  alt="Renewable-energy and grid infrastructure representing Vedanjay Power's evolution"
                  loading="lazy"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
            </div>
          </div>

          <div className="col-lg-7 reveal-right">
            <span className="eyebrow">Our Story</span>
            <h2 className="section-title mt-2">Growing with India's evolving power market</h2>
            <div className="title-rule" />
            <p className="section-lead">
              Established in 2011, Vedanjay Power Pvt. Ltd. began with the objective of supporting
              the growth and development of India's renewable-energy sector through reliable,
              technically sound, and practical power-sector solutions.
            </p>
            <p className="text-muted-green">
              Over the years, Vedanjay Power has evolved into a diversified power-sector solutions
              company. Our capabilities have expanded across:
            </p>
            <ul className="chip-list" aria-label="Expanded capabilities">
              {STORY_CAPABILITIES.map((c) => (
                <li key={c} className="vp-chip">{c}</li>
              ))}
            </ul>
            <p className="text-muted-green">
              With growing industry experience and an understanding of India's evolving power
              market, Vedanjay Power continues to expand its capabilities to address the technical,
              commercial, and regulatory requirements of clients.
            </p>

            <div className="row g-3 mt-1">
              <div className="col-sm-6">
                <div className="story-panel">
                  <h3 className="story-panel__title">
                    <i className="bi bi-bullseye" aria-hidden="true" /> We focus on delivering solutions that
                  </h3>
                  <ul className="story-panel__list">
                    {STORY_FOCUS.map((f) => <li key={f}>{f}</li>)}
                  </ul>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="story-panel">
                  <h3 className="story-panel__title">
                    <i className="bi bi-compass" aria-hidden="true" /> Our journey is driven by
                  </h3>
                  <ul className="story-panel__list">
                    {STORY_DRIVERS.map((d) => <li key={d}>{d}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
