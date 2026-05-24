import { $html } from '../utils/index.js';

export interface FallOptions {
  /** Fall duration in milliseconds. Defaults to `700`. */
  duration?: number;
}

export function onFallAnimation(
  apply: () => void,
  options?: FallOptions,
): void {
  if (!document.startViewTransition) {
    apply();
    return;
  }

  const duration = options?.duration ?? 700;
  const html = $html();

  html.classList.add('fall');

  html.style.setProperty('--theme-fall-duration', `${duration}ms`);

  const transition = document.startViewTransition(apply);

  const animationComplete = () => {
    html.classList.remove('fall');
    html.style.removeProperty('--theme-fall-duration');
  };

  void transition.finished.finally(animationComplete);
}
