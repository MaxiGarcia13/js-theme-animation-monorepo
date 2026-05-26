# Fall

The current theme drops off the bottom of the screen while the new theme appears underneath.

## Setup

Import the companion styles:

```css
@import '@maxigarcia/view-transitions/fall.css';
```

## Usage

Call `onFallAnimation` around your theme toggle:

```ts
import { onFallAnimation } from '@maxigarcia/view-transitions';

button.addEventListener('click', () => {
  onFallAnimation(() => document.documentElement.classList.toggle('dark'));
});
```

### Custom duration

```ts
onFallAnimation(
  () => document.documentElement.classList.toggle('dark'),
  { duration: '900ms' },
);
```

If `document.startViewTransition` is unavailable, `apply` runs immediately with no animation.

## API

### `onFallAnimation(apply, options?)`

| Parameter | Type          | Description                                                                |
| --------- | ------------- | -------------------------------------------------------------------------- |
| `apply`   | `() => void`  | Runs inside `startViewTransition`; update theme classes or variables here. |
| `options` | `FallOptions` | Optional duration override.                                                |

**`FallOptions`**

| Option     | Type                              | Default | Description                                                            |
| ---------- | --------------------------------- | ------- | ---------------------------------------------------------------------- |
| `duration` | `` `${number}ms` ``/`` `${number}s` `` | `700ms` | Animation duration. Accepts CSS time values like `'900ms'` or `'1s'`.  |

## Behavior

- Adds `fall` on `<html>` for the duration of the transition.
- When `duration` is provided, sets `--theme-reveal-duration` on `<html>`.
- The old snapshot falls from the **bottom** (`transform-origin: bottom center`) and exits downward.
- The new snapshot is visible immediately underneath with no reveal delay.
- Cleans up classes and inline styles when the transition finishes.
- Respects `prefers-reduced-motion: reduce` via CSS (animation disabled).

Your app owns theme logic (class names, `color-scheme`, CSS variables, etc.). This module only orchestrates the transition.
