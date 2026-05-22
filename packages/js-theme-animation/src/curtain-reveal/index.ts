import { $html, $onTransitionEnd } from '../utils/index.js';

export function onCurtainRevealAnimation(
  apply: () => void,
): void {
  if (!document.startViewTransition) {
    apply();
    return;
  }
  const html = $html();
  html.classList.add('curtain-reveal');

  document.startViewTransition(apply);

  const animationEndListener = () => {
    html.classList.remove('curtain-reveal');
  };

  $onTransitionEnd(animationEndListener, 600);
}
