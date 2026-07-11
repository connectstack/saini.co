# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single-page marketing site for Saini & Co. Consulting (five practices: EV
battery design, software engineering, applied AI, HR & talent, video
production). React 19 + Vite + Tailwind CSS v4 + Framer Motion. No router,
no backend, no tests — one page composed of section components.

## Commands

- `npm run dev` — Vite dev server (default port 5173; respects a `PORT` env
  var so a second instance can run alongside a user-started one)
- `npm run build` — production build to `dist/`
- `npm run lint` — oxlint
- `BASE_PATH=/saini-co/ npm run build` — build as deployed on GitHub Pages
  (the workflow sets `BASE_PATH=/<repo-name>/`); use this to verify
  asset-path correctness in `dist/index.html`

## Architecture

- **`src/data.js` is the single source of all site content** — copy, emails,
  services, team bios, stats, FAQs, hero phrases and their showcase images.
  Content edits happen here, never inside components. Components render
  whatever this file exports (e.g. adding a `badge`/`art` key to a service
  changes its card without touching JSX).
- `src/App.jsx` composes the section components in page order; each section
  lives in `src/components/` and owns its own `id` anchor (nav links in
  `data.js` reference these `#ids`).
- **Design tokens live in `src/index.css` under `@theme`** (Tailwind v4 —
  there is no `tailwind.config.js`): palette (`ink-*` darks, `mist-*` grays,
  accents `volt`/`electric`/`plasma`), fonts (`font-display` = Space Grotesk,
  `font-body` = Inter, both self-hosted via @fontsource imports in
  `main.jsx`), and custom keyframes (`marquee`, `float`, `charge-cell`, …).
  Services map their `accent` key to Tailwind classes via the `ACCENTS`
  table in `Services.jsx`.
- Animation is framer-motion throughout: shared `Reveal.jsx` wrapper for
  scroll entrances, `AnimatePresence` for the hero phrase/image rotation and
  FAQ accordion. Everything honors `prefers-reduced-motion` (via
  `useReducedMotion` and a CSS media query that disables `animate-*`
  classes). The hero's `ParticleField.jsx` is a hand-rolled canvas loop, not
  a library.

## Constraints and gotchas

- **GitHub Pages base path:** the site deploys under `/<repo-name>/`, so
  never hardcode root-absolute URLs (`/foo.png`) in JS strings or runtime
  fetches; import assets so Vite rewrites them.
- **Contact form:** POSTs JSON to `https://formsubmit.co/ajax/<SITE.formEmail>`
  and treats any response without `success: "true"` as an error. The
  FormSubmit endpoint needs a one-time activation click in the target inbox;
  pre-activation submissions are retained by FormSubmit and delivered after
  activation. `SITE.email` (displayed) and `SITE.formEmail` (delivery) are
  intentionally separate.
- **Timers vs hidden tabs:** the hero rotation interval deliberately skips
  ticks while `document.hidden` — rAF pauses in background tabs and would
  freeze the transition mid-animation. Keep that guard on any new timers
  that drive framer-motion state.
- **Marquee accessibility:** the second `<Row />` in `Marquee.jsx` is a
  visual clone for the seamless loop and must stay `aria-hidden`.
- **Hero showcase images (`src/assets/hero/`):** all five (battery, software,
  ai, video, people) are license-clean stock (Unsplash / Pexels, no
  attribution required; credits in `data.js`). Safe to ship; can be swapped
  for photos of real work by replacing the files (keep the same names).
