# Aizen — 3D Creator Portfolio

A dark-themed, animation-heavy portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
```

## What to personalize before you deploy

- **Hero portrait** (`src/sections/HeroSection.tsx`, `PORTRAIT_SRC`) — currently a placeholder photo. Swap in your own portrait/render.
- **Marquee images** (`src/sections/MarqueeSection.tsx`) — currently placeholder tiles from picsum.photos. Swap for real project stills or GIFs.
- **Project images** (`src/sections/ProjectsSection.tsx`) — currently placeholders. Swap for screenshots of CardBenefits+, MatsyaMitra+, and SmartShop/VisionShop.
- **Contact links** (`src/sections/ContactSection.tsx`) — add your real email, LinkedIn, and GitHub URLs.
- **Live Project links** — point each project card's `href` at a real demo/repo, or remove the button if there's no live link yet.

## Structure

```
src/
  components/     FadeIn, Magnet, AnimatedText, ContactButton, LiveProjectButton
  sections/       HeroSection, MarqueeSection, AboutSection, ServicesSection, ProjectsSection, ContactSection
  App.tsx         Composes all sections
  index.css       Global reset, background, .hero-heading gradient text class
```
