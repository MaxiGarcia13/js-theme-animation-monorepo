import type { GuideCardData } from '@/types/guide';
import { name as PACKAGE_NAME } from '../../../../view-transitions/package.json';
import { GITHUB_SWEEP_REVEAL_URL } from '../app';
import { SWEEP_REVEAL_GUIDE_NAV_ITEM } from '../navigation/user-guide';

export const SWEEP_REVEAL_SETUP_CSS = `@import '${PACKAGE_NAME}/sweep-reveal.css';`;

export const SWEEP_REVEAL_USAGE = `import { onSweepRevealAnimation } from '${PACKAGE_NAME}';

button.addEventListener('click', () => {
  onSweepRevealAnimation(
    () => document.documentElement.classList.toggle('dark'),
    'up',
  );
});`;

export const SWEEP_REVEAL_GUIDE_CARD: GuideCardData = {
  id: SWEEP_REVEAL_GUIDE_NAV_ITEM.id,
  title: SWEEP_REVEAL_GUIDE_NAV_ITEM.label,
  description:
    'Wrap your theme toggle with onSweepRevealAnimation. Pick a sweep direction so the new theme slides in from an edge or corner.',
  githubUrl: GITHUB_SWEEP_REVEAL_URL,
  snippets: [
    { label: 'CSS', code: SWEEP_REVEAL_SETUP_CSS },
    { label: 'JavaScript', code: SWEEP_REVEAL_USAGE },
  ],
};
