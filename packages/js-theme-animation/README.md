# @maxigarcia/js-theme-animation

Lightweight, CSS-first theme transitions for the web. Wrap your theme change in the [View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API) and reveal the new theme with a **circular** or **sweep** animation—no animation framework required.

## Install

```bash
npm install @maxigarcia/js-theme-animation
```

## Animations

| Technique       | Docs                                                             |
| --------------- | ---------------------------------------------------------------- |
| Circular reveal | [src/circular-reveal/README.md](./src/circular-reveal/README.md) |
| Sweep reveal    | [src/sweep-reveal/README.md](./src/sweep-reveal/README.md)       |

Each module has its own README with setup, API, and usage examples.

## Package exports

| Import                                                     | Purpose                                                      |
| ---------------------------------------------------------- | ------------------------------------------------------------ |
| `@maxigarcia/js-theme-animation`                           | `onCircularRevealAnimation`, `onSweepRevealAnimation`, types |
| `@maxigarcia/js-theme-animation/circular-reveal/index.css` | Styles for circular reveal                                   |
| `@maxigarcia/js-theme-animation/sweep-reveal/index.css`    | Styles for sweep reveal                                      |

## Live demo

See the [app package](../app/) in this monorepo for an interactive landing page with both techniques.

```bash
# from monorepo root
npm install
npm run dev
```

## Development

From the monorepo root:

```bash
npm run build -w @maxigarcia/js-theme-animation
# or: nx run @maxigarcia/js-theme-animation:build
npm run lint -w @maxigarcia/js-theme-animation
```

### Versioning & publish (Nx Release)

Use [Conventional Commits](https://www.conventionalcommits.org/) for changes under this package (`feat`, `fix`, `perf`, etc.). From the monorepo root:

```bash
npm run version-packages   # bump version + changelog (no publish)
npm run release            # publish to npm
```

CI on `main` runs the same flow automatically when releasable commits are present. See the [root README](../../README.md#releasing-the-library).

## Browser support

Requires [View Transitions](https://caniuse.com/view-transitions) for animated reveals. Unsupported browsers still apply the theme change without animation.
