import type { GuideCardData } from '@/types/guide';
import { name as PACKAGE_NAME } from '../../../../view-transitions/package.json';
import { GITHUB_PAGE_TURN_URL } from '../app';
import { PAGE_TURN_GUIDE_NAV_ITEM } from '../navigation/user-guide';

export const PAGE_TURN_SETUP_CSS = `@import '${PACKAGE_NAME}/page-turn.css';`;

export const PAGE_TURN_USAGE = `import { onPageTurnAnimation } from '${PACKAGE_NAME}';

button.addEventListener('click', () => {
  onPageTurnAnimation(() => document.documentElement.classList.toggle('dark'));
});`;

export const PAGE_TURN_GUIDE_CARD: GuideCardData = {
  id: PAGE_TURN_GUIDE_NAV_ITEM.id,
  title: PAGE_TURN_GUIDE_NAV_ITEM.label,
  description:
    'Wrap your theme toggle with onPageTurnAnimation. The old theme turns away like a book page, revealing the new theme underneath.',
  githubUrl: GITHUB_PAGE_TURN_URL,
  snippets: [
    { label: 'CSS', code: PAGE_TURN_SETUP_CSS },
    { label: 'JavaScript', code: PAGE_TURN_USAGE },
  ],
};
