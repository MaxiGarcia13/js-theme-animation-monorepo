# JS Theme Animation

Monorepo for **lightweight, CSS-first dark/light theme transitions** on the web. The project uses the [View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API) to animate theme changes—no Framer Motion or similar libraries.

## Purpose

Switching themes (for example toggling a `dark` class) can feel abrupt. This repository provides small helpers and companion CSS that reveal the new theme with a polished transition: a **circular reveal** from the click point, or a **sweep** from an edge or corner.

The published npm package is the library; the demo app lets you try both techniques in the browser before integrating them elsewhere.

## Packages

| Package                                                            | Role                                                                                              | Docs                                              |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| [`@maxigarcia/js-theme-animation`](./packages/js-theme-animation/) | Publishable library: `onCircularRevealAnimation`, `onSweepRevealAnimation`, and per-animation CSS | [README](./packages/js-theme-animation/README.md) |
| [`@maxigarcia/js-theme-animation-app`](./packages/app/)            | Private Astro demo site (versioned & tagged, not published to npm)                                | [README](./packages/app/README.md)                |

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
npm install @maxigarcia/js-theme-animation
```

## Workspace tooling (Nx)

This monorepo uses [Nx](https://nx.dev/) to track project dependencies, run tasks in the right order, and release the npm library.

- `@maxigarcia/js-theme-animation-app` depends on `@maxigarcia/js-theme-animation` via npm workspaces (`"*"` in `package.json`); Nx detects the link from imports and workspace metadata.
- `nx run-many -t build` builds the library before the app (`dependsOn: ["^build"]` in `nx.json`).
- `nx graph` shows the project graph.

## Releasing

Releases use [Nx Release](https://nx.dev/docs/features/manage-releases) with [independent versioning](https://nx.dev/docs/guides/nx-release/release-projects-independently) and [Conventional Commits](https://www.conventionalcommits.org/). Each released project gets a git tag like `@maxigarcia/js-theme-animation@1.2.3`.

| Project                              | npm publish    | git tag                                        |
| ------------------------------------ | -------------- | ---------------------------------------------- |
| `@maxigarcia/js-theme-animation`     | yes            | `@maxigarcia/js-theme-animation@{version}`     |
| `@maxigarcia/js-theme-animation-app` | no (`private`) | `@maxigarcia/js-theme-animation-app@{version}` |

From the repo root (local dry run):

```bash
npm run version-packages   # bump versions, changelogs, and git tags (no publish)
npm run release            # publish the library to npm only (usually run in CI)
```

## Requirements

- Node **≥ 22.12.0** (for the demo app)
- [View Transitions](https://caniuse.com/view-transitions) in the browser for animated reveals; theme changes still apply when unsupported

## License

ISC — see [package.json](./package.json).
