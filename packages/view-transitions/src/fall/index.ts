import type { Options } from '../utils/options.js';
import { $html } from '../utils/index.js';
import { removeOptions, setOptions } from '../utils/options.js';

export type FallOptions = Pick<Options, 'duration'>;

export function onFallAnimation(
  apply: () => void,
  options?: FallOptions,
): void {
  if (!document.startViewTransition) {
    apply();
    return;
  }

  const html = $html();

  html.classList.add('fall');

  setOptions(html, options);

  const transition = document.startViewTransition(apply);

  const animationComplete = () => {
    html.classList.remove('fall');

    removeOptions(html);
  };

  void transition.finished.finally(animationComplete);
}
