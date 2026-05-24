import { BOOK_FOLD_GUIDE_CARD } from './book-fold';
import { CIRCULAR_REVEAL_GUIDE_CARD } from './circular-reveal';
import { FALL_GUIDE_CARD } from './fall';
import { SWEEP_REVEAL_GUIDE_CARD } from './sweep-reveal';

export { BOOK_FOLD_GUIDE_CARD } from './book-fold';
export { CIRCULAR_REVEAL_GUIDE_CARD } from './circular-reveal';
export { FALL_GUIDE_CARD } from './fall';
export { SWEEP_REVEAL_GUIDE_CARD } from './sweep-reveal';

export const USER_GUIDE_CARDS = [
  CIRCULAR_REVEAL_GUIDE_CARD,
  SWEEP_REVEAL_GUIDE_CARD,
  FALL_GUIDE_CARD,
  BOOK_FOLD_GUIDE_CARD,
] as const;
