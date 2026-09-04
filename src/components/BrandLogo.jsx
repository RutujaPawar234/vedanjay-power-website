import { useState } from 'react';
import Emblem from './Emblem.jsx';

const LOGO_SRC = '/images/vedanjay-logo.png';

/**
 * Brand logo lockup. Uses the official raster logo when present at
 * public/images/vedanjay-logo.png, otherwise the SVG emblem + wordmark.
 */
export default function BrandLogo() {
  const [failed, setFailed] = useState(false);

  return (
    <span className="vp-logo vp-logo--chip">
      {!failed ? (
        <img
          className="vp-logo__img"
          src={LOGO_SRC}
          alt="Vedanjay Power Pvt. Ltd. — Connecting to a More Sustainable Future"
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="vp-logo__lockup">
          <Emblem />
          <span className="vp-logo__word">
            <span className="vp-logo__name">
              VEDANJAY <span className="vp-logo__name-accent">POWER</span>
            </span>
            <span className="vp-logo__tag">Connecting to a More Sustainable Future</span>
          </span>
        </span>
      )}
    </span>
  );
}
