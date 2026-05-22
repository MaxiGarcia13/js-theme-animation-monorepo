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
npm run lint -w @maxigarcia/js-theme-animation
```

### Versioning & publish (Changesets)

1. After a change, add a changeset from the monorepo root:

   ```bash
   npm run changeset
   ```

2. When ready to release, bump versions and update changelogs:

   ```bash
   npm run version-packages
   ```

3. Commit the version/changelog updates, then publish to npm:

   ```bash
   npm run release
   ```

## Browser support

Requires [View Transitions](https://caniuse.com/view-transitions) for animated reveals. Unsupported browsers still apply the theme change without animation.
