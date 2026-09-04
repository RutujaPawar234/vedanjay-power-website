# Vedanjay Power Pvt. Ltd. — Website

Official corporate website for **Vedanjay Power Pvt. Ltd.** — _Connecting to a More Sustainable Future_.

Built incrementally. **Currently implemented: Homepage only.**

## Tech stack
- React 18 + JavaScript (Vite)
- Bootstrap 5 + Bootstrap Icons
- React Router DOM, React Helmet Async (SEO)
- Custom CSS for identity, animations, and effects
- Font: Times New Roman throughout

## Getting started
```bash
npm install
npm run dev
```
Open http://localhost:5173

## Production build
```bash
npm run build
npm run preview
```

## Docker
```bash
docker build -t vedanjay-power .
docker run -p 8080:80 vedanjay-power
```

## Structure
```
src/
  components/   # Header, Hero, sections, Footer, Chatbot, SEO
  pages/        # Home.jsx
  data/         # homeData.js (single source of company content)
  hooks/        # useReveal, useCountUp
  styles/       # home.css, animations.css
public/images/hero/  # drop AI-generated hero visuals here (see README)
```

## Notes
- Hero is image/video-ready; premium CSS gradients render until real assets are added.
- Leadership photos use placeholders — no fabricated portraits.
- Chatbot is a front-end UI placeholder (no backend yet).
- Only officially provided company facts are used.
