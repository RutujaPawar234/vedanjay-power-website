import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../../data/portfolioData.js';

const GEO_URL = '/data/india-states.json';

// Aggregate managed capacity by single-state name (multi-state / pending rows
// are not shaded on the map — they still appear in the table).
const CAP = {};
for (const p of PORTFOLIO_PROJECTS) {
  if (!p.state || p.state.includes('/') || p.state.startsWith('As per')) continue;
  CAP[p.state] = (CAP[p.state] || 0) + p.mw;
}
const MAX = Math.max(...Object.values(CAP), 1);

// light mint → deep brand green by capacity share
function shade(mw) {
  const t = Math.min(mw / MAX, 1);
  const a = [201, 232, 196]; // #c9e8c4
  const b = [23, 95, 42]; // #175f2a
  const c = a.map((x, i) => Math.round(x + (b[i] - x) * (0.25 + 0.75 * t)));
  return `rgb(${c[0]},${c[1]},${c[2]})`;
}

export default function IndiaPortfolioMap({ active, onSelect }) {
  const [hover, setHover] = useState(null);

  return (
    <div className="india-map reveal">
      <div className="india-map__canvas">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ center: [82.5, 22.6], scale: 1000 }}
          width={520} height={560}
          style={{ width: '100%', height: 'auto' }}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const name = geo.properties.name;
                const mw = CAP[name] || 0;
                const has = mw > 0;
                const isActive = active === name;
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => has && setHover({ name, mw })}
                    onMouseLeave={() => setHover(null)}
                    onClick={() => has && onSelect(isActive ? 'all' : name)}
                    tabIndex={has ? 0 : -1}
                    role={has ? 'button' : undefined}
                    aria-label={has ? `${name}: ${Math.round(mw * 100) / 100} MW managed` : name}
                    fill={isActive ? '#e6bb63' : has ? shade(mw) : '#eef4f1'}
                    stroke="#ffffff"
                    strokeWidth={0.6}
                    style={{
                      default: { outline: 'none' },
                      hover: { outline: 'none', cursor: has ? 'pointer' : 'default', fill: has && !isActive ? '#2f8f2d' : undefined },
                      pressed: { outline: 'none' },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>

        {hover && (
          <div className="india-map__tip" role="status">
            <strong>{hover.name}</strong>
            <span>{Math.round(hover.mw * 100) / 100} MW managed</span>
          </div>
        )}
      </div>

      <div className="india-map__legend" aria-hidden="true">
        <span>Lower</span>
        <span className="india-map__bar" />
        <span>Higher managed capacity</span>
      </div>
      <p className="india-map__hint">Tap a shaded state to filter the portfolio. Multi-state and pending-location projects are listed in the table.</p>
    </div>
  );
}
