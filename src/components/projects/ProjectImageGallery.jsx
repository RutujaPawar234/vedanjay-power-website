import { useEffect, useState } from 'react';

/**
 * Image Gallery — grid of captioned photos with a click-to-enlarge lightbox.
 * Drop additional project photos into /public/images/gallery and add them here.
 */
const IMAGES = [
  { img: '/images/gallery/substation.jpg', caption: 'Ground-mounted solar array' },
  { img: '/images/gallery/solar.jpg', caption: 'Solar power plant' },
  { img: '/images/gallery/panels2.jpg', caption: 'Solar panel installation' },
  { img: '/images/gallery/windfarm.jpg', caption: 'Aerial view of a solar farm' },
  { img: '/images/gallery/wind.jpg', caption: 'Wind turbines at sunset' },
  { img: '/images/gallery/turbineclose.jpg', caption: 'Wind farm' },
  { img: '/images/gallery/powerlines.jpg', caption: 'Transmission lines' },
  { img: '/images/gallery/solarfarm.jpg', caption: 'Rooftop solar installation' },
];

export default function ProjectImageGallery() {
  const [open, setOpen] = useState(null);

  useEffect(() => {
    if (open === null) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(null); };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); };
  }, [open]);

  return (
    <section className="section section--mist" id="gallery">
      <div className="container">
        <div className="text-center reveal">
          <span className="eyebrow">Image Gallery</span>
          <h2 className="section-title mt-2">Site photography</h2>
          <div className="title-rule title-rule--center" />
          <p className="section-lead mx-auto text-center">
            A look at renewable-energy and power-sector sites. Click any image to enlarge.
          </p>
        </div>

        <div className="img-gallery reveal">
          {IMAGES.map((im, i) => (
            <button
              type="button"
              className={`img-gallery__item ${i === 0 ? 'img-gallery__item--feature' : ''}`}
              key={im.img}
              onClick={() => setOpen(i)}
              aria-label={`Enlarge: ${im.caption}`}
            >
              <img src={im.img} alt={im.caption} loading="lazy" />
              <span className="img-gallery__cap">{im.caption}</span>
            </button>
          ))}
        </div>
      </div>

      {open !== null && (
        <div className="img-lightbox" role="dialog" aria-modal="true" aria-label={IMAGES[open].caption} onClick={() => setOpen(null)}>
          <button type="button" className="img-lightbox__close" aria-label="Close">
            <i className="bi bi-x-lg" aria-hidden="true" />
          </button>
          <figure className="img-lightbox__fig" onClick={(e) => e.stopPropagation()}>
            <img src={IMAGES[open].img} alt={IMAGES[open].caption} />
            <figcaption>{IMAGES[open].caption}</figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
