import type { GuideCardData } from './guide';
import { name as PACKAGE_NAME } from '../../../theme-transitions/package.json';
import {
  GITHUB_CIRCULAR_REVEAL_URL,
  GITHUB_SWEEP_REVEAL_URL,
} from './app';

export const circularRevealSetupCss = `@import '${PACKAGE_NAME}/circular-reveal/index.css';`;

export const sweepRevealSetupCss = `@import '${PACKAGE_NAME}/sweep-reveal/index.css';`;

export const circularRevealUsage = `import { onCircularRevealAnimation } from '${PACKAGE_NAME}';

button.addEventListener('click', (event) => {
  onCircularRevealAnimation(
    () => document.documentElement.classList.toggle('dark'),
    event,
  );
});`;

export const sweepRevealUsage = `import { onSweepRevealAnimation } from '${PACKAGE_NAME}';

button.addEventListener('click', () => {
  onSweepRevealAnimation(
    () => document.documentElement.classList.toggle('dark'),
    'up',
  );
});`;

export const circularRevealGuideCard: GuideCardData = {
  title: 'Circular reveal',
  description:
    'Wrap your theme toggle with onCircularRevealAnimation. Pass the click event so a radial clip-path expands from the pointer and reveals the new theme.',
  githubUrl: GITHUB_CIRCULAR_REVEAL_URL,
  snippets: [
    { label: 'CSS', code: circularRevealSetupCss },
    { label: 'JavaScript', code: circularRevealUsage },
  ],
};

export const sweepRevealGuideCard: GuideCardData = {
  title: 'Sweep reveal',
  description:
    'Wrap your theme toggle with onSweepRevealAnimation. Pick a sweep direction so the new theme slides in from an edge or corner.',
  githubUrl: GITHUB_SWEEP_REVEAL_URL,
  snippets: [
    { label: 'CSS', code: sweepRevealSetupCss },
    { label: 'JavaScript', code: sweepRevealUsage },
  ],
};

export const userGuideCards = [
  circularRevealGuideCard,
  sweepRevealGuideCard,
] as const;
