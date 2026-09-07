import { useState } from 'react';

/**
 * Coverflow-style image gallery. Illustrative imagery of the renewable-energy
 * and power-sector areas Vedanjay Power supports (not specific owned projects).
 * Uses the site's existing themed images for reliable loading.
 */
const GALLERY = [
  { img: '/images/hero/solar-sunrise.jpg', title: 'Solar', text: 'Forecasting & QCA services for solar power plants.', alt: 'Solar power plant' },
  { img: '/images/hero/wind-hybrid.jpg', title: 'Wind', text: 'QCA and forecasting services for wind power plants.', alt: 'Wind turbines at sunset' },
  { img: '/images/renewable/hybrid.jpg', title: 'Hybrid', text: 'Support for combined solar–wind hybrid projects.', alt: 'Hybrid renewable-energy site' },
  { img: '/images/hero/transmission.jpg', title: 'Transmission', text: 'Transmission and grid-connectivity works.', alt: 'Electrical transmission lines' },
  { img: '/images/services/metering.jpg', title: 'Metering & Telemetry', text: 'ABT metering and telemetry systems.', alt: 'Metering and telemetry equipment' },
  { img: '/images/hero/control-room.jpg', title: 'Operations', text: '24×7 monitoring and operational support.', alt: 'Operations monitoring' },
];

export default function ProjectGallery() {
  const [active, setActive] = useState(0);
  const n = GALLERY.length;
  const go = (d) => setActive((a) => (a + d + n) % n);

  return (
    <section className="section" id="gallery">
      <div className="container">
        <div className="text-center reveal">
          <span className="eyebrow">Gallery</span>
          <h2 className="section-title mt-2">Renewable &amp; power-sector imagery</h2>
          <div className="title-rule title-rule--center" />
          <p className="section-lead mx-auto text-center">
            Illustrative visuals of the renewable-energy and power-sector areas we support.
          </p>
        </div>

        <div className="gallery-cf" role="group" aria-roledescription="carousel" aria-label="Project imagery">
          <div className="gallery-cf__stage">
            {GALLERY.map((g, i) => {
              let offset = i - active;
              if (offset > n / 2) offset -= n;
              if (offset < -n / 2) offset += n;
              const abs = Math.abs(offset);
              const hidden = abs > 2;
              const style = {
                transform: `translateX(-50%) translateX(${offset * 58}%) rotateY(${offset * -30}deg) scale(${offset === 0 ? 1 : 0.82})`,
                zIndex: 10 - abs,
                opacity: hidden ? 0 : offset === 0 ? 1 : 0.5,
                pointerEvents: hidden ? 'none' : 'auto',
              };
              return (
                <article
                  className={`gallery-card ${offset === 0 ? 'is-active' : ''}`}
                  key={g.title}
                  style={style}
                  aria-hidden={offset !== 0}
                  onClick={() => offset !== 0 && setActive(i)}
                >
                  <div className="gallery-card__media">
                    <img src={g.img} alt={g.alt} loading="lazy" />
                  </div>
                  <div className="gallery-card__body">
                    <h3 className="gallery-card__title">{g.title}</h3>
                    <p className="gallery-card__text">{g.text}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="gallery-cf__controls">
            <button type="button" className="gallery-cf__arrow" onClick={() => go(-1)} aria-label="Previous image">
              <i className="bi bi-chevron-left" aria-hidden="true" />
            </button>
            <div className="gallery-cf__dots" role="tablist">
              {GALLERY.map((g, i) => (
                <button
                  type="button"
                  key={g.title}
                  className={`gallery-cf__dot ${i === active ? 'is-active' : ''}`}
                  onClick={() => setActive(i)}
                  aria-label={`Show ${g.title}`}
                  aria-current={i === active}
                />
              ))}
            </div>
            <button type="button" className="gallery-cf__arrow" onClick={() => go(1)} aria-label="Next image">
              <i className="bi bi-chevron-right" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
