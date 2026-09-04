/* ============================================================
   Hero scene backgrounds — one distinct ANIMATED SVG per slide.
   Premium, on-brand, motion-rich. Real photorealistic AI images
   can be dropped into /public/images/hero to override these.
   ============================================================ */

function Sun({ cx, cy, r = 70, rays = true, gradId }) {
  return (
    <g>
      {rays && (
        <g stroke="rgba(255,236,179,0.5)" strokeWidth="3" strokeLinecap="round">
          <g>
            <animateTransform attributeName="transform" type="rotate"
              from={`0 ${cx} ${cy}`} to={`360 ${cx} ${cy}`} dur="70s" repeatCount="indefinite" />
            {Array.from({ length: 12 }).map((_, i) => {
              const a = (i / 12) * Math.PI * 2;
              const x1 = cx + (r + 20) * Math.cos(a);
              const y1 = cy + (r + 20) * Math.sin(a);
              const x2 = cx + (r + 70) * Math.cos(a);
              const y2 = cy + (r + 70) * Math.sin(a);
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
            })}
          </g>
        </g>
      )}
      <circle cx={cx} cy={cy} r={r + 90} fill={`url(#${gradId})`}>
        <animate attributeName="r" values={`${r + 70};${r + 110};${r + 70}`} dur="6s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.7;1;0.7" dur="6s" repeatCount="indefinite" />
      </circle>
      <circle cx={cx} cy={cy} r={r} fill="#fff3cf" opacity="0.95" />
    </g>
  );
}

function Cloud({ x, y, s = 1, dur = 60, fill = 'rgba(255,255,255,0.14)' }) {
  return (
    <g fill={fill} transform={`translate(${x} ${y}) scale(${s})`}>
      <g>
        <animateTransform attributeName="transform" type="translate"
          from="0 0" to="260 0" dur={`${dur}s`} repeatCount="indefinite" />
        <ellipse cx="0" cy="0" rx="60" ry="22" />
        <ellipse cx="45" cy="8" rx="48" ry="20" />
        <ellipse cx="-42" cy="10" rx="42" ry="18" />
      </g>
    </g>
  );
}

function Turbine({ x, y, s = 1, dur = 9 }) {
  const cx = x;
  const cy = y;
  return (
    <g>
      <rect x={cx - 2 * s} y={cy} width={4 * s} height={150 * s} fill="rgba(255,255,255,0.88)" />
      <g>
        <animateTransform attributeName="transform" type="rotate"
          from={`0 ${cx} ${cy}`} to={`360 ${cx} ${cy}`} dur={`${dur}s`} repeatCount="indefinite" />
        {[0, 120, 240].map((a) => (
          <path key={a}
            d={`M ${cx} ${cy} q ${8 * s} ${-40 * s} ${2 * s} ${-82 * s} q ${-6 * s} ${6 * s} ${-4 * s} ${82 * s} z`}
            fill="rgba(255,255,255,0.92)" transform={`rotate(${a} ${cx} ${cy})`} />
        ))}
      </g>
      <circle cx={cx} cy={cy} r={5 * s} fill="#ffffff" />
    </g>
  );
}

function Tower({ x, groundY, h = 200, light = false }) {
  const top = groundY - h;
  const w = h * 0.42;
  return (
    <g>
      <g stroke="rgba(255,255,255,0.8)" strokeWidth="2.4" fill="none">
        <path d={`M ${x - w / 2} ${groundY} L ${x} ${top} L ${x + w / 2} ${groundY}`} />
        <path d={`M ${x - w / 2} ${groundY} L ${x + w / 2} ${groundY - h * 0.28}`} />
        <path d={`M ${x + w / 2} ${groundY} L ${x - w / 2} ${groundY - h * 0.28}`} />
        <path d={`M ${x - w / 3.4} ${groundY - h * 0.34} L ${x + w / 3.4} ${groundY - h * 0.34}`} />
        <path d={`M ${x - w * 0.9} ${top + h * 0.12} L ${x + w * 0.9} ${top + h * 0.12}`} />
        <path d={`M ${x - w * 0.7} ${top + h * 0.26} L ${x + w * 0.7} ${top + h * 0.26}`} />
      </g>
      {light && (
        <circle cx={x} cy={top - 4} r="4" fill="#ff6b5e">
          <animate attributeName="opacity" values="1;0.15;1" dur="1.8s" repeatCount="indefinite" />
        </circle>
      )}
    </g>
  );
}

// A glowing pulse that travels along a referenced path
function PulseOnPath({ pathId, dur = 3, delay = 0, color = '#ffd479', r = 5 }) {
  return (
    <circle r={r} fill={color}>
      <animateMotion dur={`${dur}s`} begin={`${delay}s`} repeatCount="indefinite" rotate="auto">
        <mpath href={`#${pathId}`} />
      </animateMotion>
      <animate attributeName="opacity" values="0;1;1;0" dur={`${dur}s`} begin={`${delay}s`} repeatCount="indefinite" />
    </circle>
  );
}

export default function HeroScene({ theme }) {
  const common = {
    className: 'hero__svg',
    viewBox: '0 0 1440 800',
    preserveAspectRatio: 'xMidYMid slice',
    'aria-hidden': true,
    focusable: 'false',
    xmlns: 'http://www.w3.org/2000/svg',
  };

  if (theme === 'solar') {
    return (
      <svg {...common}>
        <defs>
          <linearGradient id="solarSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0a3d2b" />
            <stop offset="45%" stopColor="#15734d" />
            <stop offset="100%" stopColor="#e0a94a" />
          </linearGradient>
          <radialGradient id="solarGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffe6a6" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#ffd479" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="solarPanel" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#08281f" />
            <stop offset="50%" stopColor="#0e3a2b" />
            <stop offset="100%" stopColor="#08281f" />
          </linearGradient>
        </defs>
        <rect width="1440" height="800" fill="url(#solarSky)" />
        <Sun cx={1060} cy={450} r={78} gradId="solarGlow" />
        <Cloud x={220} y={170} s={1.1} dur={80} />
        <Cloud x={560} y={110} s={0.8} dur={100} fill="rgba(255,255,255,0.10)" />
        <path d="M0 540 Q 360 470 720 520 T 1440 500 V800 H0 Z" fill="#0d5c3f" opacity="0.55" />
        {/* solar panel rows in perspective, with a light sweep */}
        <g>
          {[0, 1, 2, 3].map((row) => {
            const y = 600 + row * 48;
            const skew = 26 + row * 10;
            return (
              <g key={row} fill="url(#solarPanel)" stroke="rgba(127,214,207,0.35)" strokeWidth="1">
                {[0, 1, 2, 3, 4, 5, 6].map((c) => {
                  const x = -40 + c * (230 + row * 26);
                  return (
                    <polygon key={c}
                      points={`${x} ${y} ${x + 150 + row * 18} ${y} ${x + 150 + row * 18 - skew} ${y + 30} ${x - skew} ${y + 30}`} />
                  );
                })}
              </g>
            );
          })}
          {/* sweeping highlight */}
          <rect x="-300" y="580" width="180" height="240" fill="rgba(255,236,179,0.16)" transform="skewX(-20)">
            <animate attributeName="x" values="-300;1600" dur="7s" repeatCount="indefinite" />
          </rect>
        </g>
      </svg>
    );
  }

  if (theme === 'wind') {
    return (
      <svg {...common}>
        <defs>
          <linearGradient id="windSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0a3d2b" />
            <stop offset="55%" stopColor="#12744f" />
            <stop offset="100%" stopColor="#2bb0a6" />
          </linearGradient>
          <radialGradient id="windGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#d9fff2" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#d9fff2" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="1440" height="800" fill="url(#windSky)" />
        <Sun cx={360} cy={210} r={54} rays={false} gradId="windGlow" />
        <Cloud x={700} y={150} s={1} dur={90} />
        <Cloud x={1050} y={230} s={0.7} dur={70} fill="rgba(255,255,255,0.10)" />
        <path d="M0 620 Q 400 540 820 600 T 1440 580 V800 H0 Z" fill="#0d5c3f" opacity="0.5" />
        <path d="M0 700 Q 500 640 1000 690 T 1440 670 V800 H0 Z" fill="#08281f" opacity="0.6" />
        <Turbine x={300} y={470} s={1.15} dur={8} />
        <Turbine x={720} y={420} s={1.5} dur={7} />
        <Turbine x={1120} y={480} s={1.05} dur={9.5} />
        <Turbine x={980} y={520} s={0.8} dur={10} />
      </svg>
    );
  }

  if (theme === 'grid') {
    return (
      <svg {...common}>
        <defs>
          <linearGradient id="gridSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#062018" />
            <stop offset="55%" stopColor="#0d5c3f" />
            <stop offset="100%" stopColor="#158a86" />
          </linearGradient>
          <radialGradient id="gridGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7fd6cf" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#7fd6cf" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="1440" height="800" fill="url(#gridSky)" />
        <circle cx="1120" cy="240" r="170" fill="url(#gridGlow)" />
        <Cloud x={300} y={150} s={0.9} dur={95} fill="rgba(255,255,255,0.08)" />
        <path d="M0 660 H1440 V800 H0 Z" fill="#08281f" opacity="0.6" />
        {/* power lines with traveling energy pulses */}
        <g stroke="rgba(127,214,207,0.5)" strokeWidth="2" fill="none">
          <path id="gl1" d="M120 470 Q 400 560 680 470" />
          <path id="gl2" d="M120 500 Q 400 600 680 500" />
          <path id="gl3" d="M680 470 Q 950 560 1220 470" />
          <path id="gl4" d="M680 500 Q 950 600 1220 500" />
        </g>
        <PulseOnPath pathId="gl1" dur={3} delay={0} />
        <PulseOnPath pathId="gl2" dur={3.6} delay={0.8} color="#7fd6cf" />
        <PulseOnPath pathId="gl3" dur={3.2} delay={0.4} />
        <PulseOnPath pathId="gl4" dur={3.8} delay={1.2} color="#7fd6cf" />
        <Tower x={120} groundY={660} h={230} light />
        <Tower x={680} groundY={660} h={250} light />
        <Tower x={1220} groundY={660} h={230} light />
        <g stroke="rgba(255,255,255,0.5)" strokeWidth="2" fill="none" opacity="0.7">
          <rect x="300" y="600" width="60" height="60" />
          <rect x="380" y="590" width="60" height="70" />
          <path d="M330 600 V560 M410 590 V550" />
        </g>
      </svg>
    );
  }

  if (theme === 'ops') {
    return (
      <svg {...common}>
        <defs>
          <linearGradient id="opsBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#062018" />
            <stop offset="60%" stopColor="#0d5c3f" />
            <stop offset="100%" stopColor="#12744f" />
          </linearGradient>
        </defs>
        <rect width="1440" height="800" fill="url(#opsBg)" />
        <g stroke="rgba(127,214,207,0.10)" strokeWidth="1">
          {Array.from({ length: 16 }).map((_, i) => (
            <line key={`v${i}`} x1={i * 96} y1="0" x2={i * 96} y2="800" />
          ))}
          {Array.from({ length: 9 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 100} x2="1440" y2={i * 100} />
          ))}
        </g>
        {/* moving scan line */}
        <rect x="0" y="0" width="3" height="800" fill="rgba(127,214,207,0.35)">
          <animate attributeName="x" values="0;1440;0" dur="9s" repeatCount="indefinite" />
        </rect>
        {/* dashboard panels */}
        <g>
          <rect x="120" y="230" width="360" height="210" rx="14" fill="rgba(255,255,255,0.06)" stroke="rgba(127,214,207,0.28)" />
          <rect x="540" y="230" width="360" height="210" rx="14" fill="rgba(255,255,255,0.06)" stroke="rgba(127,214,207,0.28)" />
          <rect x="960" y="230" width="360" height="210" rx="14" fill="rgba(255,255,255,0.06)" stroke="rgba(127,214,207,0.28)" />
        </g>
        {/* animated forecast waveforms (repeating) */}
        <g fill="none" strokeWidth="3">
          <path d="M150 380 C 230 300 300 420 380 340 S 470 300 460 360" stroke="#e6bb63"
            strokeDasharray="8 10">
            <animate attributeName="stroke-dashoffset" values="0;-180" dur="3s" repeatCount="indefinite" />
          </path>
          <path d="M570 380 C 650 320 720 400 800 300 S 890 340 880 360" stroke="#7fd6cf"
            strokeDasharray="8 10">
            <animate attributeName="stroke-dashoffset" values="0;-200" dur="3.4s" repeatCount="indefinite" />
          </path>
        </g>
        {/* growing bar chart */}
        <g fill="rgba(53,181,127,0.8)">
          {[0, 1, 2, 3, 4, 5].map((b) => {
            const full = (b % 3) * 40 + 40;
            return (
              <rect key={b} x={985 + b * 55} width="34" rx="4" y={400} height="0">
                <animate attributeName="height" values={`0;${full};${full}`} dur="2.4s" begin={`${b * 0.15}s`} repeatCount="indefinite" />
                <animate attributeName="y" values={`400;${400 - full};${400 - full}`} dur="2.4s" begin={`${b * 0.15}s`} repeatCount="indefinite" />
              </rect>
            );
          })}
        </g>
        <path d="M0 620 H1440 V800 H0 Z" fill="#08281f" opacity="0.5" />
      </svg>
    );
  }

  // ecosystem (default)
  return (
    <svg {...common}>
      <defs>
        <linearGradient id="ecoSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#062018" />
          <stop offset="50%" stopColor="#0d5c3f" />
          <stop offset="100%" stopColor="#1aa06b" />
        </linearGradient>
        <radialGradient id="ecoGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffe6a6" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#e6bb63" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1440" height="800" fill="url(#ecoSky)" />
      <Sun cx={1120} cy={240} r={58} rays={false} gradId="ecoGlow" />
      <Cloud x={260} y={150} s={0.9} dur={90} />
      <path d="M0 640 Q 500 590 960 630 T 1440 620 V800 H0 Z" fill="#08281f" opacity="0.55" />
      {/* connective network with flowing energy */}
      <g stroke="rgba(127,214,207,0.45)" strokeWidth="2" fill="none" strokeDasharray="6 12">
        <path d="M240 470 L 620 520 L 960 460 L 1240 520">
          <animate attributeName="stroke-dashoffset" values="0;-180" dur="4s" repeatCount="indefinite" />
        </path>
        <path d="M240 470 L 480 620 M620 520 L 720 660 M960 460 L 1040 640">
          <animate attributeName="stroke-dashoffset" values="0;-160" dur="3.4s" repeatCount="indefinite" />
        </path>
      </g>
      <g fill="#a9e7df">
        {[[240, 470], [620, 520], [960, 460], [1240, 520]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="5">
            <animate attributeName="r" values="4;7;4" dur="2.6s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2.6s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
          </circle>
        ))}
      </g>
      <Turbine x={360} y={430} s={1.15} dur={8} />
      <Tower x={780} groundY={640} h={210} light />
      <g fill="#08281f" stroke="rgba(127,214,207,0.35)" strokeWidth="1" opacity="0.9">
        {[0, 1, 2, 3, 4].map((c) => {
          const x = 980 + c * 96;
          return <polygon key={c} points={`${x} 640 ${x + 76} 640 ${x + 62} 670 ${x - 14} 670`} />;
        })}
      </g>
    </svg>
  );
}
