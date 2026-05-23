# Sweep reveal

The new theme sweeps in from a chosen edge or corner using a directional `clip-path` animation.

## Setup

1. Enable a root view transition on `<html>`:

```css
html {
  view-transition-name: root;
}
```

2. Import the companion styles:

```css
@import '@maxigarcia/theme-transitions/sweep-reveal/index.css';
```

## Usage

Call `onSweepRevealAnimation` with your theme update and a sweep direction:

```ts
import { onSweepRevealAnimation } from '@maxigarcia/theme-transitions';

button.addEventListener('click', () => {
  onSweepRevealAnimation(
    () => document.documentElement.classList.toggle('dark'),
    'up',
  );
});
```

If `document.startViewTransition` is unavailable, `apply` runs immediately with no animation.

## API

### `onSweepRevealAnimation(apply, direction?)`

| Parameter   | Type             | Default | Description                                                                |
| ----------- | ---------------- | ------- | -------------------------------------------------------------------------- |
| `apply`     | `() => void`     | —       | Runs inside `startViewTransition`; update theme classes or variables here. |
| `direction` | `SweepDirection` | `'up'`  | Edge or corner the sweep comes from.                                       |

**`SweepDirection`**

| Value                   | Effect                          |
| ----------------------- | ------------------------------- |
| `'up'`                  | Sweeps from bottom to top       |
| `'down'`                | Sweeps from top to bottom       |
| `'left'`                | Sweeps from right to left       |
| `'right'`               | Sweeps from left to right       |
| `'corner-top-left'`     | Sweeps from bottom-right corner |
| `'corner-top-right'`    | Sweeps from bottom-left corner  |
| `'corner-bottom-left'`  | Sweeps from top-right corner    |
| `'corner-bottom-right'` | Sweeps from top-left corner     |

## Behavior

- Sets `--theme-reveal-direction-from` and `--theme-reveal-direction-to` on `<html>` for the chosen sweep.
- Adds `sweep-reveal` for the duration of the transition.
- Cleans up classes and inline styles after ~600ms.
- Respects `prefers-reduced-motion: reduce` via CSS (animation disabled).

Your app owns theme logic (class names, `color-scheme`, CSS variables, etc.). This module only orchestrates the transition.
