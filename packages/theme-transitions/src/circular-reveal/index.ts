import { $html, $onTransitionEnd } from '../utils/index.js';

export interface ThemeRevealOrigin {
  clientX: number;
  clientY: number;
}

export interface CircularRevealOptions {
  /** Blur inside the expanding circle; clears as the reveal finishes. */
  blurCircle?: boolean;
  /** Blur radius when `blurCircle` is true. Defaults to `12px`. */
  blurAmount?: string;
}

export function onCircularRevealAnimation(
  apply: () => void,
  origin: ThemeRevealOrigin,
  options?: CircularRevealOptions,
): void {
  const x = (origin.clientX / window.innerWidth) * 100;
  const y = (origin.clientY / window.innerHeight) * 100;

  const html = $html();

  html.classList.add('circular-reveal');

  if (options?.blurCircle) {
    html.classList.add('circular-reveal--blur-circle');

    if (options.blurAmount) {
      html.style.setProperty('--theme-reveal-blur', options.blurAmount);
    }
  }

  html.style.setProperty('--theme-reveal-x', `${x}%`);
  html.style.setProperty('--theme-reveal-y', `${y}%`);

  if (!document.startViewTransition) {
    apply();
    return;
  }

  document.startViewTransition(apply);

  const animationComplete = () => {
    html.style.removeProperty('--theme-reveal-x');
    html.style.removeProperty('--theme-reveal-y');
    html.style.removeProperty('--theme-reveal-blur');

    html.classList.remove('circular-reveal', 'circular-reveal--blur-circle');
  };

  $onTransitionEnd(animationComplete, 600);
}
