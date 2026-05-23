# Theme Transitions

Monorepo for **lightweight, CSS-first dark/light theme transitions** on the web. The project uses the [View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API) to animate theme changes—no Framer Motion or similar libraries.

## Purpose

Switching themes (for example toggling a `dark` class) can feel abrupt. This repository provides small helpers and companion CSS that reveal the new theme with a polished transition: a **circular reveal** from the click point, or a **sweep** from an edge or corner.

The published npm package is the library; the demo app lets you try both techniques in the browser before integrating them elsewhere.

## Packages

| Package                                                           | Role                                                                                              | Docs                                              |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| [`@maxigarcia/theme-transitions`](./packages/js-theme-animation/) | Publishable library: `onCircularRevealAnimation`, `onSweepRevealAnimation`, and per-animation CSS | [README](./packages/js-theme-animation/README.md) |
| [`@maxigarcia/theme-transitions-app`](./packages/app/)            | Private Astro demo site (versioned & tagged, not published to npm)                                | [README](./packages/app/README.md)                |

Per-animation usage lives under:

- [Circular reveal](./packages/js-theme-animation/src/circular-reveal/README.md)
- [Sweep reveal](./packages/js-theme-animation/src/sweep-reveal/README.md)

## Getting started

```bash
npm install
npm run dev      # demo site
npm run build    # library + app (Nx builds dependencies first)
```

Install the library in another project:

```bash
npm install @maxigarcia/theme-transitions
```

## Requirements

- Node **≥ 22.12.0** (for the demo app)
- [View Transitions](https://caniuse.com/view-transitions) in the browser for animated reveals; theme changes still apply when unsupported

## License

ISC — see [package.json](./package.json).
