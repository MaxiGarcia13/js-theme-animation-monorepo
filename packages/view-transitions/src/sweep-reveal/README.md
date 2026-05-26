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
@import '@maxigarcia/view-transitions/sweep-reveal.css';
```

## Usage

Call `onSweepRevealAnimation` with your theme update and a sweep direction:

```ts
import { onSweepRevealAnimation } from '@maxigarcia/view-transitions';

button.addEventListener('click', () => {
  onSweepRevealAnimation(
    () => document.documentElement.classList.toggle('dark'),
    'up',
  );
});
```

### Optional blur and custom duration

```ts
onSweepRevealAnimation(
  () => document.documentElement.classList.toggle('dark'),
  'up',
  {
    blur: true,
    blurAmount: '16px',
    duration: '800ms',
  },
);
```

If `document.startViewTransition` is unavailable, `apply` runs immediately with no animation.

## API

### `onSweepRevealAnimation(apply, direction?, options?)`

| Parameter   | Type                  | Default | Description                                                                |
| ----------- | --------------------- | ------- | -------------------------------------------------------------------------- |
| `apply`     | `() => void`          | —       | Runs inside `startViewTransition`; update theme classes or variables here. |
| `direction` | `SweepDirection`      | `'up'`  | Edge or corner the sweep comes from.                                       |
| `options`   | `SweepRevealOptions`  | —       | Optional blur and duration overrides.                                      |

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

**`SweepRevealOptions`**

| Option       | Type                              | Default | Description                                                            |
| ------------ | --------------------------------- | ------- | ---------------------------------------------------------------------- |
| `blur`       | `boolean`                         | `false` | Blur inside the sweeping area; clears as the reveal finishes.          |
| `blurAmount` | `string`                          | `12px`  | Blur radius when `blur` is `true`.                                     |
| `duration`   | `` `${number}ms` ``/`` `${number}s` `` | `0.5s`  | Animation duration. Accepts CSS time values like `'600ms'` or `'1s'`.  |

## Behavior

- Sets `--theme-reveal-direction-from` and `--theme-reveal-direction-to` on `<html>` for the chosen sweep.
- Adds `sweep-reveal` for the duration of the transition.
- When `blur` is `true`, adds `theme-reveal--blur` and sets `--theme-reveal-blur-amount`.
- When `duration` is provided, sets `--theme-reveal-duration` on `<html>`.
- Cleans up classes and inline styles when the transition finishes.
- Respects `prefers-reduced-motion: reduce` via CSS (animation disabled).

Your app owns theme logic (class names, `color-scheme`, CSS variables, etc.). This module only orchestrates the transition.
