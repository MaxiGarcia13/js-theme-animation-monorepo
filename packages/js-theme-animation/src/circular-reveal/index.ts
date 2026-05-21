export interface ThemeRevealOrigin {
  clientX: number;
  clientY: number;
}

export function circularRevealChange(
  apply: () => void,
  click: ThemeRevealOrigin,
): void {
  const x = (click.clientX / window.innerWidth) * 100;
  const y = (click.clientY / window.innerHeight) * 100;

  document.documentElement.style.setProperty('--theme-reveal-x', `${x}%`);
  document.documentElement.style.setProperty('--theme-reveal-y', `${y}%`);

  if (!document.startViewTransition) {
    apply();
    return;
  }

  document.startViewTransition(apply);
}
