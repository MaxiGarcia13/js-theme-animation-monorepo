# @maxigarcia/view-transitions

Lightweight, CSS-first theme transitions for the web. Wrap your theme change in the [View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API) and reveal the new theme with a **circular**, **sweep**, **fall**, or **page turn** animation—no animation framework required.

## Install

```bash
npm install @maxigarcia/view-transitions
```

## Animations

| Technique       | Docs                                                             |
| --------------- | ---------------------------------------------------------------- |
| Circular reveal | [src/circular-reveal/README.md](./src/circular-reveal/README.md) |
| Sweep reveal    | [src/sweep-reveal/README.md](./src/sweep-reveal/README.md)       |
| Fall            | [src/fall/README.md](./src/fall/README.md)                       |
| Page turn       | [src/page-turn/README.md](./src/page-turn/README.md)             |

Each module has its own README with setup, API, and usage examples.

## Package exports

| Import                                              | Purpose                                                                                                |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `@maxigarcia/view-transitions`                     | `onCircularRevealAnimation`, `onSweepRevealAnimation`, `onFallAnimation`, `onPageTurnAnimation`, types |
| `@maxigarcia/view-transitions/page-turn.css`       | Styles for page turn                                                                                   |
| `@maxigarcia/view-transitions/circular-reveal.css` | Styles for circular reveal                                                                             |
| `@maxigarcia/view-transitions/fall.css`            | Styles for fall                                                                                        |
| `@maxigarcia/view-transitions/sweep-reveal.css`    | Styles for sweep reveal                                                                                |

## Live demo

Go to the [demo](https://theme-transitions.vercel.app)

```bash
# from monorepo root
npm install
npm run dev
```

## Development

From the monorepo root:

```bash
npm run build -w @maxigarcia/view-transitions
# or: nx run @maxigarcia/view-transitions:build
npm run lint -w @maxigarcia/view-transitions
```

## Browser support

Requires [View Transitions](https://caniuse.com/view-transitions) for animated reveals. Unsupported browsers still apply the theme change without animation.
