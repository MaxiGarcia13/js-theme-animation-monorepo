# Page turn

The current theme turns away like a book page, pivoting on the left or right edge while the new theme stays visible underneath.

## Setup

Import the companion styles:

```css
@import '@maxigarcia/view-transitions/page-turn.css';
```

## Usage

Call `onPageTurnAnimation` around your theme toggle:

```ts
import { onPageTurnAnimation } from '@maxigarcia/view-transitions';

button.addEventListener('click', () => {
  onPageTurnAnimation(() => document.documentElement.classList.toggle('dark'));
});
```

### Custom duration and edge

```ts
onPageTurnAnimation(
  () => document.documentElement.classList.toggle('dark'),
  { duration: 900, edge: 'right' },
);
```

If `document.startViewTransition` is unavailable, `apply` runs immediately with no animation.

## API

### `onPageTurnAnimation(apply, options?)`

| Parameter | Type              | Description                                                                |
| --------- | ----------------- | -------------------------------------------------------------------------- |
| `apply`   | `() => void`      | Runs inside `startViewTransition`; update theme classes or variables here. |
| `options` | `PageTurnOptions` | Optional duration and pivot edge.                                          |

**`PageTurnOptions`**

| Option     | Type           | Default  | Description                                      |
| ---------- | -------------- | -------- | ------------------------------------------------ |
| `duration` | `number`       | `750`    | Page turn duration in milliseconds.              |
| `edge`     | `PageTurnEdge` | `'left'` | Edge the page pivots on (`'left'` or `'right'`). |

## Behavior

- Adds `page-turn` and `page-turn--left` or `page-turn--right` on `<html>` for the duration of the transition.
- Sets `--theme-page-turn-duration` on `<html>` for the CSS animation.
- The old snapshot rotates in 3D (`rotateY`) to edge-on (`±90deg`) with `transform-origin` on the chosen edge; the new snapshot stays flat underneath.
- Override turn depth in CSS with `--theme-page-turn-perspective` (default `2000px`).
- Respects `prefers-reduced-motion: reduce` via CSS (animation disabled).

Your app owns theme logic (class names, `color-scheme`, CSS variables, etc.). This module only orchestrates the transition.
