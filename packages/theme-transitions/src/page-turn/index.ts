import { $html } from '../utils/index.js';

export type PageTurnEdge = 'left' | 'right';

export interface PageTurnOptions {
  /** Page turn duration in milliseconds. Defaults to `750`. */
  duration?: number;
  /** Edge the page pivots on. Defaults to `left`. */
  edge?: PageTurnEdge;
}

export function onPageTurnAnimation(
  apply: () => void,
  options?: PageTurnOptions,
): void {
  if (!document.startViewTransition) {
    apply();
    return;
  }

  const duration = options?.duration ?? 750;
  const edge = options?.edge ?? 'left';
  const html = $html();

  html.classList.add('page-turn', `page-turn--${edge}`);
  html.style.setProperty('--theme-page-turn-duration', `${duration}ms`);

  const transition = document.startViewTransition(apply);

  const animationComplete = () => {
    html.classList.remove('page-turn', `page-turn--${edge}`);
    html.style.removeProperty('--theme-page-turn-duration');
  };

  void transition.finished.finally(animationComplete);
}
