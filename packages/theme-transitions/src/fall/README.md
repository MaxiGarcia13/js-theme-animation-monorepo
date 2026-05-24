# Fall

The current theme drops off the bottom of the screen while the new theme appears underneath.

## Setup

1. Enable view transitions on `<html>` (and optionally on other elements):

```css
html {
  view-transition-name: root;
}
```

2. Import the companion styles:

```css
@import '@maxigarcia/theme-transitions/fall.css';
```

## Usage

Call `onFallAnimation` around your theme toggle:

```ts
import { onFallAnimation } from '@maxigarcia/theme-transitions';

button.addEventListener('click', () => {
  onFallAnimation(() => document.documentElement.classList.toggle('dark'));
});
```

### Custom duration

```ts
onFallAnimation(
  () => document.documentElement.classList.toggle('dark'),
  { duration: 900 },
);
```

If `document.startViewTransition` is unavailable, `apply` runs immediately with no animation.

## API

### `onFallAnimation(apply, options?)`

| Parameter | Type          | Description                                                                |
| --------- | ------------- | -------------------------------------------------------------------------- |
| `apply`   | `() => void`  | Runs inside `startViewTransition`; update theme classes or variables here. |
| `options` | `FallOptions` | Optional duration.                                                         |

**`FallOptions`**

| Option     | Type     | Default | Description                    |
| ---------- | -------- | ------- | ------------------------------ |
| `duration` | `number` | `700`   | Fall duration in milliseconds. |

## Behavior

- Adds `fall` on `<html>` and sets `--theme-fall-duration` for the duration of the transition.
- The old snapshot falls from the **bottom** (`transform-origin: bottom center`) and exits downward.
- The new snapshot is visible immediately underneath with no reveal delay.
- Respects `prefers-reduced-motion: reduce` via CSS (animation disabled).

Your app owns theme logic (class names, `color-scheme`, CSS variables, etc.). This module only orchestrates the transition.
