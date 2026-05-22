import { $html, $onTransitionEnd } from '../utils/index.js';

export interface ThemeRevealOrigin {
  clientX: number;
  clientY: number;
}

export function onCircularRevealAnimation(
  apply: () => void,
  click: ThemeRevealOrigin,
): void {
  const x = (click.clientX / window.innerWidth) * 100;
  const y = (click.clientY / window.innerHeight) * 100;

  const html = $html();

  html.classList.add('circular-reveal');

  html.style.setProperty('--theme-reveal-x', `${x}%`);
  html.style.setProperty('--theme-reveal-y', `${y}%`);

  if (!document.startViewTransition) {
    apply();
    return;
  }

  document.startViewTransition(apply);

  const animationEndListener = () => {
    html.style.removeProperty('--theme-reveal-x');
    html.style.removeProperty('--theme-reveal-y');

    html.classList.remove('circular-reveal');
  };

  $onTransitionEnd(animationEndListener, 600);
}
