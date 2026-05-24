import type { GuideCardData } from '@/types/guide';
import { name as PACKAGE_NAME } from '../../../../view-transitions/package.json';
import { GITHUB_FALL_URL } from '../app';
import { FALL_GUIDE_NAV_ITEM } from '../navigation/user-guide';

export const FALL_SETUP_CSS = `@import '${PACKAGE_NAME}/fall.css';`;

export const FALL_USAGE = `import { onFallAnimation } from '${PACKAGE_NAME}';

button.addEventListener('click', () => {
  onFallAnimation(() => document.documentElement.classList.toggle('dark'));
});`;

export const FALL_GUIDE_CARD: GuideCardData = {
  id: FALL_GUIDE_NAV_ITEM.id,
  title: FALL_GUIDE_NAV_ITEM.label,
  description:
    'Call onFallAnimation with a callback that toggles the `dark` class. The previous appearance drops off the bottom edge while the updated appearance appears underneath.',
  githubUrl: GITHUB_FALL_URL,
  snippets: [
    { label: 'CSS', code: FALL_SETUP_CSS },
    { label: 'JavaScript', code: FALL_USAGE },
  ],
};
