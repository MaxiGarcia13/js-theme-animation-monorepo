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
npm run dev      # demo site (Nx runs app:dev)
npm run build    # library + app (Nx builds dependencies first)
```

Install the library in another project:

```bash
npm install @maxigarcia/js-theme-animation
```

## Workspace tooling (Nx)

This monorepo uses [Nx](https://nx.dev/) to track project dependencies, run tasks in the right order, and release the npm library.

- `app` depends on `@maxigarcia/js-theme-animation` via npm workspaces (`"*"` in `package.json`); Nx detects the link from imports and workspace metadata.
- `nx run-many -t build` builds the library before the app (`dependsOn: ["^build"]` in `nx.json`).
- `nx graph` shows the project graph.

## Releasing the library

Releases use [Nx Release](https://nx.dev/docs/features/manage-releases) with [Conventional Commits](https://www.conventionalcommits.org/). Use `feat`, `fix`, or `perf` commits that touch `packages/js-theme-animation` so CI can determine the semver bump.

From the repo root (local dry run):

```bash
npm run version-packages   # bump version + changelog, no publish
npm run release            # publish to npm (usually run in CI)
```

The private `app` workspace is not part of the release.

### CI (GitHub Actions)

- **[CI](.github/workflows/ci.yml)** — runs lint and build on pull requests.
- **[Release](.github/workflows/release.yml)** — on push to `main`: lints, builds, runs `nx release` to bump version and update the changelog when conventional commits warrant it, commits that bump to `main`, then publishes to npm.

Add an [npm automation token](https://www.npmjs.com/settings/~youruser/tokens) as the `NPM_TOKEN` repository secret. Add a `GH_TOKEN` secret (PAT or fine-grained token with **contents: write**) so the workflow can push version commits to `main`.

## Requirements

- Node **≥ 22.12.0** (for the demo app)
- [View Transitions](https://caniuse.com/view-transitions) in the browser for animated reveals; theme changes still apply when unsupported

## License

ISC — see [package.json](./package.json).
