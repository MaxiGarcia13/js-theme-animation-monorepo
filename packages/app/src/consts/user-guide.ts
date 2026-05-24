import type { GuideCardData } from '@/types/guide';
import { name as PACKAGE_NAME } from '../../../theme-transitions/package.json';
import {
  GITHUB_CIRCULAR_REVEAL_URL,
  GITHUB_FALL_URL,
  GITHUB_SWEEP_REVEAL_URL,
} from './app';
import {
  CIRCULAR_REVEAL_GUIDE_NAV_ITEM,
  FALL_GUIDE_NAV_ITEM,
  SWEEP_REVEAL_GUIDE_NAV_ITEM,
} from './navigation/user-guide';

export const CIRCULAR_REVEAL_SETUP_CSS = `@import '${PACKAGE_NAME}/circular-reveal.css';`;

export const SWEEP_REVEAL_SETUP_CSS = `@import '${PACKAGE_NAME}/sweep-reveal.css';`;

export const FALL_SETUP_CSS = `@import '${PACKAGE_NAME}/fall.css';`;

export const CIRCULAR_REVEAL_USAGE = `import { onCircularRevealAnimation } from '${PACKAGE_NAME}';

button.addEventListener('click', (event) => {
  onCircularRevealAnimation(
    () => document.documentElement.classList.toggle('dark'),
    event,
  );
});`;

export const SWEEP_REVEAL_USAGE = `import { onSweepRevealAnimation } from '${PACKAGE_NAME}';

button.addEventListener('click', () => {
  onSweepRevealAnimation(
    () => document.documentElement.classList.toggle('dark'),
    'up',
  );
});`;

export const FALL_USAGE = `import { onFallAnimation } from '${PACKAGE_NAME}';

button.addEventListener('click', () => {
  onFallAnimation(() => document.documentElement.classList.toggle('dark'));
});`;

export const CIRCULAR_REVEAL_GUIDE_CARD: GuideCardData = {
  id: CIRCULAR_REVEAL_GUIDE_NAV_ITEM.id,
  title: CIRCULAR_REVEAL_GUIDE_NAV_ITEM.label,
  description:
    'Wrap your theme toggle with onCircularRevealAnimation. Pass the click event so a radial clip-path expands from the pointer and reveals the new theme.',
  githubUrl: GITHUB_CIRCULAR_REVEAL_URL,
  snippets: [
    { label: 'CSS', code: CIRCULAR_REVEAL_SETUP_CSS },
    { label: 'JavaScript', code: CIRCULAR_REVEAL_USAGE },
  ],
};

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

export const FALL_GUIDE_CARD: GuideCardData = {
  id: FALL_GUIDE_NAV_ITEM.id,
  title: FALL_GUIDE_NAV_ITEM.label,
  description:
    'Wrap your theme toggle with onFallAnimation. The old theme drops off the bottom edge while the new theme appears underneath.',
  githubUrl: GITHUB_FALL_URL,
  snippets: [
    { label: 'CSS', code: FALL_SETUP_CSS },
    { label: 'JavaScript', code: FALL_USAGE },
  ],
};

export const USER_GUIDE_CARDS = [
  CIRCULAR_REVEAL_GUIDE_CARD,
  SWEEP_REVEAL_GUIDE_CARD,
  FALL_GUIDE_CARD,
] as const;
