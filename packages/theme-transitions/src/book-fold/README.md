# Book fold

The current theme turns away like a page, pivoting on the left or right edge while the new theme stays visible underneath.

## Setup

Import the companion styles:

```css
@import '@maxigarcia/theme-transitions/book-fold.css';
```

## Usage

Call `onBookFoldAnimation` around your theme toggle:

```ts
import { onBookFoldAnimation } from '@maxigarcia/theme-transitions';

button.addEventListener('click', () => {
  onBookFoldAnimation(() => document.documentElement.classList.toggle('dark'));
});
```

### Custom duration and edge

```ts
onBookFoldAnimation(
  () => document.documentElement.classList.toggle('dark'),
  { duration: 900, edge: 'right' },
);
```

If `document.startViewTransition` is unavailable, `apply` runs immediately with no animation.

## API

### `onBookFoldAnimation(apply, options?)`

| Parameter | Type              | Description                                                                |
| --------- | ----------------- | -------------------------------------------------------------------------- |
| `apply`   | `() => void`      | Runs inside `startViewTransition`; update theme classes or variables here. |
| `options` | `BookFoldOptions` | Optional duration and pivot edge.                                          |

**`BookFoldOptions`**

| Option     | Type            | Default  | Description                                      |
| ---------- | --------------- | -------- | ------------------------------------------------ |
| `duration` | `number`        | `750`    | Fold duration in milliseconds.                   |
| `edge`     | `BookFoldEdge`  | `'left'` | Edge the page pivots on (`'left'` or `'right'`). |

## Behavior

- Adds `book-fold` and `book-fold--left` or `book-fold--right` on `<html>` for the duration of the transition.
- Sets `--theme-book-fold-duration` on `<html>` for the CSS animation.
- The old snapshot rotates in 3D (`rotateY`) to edge-on (`±90deg`) with `transform-origin` on the chosen edge; the new snapshot stays flat underneath.
- Override fold depth in CSS with `--theme-book-fold-perspective` (default `2000px`).
- Respects `prefers-reduced-motion: reduce` via CSS (animation disabled).

Your app owns theme logic (class names, `color-scheme`, CSS variables, etc.). This module only orchestrates the transition.
