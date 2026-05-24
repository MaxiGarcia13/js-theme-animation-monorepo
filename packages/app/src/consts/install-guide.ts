import type { GuideCardData } from './guide';
import { name as PACKAGE_NAME } from '../../../theme-transitions/package.json';
import { GITHUB_JS_THEME_ANIMATION_URL } from './app';
import { INSTALL_NAV_ITEM } from './navigation';

export const installCommand = `npm install ${PACKAGE_NAME}`;

export const installGuideCard: GuideCardData = {
  id: INSTALL_NAV_ITEM.id,
  title: INSTALL_NAV_ITEM.label,
  description:
    'Add the package to your project. It ships the animation helpers and companion CSS for the View Transitions API.',
  githubUrl: GITHUB_JS_THEME_ANIMATION_URL,
  snippets: [{ label: 'Terminal', code: installCommand }],
};
