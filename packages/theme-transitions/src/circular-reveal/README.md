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
@import '@maxigarcia/theme-transitions/circular-reveal/index.css';
```

## Usage

Call `onCircularRevealAnimation` around your theme toggle. Pass a `MouseEvent` (or any object with `clientX` / `clientY`) so the circle originates at the click:

```ts
import { onCircularRevealAnimation } from '@maxigarcia/theme-transitions';

button.addEventListener('click', (event) => {
  onCircularRevealAnimation(
    () => document.documentElement.classList.toggle('dark'),
    event,
  );
});
```

### Optional blur

```ts
onCircularRevealAnimation(
  () => document.documentElement.classList.toggle('dark'),
  event,
  {
    blurCircle: true,
    blurAmount: '16px',
  },
);
```

If `document.startViewTransition` is unavailable, `apply` runs immediately with no animation.

## API

### `onCircularRevealAnimation(apply, click, options?)`

| Parameter | Type                                   | Description                                                                |
| --------- | -------------------------------------- | -------------------------------------------------------------------------- |
| `apply`   | `() => void`                           | Runs inside `startViewTransition`; update theme classes or variables here. |
| `click`   | `{ clientX: number; clientY: number }` | Origin for the circle (e.g. a `MouseEvent`).                               |
| `options` | `CircularRevealOptions`                | Optional blur inside the circle.                                           |

**`CircularRevealOptions`**

| Option       | Type      | Default  | Description                                                      |
| ------------ | --------- | -------- | ---------------------------------------------------------------- |
| `blurCircle` | `boolean` | `false`  | Blur inside the expanding circle; clears as the reveal finishes. |
| `blurAmount` | `string`  | `'12px'` | Blur radius when `blurCircle` is `true`.                         |

## Behavior

- Sets `--theme-reveal-x` and `--theme-reveal-y` on `<html>` from the click position (as viewport percentages).
- Adds `circular-reveal` (and optionally `circular-reveal--blur-circle`) for the duration of the transition.
- Cleans up classes and inline styles after ~600ms.
- Respects `prefers-reduced-motion: reduce` via CSS (animation disabled).

Your app owns theme logic (class names, `color-scheme`, CSS variables, etc.). This module only orchestrates the transition.
