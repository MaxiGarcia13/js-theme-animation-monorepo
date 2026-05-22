export function toggleTheme(button: HTMLButtonElement) {
  const isDark = !document.documentElement.classList.contains('dark');

  document.documentElement.classList.toggle('dark', isDark);

  const moonIcon = button.querySelector<HTMLElement>(
    '[data-theme-icon="moon"] svg',
  );
  const sunIcon = button.querySelector<HTMLElement>(
    '[data-theme-icon="sun"] svg',
  );

  moonIcon?.classList.toggle('hidden', isDark);
  sunIcon?.classList.toggle('hidden', !isDark);
  moonIcon?.classList.toggle('block', !isDark);
  sunIcon?.classList.toggle('block', isDark);
}
