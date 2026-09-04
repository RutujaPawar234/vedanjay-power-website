# Hero image slot

Drop AI-generated photorealistic hero visuals here to replace the CSS scene
fallbacks. Filenames are already wired in `src/data/homeData.js`:

| Scene | File | Theme |
|-------|------|-------|
| 1 | `solar-sunrise.jpg`  | Large solar power plant at sunrise |
| 2 | `wind-hybrid.jpg`    | Wind turbines / hybrid renewable site |
| 3 | `transmission.jpg`   | Transmission towers & substation |
| 4 | `control-room.jpg`   | Energy operations / forecasting room |
| 5 | `ecosystem.jpg`      | Integrated power ecosystem |

Recommended: 1920×1080 (16:9), optimized (< ~300 KB each), consistent
photorealistic corporate style. Until a file exists, the matching scene shows a
premium green gradient fallback automatically (the `<img>` hides itself on 404).

Video-ready: to use video later, swap the `<img>` in `Hero.jsx` for a `<video>`
using the same `media` path — the scene/overlay architecture stays the same.
