import type { GuideCardData } from '@/types/guide';
import { name as PACKAGE_NAME } from '../../../../theme-transitions/package.json';
import { GITHUB_BOOK_FOLD_URL } from '../app';
import { BOOK_FOLD_GUIDE_NAV_ITEM } from '../navigation/user-guide';

export const BOOK_FOLD_SETUP_CSS = `@import '${PACKAGE_NAME}/book-fold.css';`;

export const BOOK_FOLD_USAGE = `import { onBookFoldAnimation } from '${PACKAGE_NAME}';

button.addEventListener('click', () => {
  onBookFoldAnimation(() => document.documentElement.classList.toggle('dark'));
});`;

export const BOOK_FOLD_GUIDE_CARD: GuideCardData = {
  id: BOOK_FOLD_GUIDE_NAV_ITEM.id,
  title: BOOK_FOLD_GUIDE_NAV_ITEM.label,
  description:
    'Wrap your theme toggle with onBookFoldAnimation. The old theme turns away like a page, revealing the new theme underneath.',
  githubUrl: GITHUB_BOOK_FOLD_URL,
  snippets: [
    { label: 'CSS', code: BOOK_FOLD_SETUP_CSS },
    { label: 'JavaScript', code: BOOK_FOLD_USAGE },
  ],
};
