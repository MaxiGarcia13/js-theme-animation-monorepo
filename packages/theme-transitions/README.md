# @maxigarcia/theme-transitions

Lightweight, CSS-first theme transitions for the web. Wrap your theme change in the [View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API) and reveal the new theme with a **circular** or **sweep** animation—no animation framework required.

## Install

```bash
npm install @maxigarcia/theme-transitions
```

## Animations

| Technique       | Docs                                                             |
| --------------- | ---------------------------------------------------------------- |
| Circular reveal | [src/circular-reveal/README.md](./src/circular-reveal/README.md) |
| Sweep reveal    | [src/sweep-reveal/README.md](./src/sweep-reveal/README.md)       |

Each module has its own README with setup, API, and usage examples.

## Package exports

| Import                                                    | Purpose                                                      |
| --------------------------------------------------------- | ------------------------------------------------------------ |
| `@maxigarcia/theme-transitions`                           | `onCircularRevealAnimation`, `onSweepRevealAnimation`, types |
| `@maxigarcia/theme-transitions/circular-reveal.css` | Styles for circular reveal                                   |
| `@maxigarcia/theme-transitions/sweep-reveal.css`    | Styles for sweep reveal                                      |

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
npm run build -w @maxigarcia/theme-transitions
# or: nx run @maxigarcia/theme-transitions:build
npm run lint -w @maxigarcia/theme-transitions
```

## Browser support

Requires [View Transitions](https://caniuse.com/view-transitions) for animated reveals. Unsupported browsers still apply the theme change without animation.
