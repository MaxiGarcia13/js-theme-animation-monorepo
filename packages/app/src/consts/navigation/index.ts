import type { AppNavItem } from './type';
import { DEMOS_NAV_ITEM } from './demo';
import { INSTALL_NAV_ITEM } from './install';
import { USER_GUIDE_NAV_ITEM } from './user-guide';

export const APP_NAV_ITEMS: readonly AppNavItem[] = [
  DEMOS_NAV_ITEM,
  INSTALL_NAV_ITEM,
  USER_GUIDE_NAV_ITEM,
] as const;

export type { AppNavItem };
export { DEMOS_NAV_ITEM, INSTALL_NAV_ITEM, USER_GUIDE_NAV_ITEM };
