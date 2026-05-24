import type { NavigationItem } from '@/types/navigation';
import { DEMOS_NAV_ITEM } from './demo';
import { INSTALL_NAV_ITEM } from './install';
import { USER_GUIDE_NAV_ITEM } from './user-guide';

export const NAVIGATION_ITEMS: readonly NavigationItem[] = [
  DEMOS_NAV_ITEM,
  INSTALL_NAV_ITEM,
  USER_GUIDE_NAV_ITEM,
] as const;

export { DEMOS_NAV_ITEM, INSTALL_NAV_ITEM, USER_GUIDE_NAV_ITEM };
