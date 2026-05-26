import type { Options } from '../utils/options.js';
import { $html } from '../utils/index.js';
import { removeOptions, setOptions } from '../utils/options.js';

export type SweepDirection
  = 'up'
    | 'down'
    | 'left'
    | 'right'
    | 'corner-top-left'
    | 'corner-top-right'
    | 'corner-bottom-left'
    | 'corner-bottom-right';

export type SweepRevealOptions = Options;

const directions = {
  'up': ['inset(0 0 100% 0)', 'inset(0 0 0 0)'],
  'down': ['inset(100% 0 0 0)', 'inset(0 0 0 0)'],
  'left': ['inset(0 100% 0 0)', 'inset(0 0 0 0)'],
  'right': ['inset(0 0 0 100%)', 'inset(0 0 0 0)'],
  'corner-top-left': [
    'polygon(0% 0%, 0% 0%, 0% 0%)',
    'polygon(0% 0%, 200% 0%, 0% 200%)',
  ],
  'corner-top-right': [
    'polygon(100% 0%, 100% 0%, 100% 0%)',
    'polygon(100% 0%, -100% 0%, 100% 200%)',
  ],
  'corner-bottom-left': [
    'polygon(0% 100%, 0% 100%, 0% 100%)',
    'polygon(0% 100%, 200% 100%, 0% -100%)',
  ],
  'corner-bottom-right': [
    'polygon(100% 100%, 100% 100%, 100% 100%)',
    'polygon(100% 100%, -100% 100%, 100% -100%)',
  ],
};

export function onSweepRevealAnimation(
  apply: () => void,
  direction: SweepDirection = 'up',
  options?: SweepRevealOptions,
): void {
  if (!document.startViewTransition) {
    apply();
    return;
  }
  const html = $html();

  html.classList.add('sweep-reveal');

  setOptions(html, options);

  const [directionFrom, directionTo] = directions[direction] ?? directions.up;

  html.style.setProperty('--theme-reveal-direction-from', directionFrom);
  html.style.setProperty('--theme-reveal-direction-to', directionTo);

  const transition = document.startViewTransition(apply);

  const animationComplete = () => {
    html.classList.remove('sweep-reveal');
    html.style.removeProperty('--theme-reveal-direction-from');
    html.style.removeProperty('--theme-reveal-direction-to');

    removeOptions(html);
  };

  void transition.finished.finally(animationComplete);
}
