/**
 * Vedanjay Power emblem — SVG recreation of the official mark:
 * green sunburst ring, orange band, three-blade (leaf) hub.
 * Shared by the brand logo and the chatbot avatar.
 */
export default function Emblem({ className = 'vp-emblem' }) {
  const cx = 50;
  const cy = 50;
  const spikes = 22;
  const rInner = 33;
  const rOuter = 48;
  const half = Math.PI / spikes;

  const points = [];
  for (let i = 0; i < spikes; i += 1) {
    const a = (i / spikes) * Math.PI * 2 - Math.PI / 2;
    const tip = `${cx + rOuter * Math.cos(a)},${cy + rOuter * Math.sin(a)}`;
    const bl = `${cx + rInner * Math.cos(a - half)},${cy + rInner * Math.sin(a - half)}`;
    const br = `${cx + rInner * Math.cos(a + half)},${cy + rInner * Math.sin(a + half)}`;
    points.push(`${bl} ${tip} ${br}`);
  }

  const blade = 'M50 50 C 43.5 39, 45.5 30, 50 25 C 54.5 30, 56.5 39, 50 50 Z';

  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
      <g fill="#2f8f2d">
        {points.map((p, i) => (
          <polygon key={i} points={p} />
        ))}
      </g>
      <circle cx={cx} cy={cy} r="33" fill="#f7931e" />
      <circle cx={cx} cy={cy} r="26" fill="#ffffff" />
      <g>
        <path d={blade} fill="#2f8f2d" transform="rotate(0 50 50)" />
        <path d={blade} fill="#37a534" transform="rotate(120 50 50)" />
        <path d={blade} fill="#2f8f2d" transform="rotate(240 50 50)" />
        <circle cx="50" cy="50" r="5.4" fill="#f7931e" />
      </g>
    </svg>
  );
}
