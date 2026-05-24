import type { GuideCardData } from '@/types/guide';
import { name as PACKAGE_NAME } from '../../../view-transitions/package.json';
import { GITHUB_JS_THEME_ANIMATION_URL } from './app';
import { INSTALL_NAV_ITEM } from './navigation';

export const INSTALL_COMMAND = `npm install ${PACKAGE_NAME}`;

export const INSTALL_GUIDE_CARD: GuideCardData = {
  id: INSTALL_NAV_ITEM.id,
  title: INSTALL_NAV_ITEM.label,
  description:
    'Add the package to your project. It ships the animation helpers and companion CSS for the View Transitions API.',
  githubUrl: GITHUB_JS_THEME_ANIMATION_URL,
  snippets: [{ label: 'Terminal', code: INSTALL_COMMAND }],
};
