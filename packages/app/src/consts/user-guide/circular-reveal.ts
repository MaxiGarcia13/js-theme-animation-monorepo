import type { GuideCardData } from '@/types/guide';
import { name as PACKAGE_NAME } from '../../../../theme-transitions/package.json';
import { GITHUB_CIRCULAR_REVEAL_URL } from '../app';
import { CIRCULAR_REVEAL_GUIDE_NAV_ITEM } from '../navigation/user-guide';

export const CIRCULAR_REVEAL_SETUP_CSS = `@import '${PACKAGE_NAME}/circular-reveal.css';`;

export const CIRCULAR_REVEAL_USAGE = `import { onCircularRevealAnimation } from '${PACKAGE_NAME}';

button.addEventListener('click', (event) => {
  onCircularRevealAnimation(
    () => document.documentElement.classList.toggle('dark'),
    event,
  );
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
