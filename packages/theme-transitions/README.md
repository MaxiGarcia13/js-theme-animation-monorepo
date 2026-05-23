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
| `@maxigarcia/theme-transitions/circular-reveal/index.css` | Styles for circular reveal                                   |
| `@maxigarcia/theme-transitions/sweep-reveal/index.css`    | Styles for sweep reveal                                      |

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
npm run build -w @maxigarcia/theme-transitions
# or: nx run @maxigarcia/theme-transitions:build
npm run lint -w @maxigarcia/theme-transitions
```

### Versioning & publish (Nx Release)

Use [Conventional Commits](https://www.conventionalcommits.org/) for changes under this package (`feat`, `fix`, `perf`, etc.). From the monorepo root:

```bash
npm run version-packages   # bump version + changelog (no publish)
npm run release            # publish to npm
```

CI on `main` versions and tags both projects, but only publishes this package to npm. See the [root README](../../README.md#releasing).

## Browser support

Requires [View Transitions](https://caniuse.com/view-transitions) for animated reveals. Unsupported browsers still apply the theme change without animation.
