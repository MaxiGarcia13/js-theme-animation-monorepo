# Circular reveal

A radial clip-path expands from the click origin, sweeping the new theme into view.

## Setup

1. Enable a root view transition on `<html>`:

```css
html {
  view-transition-name: root;
}
```

2. Import the companion styles:

```css
@import '@maxigarcia/view-transitions/circular-reveal.css';
```

## Usage

Call `onCircularRevealAnimation` around your theme toggle. Pass a `MouseEvent` (or any object with `clientX` / `clientY`) so the circle originates at the click:

```ts
import { onCircularRevealAnimation } from '@maxigarcia/view-transitions';

button.addEventListener('click', (event) => {
  onCircularRevealAnimation(
    () => document.documentElement.classList.toggle('dark'),
    event,
  );
});
```

### Optional blur and custom duration

```ts
onCircularRevealAnimation(
  () => document.documentElement.classList.toggle('dark'),
  event,
  {
    blur: true,
    blurAmount: '16px',
    duration: '800ms',
  },
);
```

If `document.startViewTransition` is unavailable, `apply` runs immediately with no animation.

## API

### `onCircularRevealAnimation(apply, origin, options?)`

| Parameter | Type                                   | Description                                                                |
| --------- | -------------------------------------- | -------------------------------------------------------------------------- |
| `apply`   | `() => void`                           | Runs inside `startViewTransition`; update theme classes or variables here. |
| `origin`  | `{ clientX: number; clientY: number }` | Origin for the circle (e.g. a `MouseEvent`).                               |
| `options` | `CircularRevealOptions`                | Optional blur and duration overrides.                                      |

**`CircularRevealOptions`**

| Option       | Type                              | Default | Description                                                            |
| ------------ | --------------------------------- | ------- | ---------------------------------------------------------------------- |
| `blur`       | `boolean`                         | `false` | Blur inside the expanding circle; clears as the reveal finishes.       |
| `blurAmount` | `string`                          | `12px`  | Blur radius when `blur` is `true`.                                     |
| `duration`   | `` `${number}ms` ``/`` `${number}s` `` | `0.5s`  | Animation duration. Accepts CSS time values like `'600ms'` or `'1s'`.  |

## Behavior

- Sets `--theme-reveal-x` and `--theme-reveal-y` on `<html>` from the click position (as viewport percentages).
- Adds `circular-reveal` for the duration of the transition.
- When `blur` is `true`, adds `theme-reveal--blur` and sets `--theme-reveal-blur-amount`.
- When `duration` is provided, sets `--theme-reveal-duration` on `<html>`.
- Cleans up classes and inline styles when the transition finishes.
- Respects `prefers-reduced-motion: reduce` via CSS (animation disabled).

Your app owns theme logic (class names, `color-scheme`, CSS variables, etc.). This module only orchestrates the transition.
