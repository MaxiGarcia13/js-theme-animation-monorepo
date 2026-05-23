import type { GuideCardData } from './guide';
import { name as PACKAGE_NAME } from '../../../theme-transitions/package.json';
import { GITHUB_JS_THEME_ANIMATION_URL } from './app';

export const installCommand = `npm install ${PACKAGE_NAME}`;

export const installGuideCard: GuideCardData = {
  title: 'Install',
  description:
    'Add the package to your project. It ships the animation helpers and companion CSS for the View Transitions API.',
  githubUrl: GITHUB_JS_THEME_ANIMATION_URL,
  snippets: [{ label: 'Terminal', code: installCommand }],
};
