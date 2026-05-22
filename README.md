# JS Theme Animation

Monorepo for **lightweight, CSS-first dark/light theme transitions** on the web. The project uses the [View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API) to animate theme changes—no Framer Motion or similar libraries.

## Purpose

Switching themes (for example toggling a `dark` class) can feel abrupt. This repository provides small helpers and companion CSS that reveal the new theme with a polished transition: a **circular reveal** from the click point, or a **sweep** from an edge or corner.

The published npm package is the library; the demo app lets you try both techniques in the browser before integrating them elsewhere.

## Packages

| Package                                                            | Role                                                                                              | Docs                                              |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| [`@maxigarcia/js-theme-animation`](./packages/js-theme-animation/) | Publishable library: `onCircularRevealAnimation`, `onSweepRevealAnimation`, and per-animation CSS | [README](./packages/js-theme-animation/README.md) |
| [`app`](./packages/app/)                                           | Astro landing site with live demos                                                                | [README](./packages/app/README.md)                |

Per-animation usage lives under:

- [Circular reveal](./packages/js-theme-animation/src/circular-reveal/README.md)
- [Sweep reveal](./packages/js-theme-animation/src/sweep-reveal/README.md)

## Getting started

```bash
npm install
npm run dev      # demo site
npm run build    # library + app
```

Install the library in another project:

```bash
npm install @maxigarcia/js-theme-animation
```

## Releasing the library

Versioning uses [Changesets](https://github.com/changesets/changesets). From the repo root:

1. `npm run changeset` — describe your change after each PR-worthy update
2. `npm run version-packages` — bump `@maxigarcia/js-theme-animation` and write `CHANGELOG.md`
3. `npm run release` — build and publish to npm

The private `app` workspace is ignored by Changesets.

### CI (GitHub Actions)

- **[CI](.github/workflows/ci.yml)** — runs `npm run lint` on pull requests and pushes to `main`.
- **[Release](.github/workflows/release.yml)** — lints, then opens a “Version Packages” PR when changesets are pending, or publishes to npm when that PR is merged.

Add an [npm automation token](https://www.npmjs.com/settings/~youruser/tokens) as the `NPM_TOKEN` repository secret. `GITHUB_TOKEN` is provided by Actions.

## Requirements

- Node **≥ 22.12.0** (for the demo app)
- [View Transitions](https://caniuse.com/view-transitions) in the browser for animated reveals; theme changes still apply when unsupported

## License

ISC — see [package.json](./package.json).
