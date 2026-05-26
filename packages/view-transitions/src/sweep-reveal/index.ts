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

interface DirectionConfig {
  /** Initial clip-path used when blur is disabled. */
  from: string;
  /** Final clip-path used when blur is disabled. */
  to: string;
  /** Linear-gradient direction used by the blurry-border mask. */
  angle: string;
}

const directions: Record<SweepDirection, DirectionConfig> = {
  'up': {
    from: 'inset(0 0 100% 0)',
    to: 'inset(0 0 0 0)',
    angle: 'to bottom',
  },
  'down': {
    from: 'inset(100% 0 0 0)',
    to: 'inset(0 0 0 0)',
    angle: 'to top',
  },
  'left': {
    from: 'inset(0 100% 0 0)',
    to: 'inset(0 0 0 0)',
    angle: 'to right',
  },
  'right': {
    from: 'inset(0 0 0 100%)',
    to: 'inset(0 0 0 0)',
    angle: 'to left',
  },
  'corner-top-left': {
    from: 'polygon(0% 0%, 0% 0%, 0% 0%)',
    to: 'polygon(0% 0%, 200% 0%, 0% 200%)',
    angle: 'to bottom right',
  },
  'corner-top-right': {
    from: 'polygon(100% 0%, 100% 0%, 100% 0%)',
    to: 'polygon(100% 0%, -100% 0%, 100% 200%)',
    angle: 'to bottom left',
  },
  'corner-bottom-left': {
    from: 'polygon(0% 100%, 0% 100%, 0% 100%)',
    to: 'polygon(0% 100%, 200% 100%, 0% -100%)',
    angle: 'to top right',
  },
  'corner-bottom-right': {
    from: 'polygon(100% 100%, 100% 100%, 100% 100%)',
    to: 'polygon(100% 100%, -100% 100%, 100% -100%)',
    angle: 'to top left',
  },
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

  const { from, to, angle } = directions[direction] ?? directions.up;

  html.style.setProperty('--theme-reveal-direction-from', from);
  html.style.setProperty('--theme-reveal-direction-to', to);
  html.style.setProperty('--theme-reveal-direction-angle', angle);

  const transition = document.startViewTransition(apply);

  const animationComplete = () => {
    html.classList.remove('sweep-reveal');
    html.style.removeProperty('--theme-reveal-direction-from');
    html.style.removeProperty('--theme-reveal-direction-to');
    html.style.removeProperty('--theme-reveal-direction-angle');

    removeOptions(html);
  };

  void transition.finished.finally(animationComplete);
}
