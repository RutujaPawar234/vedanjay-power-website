import HeroScene from '../HeroScene.jsx';
import { VISION } from '../../data/aboutData.js';

export default function VisionSection() {
  return (
    <section className="section vision" id="vision">
      <div className="vision__bg" aria-hidden="true">
        <HeroScene theme="ops" />
        <span className="vision__overlay" />
      </div>
      <div className="container position-relative">
        <div className="vision__inner reveal-scale">
          <span className="eyebrow eyebrow--light">Our Vision</span>
          <span className="vision__quote-mark" aria-hidden="true"><i className="bi bi-quote" /></span>
          <blockquote className="vision__text">{VISION}</blockquote>
          <a className="section-next" href="#mission" aria-label="Go to the next section">
            <i className="bi bi-chevron-down" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
