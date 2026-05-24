import { $html } from '../utils/index.js';

export type SweepDirection
  = 'up'
    | 'down'
    | 'left'
    | 'right'
    | 'corner-top-left'
    | 'corner-top-right'
    | 'corner-bottom-left'
    | 'corner-bottom-right';

export function onSweepRevealAnimation(
  apply: () => void,
  direction: SweepDirection = 'up',
): void {
  if (!document.startViewTransition) {
    apply();
    return;
  }
  const html = $html();

  const directions = {
    'up': ['inset(0 0 100% 0)', 'inset(0 0 0 0)'],
    'down': ['inset(100% 0 0 0)', 'inset(0 0 0 0)'],
    'left': ['inset(0 100% 0 0)', 'inset(0 0 0 0)'],
    'right': ['inset(0 0 0 100%)', 'inset(0 0 0 0)'],
    'corner-top-left': ['inset(0 100% 100% 0)', 'inset(0 0 0 0)'],
    'corner-top-right': ['inset(0 0 100% 100%)', 'inset(0 0 0 0)'],
    'corner-bottom-left': ['inset(100% 100% 0 0)', 'inset(0 0 0 0)'],
    'corner-bottom-right': ['inset(100% 0 0 100%)', 'inset(0 0 0 0)'],
  };

  const [directionFrom, directionTo] = directions[direction] ?? directions.up;

  html.classList.add('sweep-reveal');

  html.style.setProperty('--theme-reveal-direction-from', directionFrom);
  html.style.setProperty('--theme-reveal-direction-to', directionTo);

  const transition = document.startViewTransition(apply);

  const animationComplete = () => {
    html.classList.remove('sweep-reveal');
    html.style.removeProperty('--theme-reveal-direction-from');
    html.style.removeProperty('--theme-reveal-direction-to');
  };

  void transition.finished.finally(animationComplete);
}
