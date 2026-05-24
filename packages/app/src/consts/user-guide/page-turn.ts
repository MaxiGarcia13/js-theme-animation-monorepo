import type { GuideCardData } from '@/types/guide';
import { name as PACKAGE_NAME } from '../../../../view-transitions/package.json';
import { GITHUB_PAGE_TURN_URL } from '../app';
import { PAGE_TURN_GUIDE_NAV_ITEM } from '../navigation/user-guide';

export const PAGE_TURN_SETUP_CSS = `@import '${PACKAGE_NAME}/page-turn.css';`;

export const PAGE_TURN_USAGE = `import { onPageTurnAnimation } from '${PACKAGE_NAME}';

button.addEventListener('click', () => {
  onPageTurnAnimation(() => window.history.pushState(null, '', '/#page-1'));
});`;

export const PAGE_TURN_GUIDE_CARD: GuideCardData = {
  id: PAGE_TURN_GUIDE_NAV_ITEM.id,
  title: PAGE_TURN_GUIDE_NAV_ITEM.label,
  description:
    'Call onPageTurnAnimation with a callback that toggles the `dark` class. The previous appearance turns away like a book page, revealing the updated appearance underneath.',
  githubUrl: GITHUB_PAGE_TURN_URL,
  snippets: [
    { label: 'CSS', code: PAGE_TURN_SETUP_CSS },
    { label: 'JavaScript', code: PAGE_TURN_USAGE },
  ],
};
