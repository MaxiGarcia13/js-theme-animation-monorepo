import { $html, $onTransitionEnd } from '../utils/index.js';

export function onCurtainRevealAnimation(
  apply: () => void,
  direction: 'up' | 'down' | 'left' | 'right' = 'up',
): void {
  if (!document.startViewTransition) {
    apply();
    return;
  }
  const html = $html();

  const directions = {
    up: ['inset(0 0 100% 0)', 'inset(0 0 0 0)'],
    down: ['inset(0 0 0 0)', 'inset(0 0 100% 0)'],
    left: ['inset(0 100% 0 0)', 'inset(0 0 0 100%)'],
    right: ['inset(0 0 0 100%)', 'inset(0 100% 0 0)'],
  };

  const [directionFrom, directionTo] = directions[direction] ?? directions.up;

  html.classList.add('curtain-reveal');

  html.style.setProperty('--theme-reveal-direction-from', directionFrom);
  html.style.setProperty('--theme-reveal-direction-to', directionTo);

  document.startViewTransition(apply);

  const animationComplete = () => {
    html.classList.remove('curtain-reveal');
    html.style.removeProperty('--theme-reveal-direction');
  };

  $onTransitionEnd(animationComplete, 600);
}
