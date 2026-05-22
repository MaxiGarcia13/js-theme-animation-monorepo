# app

Interactive demo site for [@maxigarcia/js-theme-animation](../js-theme-animation/). It is the public-facing landing page where visitors can try each theme transition technique before adopting the library in their own projects.

## Purpose

This package is **not** the published npm library. It exists to:

- Showcase **circular reveal** and **sweep reveal** animations driven by the [View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API)
- Let users tweak demo options (blur amount, sweep direction) and see the effect immediately
- Link to the corresponding source in `packages/js-theme-animation` on GitHub

The homepage (`src/pages/index.astro`) renders two live demo cards side by side. Each card wires a theme toggle button to the library helpers (`onCircularRevealAnimation`, `onSweepRevealAnimation`) and applies `toggleTheme` to switch the `dark` class on `<html>`.

## Tech stack

- [Astro](https://astro.build/) — static site with islands for client-side demo scripts
- [Tailwind CSS v4](https://tailwindcss.com/) — layout, typography, and theme tokens (`src/styles/global.css`)
- Workspace dependency on `@maxigarcia/js-theme-animation`

## Development

From the **monorepo root** (recommended):

```bash
npm install
npm run dev
```

That runs the demo via Nx (`nx dev app` → `astro dev`). The site is usually available at `http://localhost:4321`.

From this package only:

```bash
cd packages/app
npm run dev
```

Build and preview:

```bash
npm run build   # builds the library, then the app
npm run preview -w app
```

Node **≥ 22.12.0** is required (see `package.json` `engines`).
