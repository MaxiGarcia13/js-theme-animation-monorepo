import { $html } from '../utils/index.js';

export type BookFoldEdge = 'left' | 'right';

export interface BookFoldOptions {
  /** Fold duration in milliseconds. Defaults to `750`. */
  duration?: number;
  /** Edge the page pivots on. Defaults to `left`. */
  edge?: BookFoldEdge;
}

export function onBookFoldAnimation(
  apply: () => void,
  options?: BookFoldOptions,
): void {
  if (!document.startViewTransition) {
    apply();
    return;
  }

  const duration = options?.duration ?? 750;
  const edge = options?.edge ?? 'left';
  const html = $html();

  html.classList.add('book-fold', `book-fold--${edge}`);
  html.style.setProperty('--theme-book-fold-duration', `${duration}ms`);

  const transition = document.startViewTransition(apply);

  const animationComplete = () => {
    html.classList.remove('book-fold', `book-fold--${edge}`);
    html.style.removeProperty('--theme-book-fold-duration');
  };

  void transition.finished.finally(animationComplete);
}
