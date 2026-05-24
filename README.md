# Theme Transitions

Monorepo for **lightweight, CSS-first dark/light theme transitions** on the web. The project uses the [View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API) to animate theme changes—no animation framework required.

## Purpose

Switching themes (for example toggling a `dark` class) can feel abrupt. This repository provides small helpers and companion CSS that reveal the new theme with a polished transition:

- **Circular reveal** — radial clip-path from the click point
- **Sweep reveal** — directional wipe from an edge or corner
- **Fall** — the old theme drops off the bottom
- **Page turn** — the old theme pivots away on the left or right edge, like turning a book page

The published npm package is the library; the demo app lets you try every technique in the browser before integrating them elsewhere.

## Packages

| Package                                                          | Role                                                                                                                                        | Docs                                             |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| [`@maxigarcia/theme-transitions`](./packages/theme-transitions/) | Publishable library: `onCircularRevealAnimation`, `onSweepRevealAnimation`, `onFallAnimation`, `onPageTurnAnimation`, and per-animation CSS | [README](./packages/theme-transitions/README.md) |
| [`@maxigarcia/theme-transitions-app`](./packages/app/)           | Private Astro demo site (versioned & tagged, not published to npm)                                                                          | [README](./packages/app/README.md)               |

Per-animation usage lives under:

- [Circular reveal](./packages/theme-transitions/src/circular-reveal/README.md)
- [Sweep reveal](./packages/theme-transitions/src/sweep-reveal/README.md)
- [Fall](./packages/theme-transitions/src/fall/README.md)
- [Page turn](./packages/theme-transitions/src/page-turn/README.md)

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

Live demo: [theme-transitions.vercel.app](https://theme-transitions.vercel.app)

## Requirements

- Node **≥ 22.12.0** (for the demo app)
- [View Transitions](https://caniuse.com/view-transitions) in the browser for animated reveals; theme changes still apply when unsupported

## License

ISC — see [package.json](./package.json).
