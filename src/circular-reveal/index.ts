export function revealThemeChange(
  applyThemeChange: () => void,
  click: MouseEvent,
): void {
  const x = (click.clientX / window.innerWidth) * 100;
  const y = (click.clientY / window.innerHeight) * 100;

  document.documentElement.style.setProperty('--theme-reveal-x', `${x}%`);
  document.documentElement.style.setProperty('--theme-reveal-y', `${y}%`);

  if (!document.startViewTransition) {
    applyThemeChange();
    return;
  }

  document.startViewTransition(applyThemeChange);
}
