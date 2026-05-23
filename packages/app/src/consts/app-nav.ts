export interface AppNavItem {
  id: string;
  label: string;
  href: string;
  children?: readonly AppNavItem[];
};

export const DEMOS_NAV_ITEM: AppNavItem = {
  id: 'animation-demos',
  label: 'Animation demos',
  href: '#animation-demos',
} as const;

export const INSTALL_NAV_ITEM: AppNavItem = {
  id: 'install',
  label: 'Install',
  href: '#install',
} as const;

export const USER_GUIDE_NAV_ITEM: AppNavItem = {
  id: 'user-guide',
  label: 'User Guide',
  href: '#user-guide',
} as const;

export const APP_NAV_ITEMS: readonly AppNavItem[] = [
  DEMOS_NAV_ITEM,
  INSTALL_NAV_ITEM,
  USER_GUIDE_NAV_ITEM,
] as const;
