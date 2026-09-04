/* ============================================================
   Hero animated overlay — subtle renewable-energy motion layered
   over the real photo (no 3D library, respects reduced-motion via
   CSS). Energy-flow lines with travelling pulses + floating
   particles. Purely decorative.
   ============================================================ */

const PARTICLES = [
  { cx: 120, cy: 140, r: 2.4, d: '0s', dur: '7s' },
  { cx: 320, cy: 520, r: 3, d: '1.2s', dur: '9s' },
  { cx: 560, cy: 220, r: 2, d: '0.6s', dur: '8s' },
  { cx: 780, cy: 620, r: 2.6, d: '2s', dur: '10s' },
  { cx: 980, cy: 160, r: 2.2, d: '0.9s', dur: '7.5s' },
  { cx: 1180, cy: 480, r: 3, d: '1.6s', dur: '9.5s' },
  { cx: 1320, cy: 260, r: 2, d: '0.3s', dur: '8.5s' },
  { cx: 440, cy: 700, r: 2.4, d: '2.4s', dur: '11s' },
  { cx: 700, cy: 380, r: 2, d: '1s', dur: '8s' },
  { cx: 1050, cy: 640, r: 2.6, d: '0.5s', dur: '9s' },
];

export default function HeroFX() {
  return (
    <svg
      className="hero__fx"
      viewBox="0 0 1440 800"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="fxLine" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7fd6cf" stopOpacity="0" />
          <stop offset="50%" stopColor="#7fd6cf" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#7fd6cf" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="fxDot" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffe6a6" />
          <stop offset="100%" stopColor="#e6bb63" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Energy-flow lines */}
      <g fill="none" stroke="url(#fxLine)" strokeWidth="2">
        <path id="fx1" d="M-40 620 L360 620 L520 460 L900 460 L1040 300 L1500 300" className="hero__fx-line" />
        <path id="fx2" d="M-40 180 L300 180 L440 340 L860 340 L1000 500 L1500 500" className="hero__fx-line hero__fx-line--2" />
        <path id="fx3" d="M-40 420 L520 420 L680 300 L1080 300 L1240 520 L1500 520" className="hero__fx-line hero__fx-line--3" />
      </g>

      {/* Travelling energy pulses along the lines */}
      <g>
        <circle r="9" fill="url(#fxDot)"><animateMotion dur="5s" repeatCount="indefinite" rotate="auto"><mpath href="#fx1" /></animateMotion></circle>
        <circle r="8" fill="url(#fxDot)"><animateMotion dur="6.2s" begin="1.4s" repeatCount="indefinite" rotate="auto"><mpath href="#fx2" /></animateMotion></circle>
        <circle r="8" fill="url(#fxDot)"><animateMotion dur="5.6s" begin="0.8s" repeatCount="indefinite" rotate="auto"><mpath href="#fx3" /></animateMotion></circle>
      </g>

      {/* Floating particles */}
      <g fill="#a9e7df" className="hero__fx-particles">
        {PARTICLES.map((p, i) => (
          <circle key={i} cx={p.cx} cy={p.cy} r={p.r} style={{ animationDelay: p.d, animationDuration: p.dur }} />
        ))}
      </g>
    </svg>
  );
}
