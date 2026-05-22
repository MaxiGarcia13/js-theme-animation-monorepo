import { name as PACKAGE_NAME } from '../../../js-theme-animation/package.json';
import {
  GITHUB_CIRCULAR_REVEAL_URL,
  GITHUB_JS_THEME_ANIMATION_URL,
  GITHUB_SWEEP_REVEAL_URL,
} from './app';

export interface GuideSnippet {
  label: string;
  code: string;
}

export interface UsageGuideCardData {
  title: string;
  description: string;
  githubUrl: string;
  snippets: GuideSnippet[];
}

export const installCommand = `npm install ${PACKAGE_NAME}`;

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

export const installGuideCard: UsageGuideCardData = {
  title: 'Install',
  description:
    'Add the package to your project. It ships the animation helpers and companion CSS for the View Transitions API.',
  githubUrl: GITHUB_JS_THEME_ANIMATION_URL,
  snippets: [{ label: 'Terminal', code: installCommand }],
};

export const circularRevealGuideCard: UsageGuideCardData = {
  title: 'Circular reveal',
  description:
    'Wrap your theme toggle with onCircularRevealAnimation. Pass the click event so a radial clip-path expands from the pointer and reveals the new theme.',
  githubUrl: GITHUB_CIRCULAR_REVEAL_URL,
  snippets: [
    { label: 'CSS', code: circularRevealSetupCss },
    { label: 'JavaScript', code: circularRevealUsage },
  ],
};

export const sweepRevealGuideCard: UsageGuideCardData = {
  title: 'Sweep reveal',
  description:
    'Wrap your theme toggle with onSweepRevealAnimation. Pick a sweep direction so the new theme slides in from an edge or corner.',
  githubUrl: GITHUB_SWEEP_REVEAL_URL,
  snippets: [
    { label: 'CSS', code: sweepRevealSetupCss },
    { label: 'JavaScript', code: sweepRevealUsage },
  ],
};

export const usageGuideCards = [
  circularRevealGuideCard,
  sweepRevealGuideCard,
] as const;
