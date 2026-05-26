import type { Options } from '../utils/options.js';
import { $html } from '../utils/index.js';
import { removeOptions, setOptions } from '../utils/options.js';

export interface ThemeRevealOrigin {
  clientX: number;
  clientY: number;
}

export type CircularRevealOptions = Options;

export function onCircularRevealAnimation(
  apply: () => void,
  origin: ThemeRevealOrigin,
  options?: CircularRevealOptions,
): void {
  if (!document.startViewTransition) {
    apply();
    return;
  }

  const x = (origin.clientX / window.innerWidth) * 100;
  const y = (origin.clientY / window.innerHeight) * 100;

  const html = $html();

  html.classList.add('circular-reveal');

  setOptions(html, options);

  html.style.setProperty('--theme-reveal-x', `${x}%`);
  html.style.setProperty('--theme-reveal-y', `${y}%`);

  const transition = document.startViewTransition(apply);

  const animationComplete = () => {
    html.classList.remove('circular-reveal');
    html.style.removeProperty('--theme-reveal-x');
    html.style.removeProperty('--theme-reveal-y');

    removeOptions(html);
  };

  void transition.finished.finally(animationComplete);
}
