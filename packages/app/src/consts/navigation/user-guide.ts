import type { AppNavItem } from './type';

export const CIRCULAR_REVEAL_GUIDE_NAV_ITEM: AppNavItem = {
  id: 'circular-reveal-guide',
  label: 'Circular reveal',
  href: '#circular-reveal-guide',
} as const;

export const SWEEP_REVEAL_GUIDE_NAV_ITEM: AppNavItem = {
  id: 'sweep-reveal-guide',
  label: 'Sweep reveal',
  href: '#sweep-reveal-guide',
} as const;

export const USER_GUIDE_NAV_ITEM: AppNavItem = {
  id: 'user-guide',
  label: 'User Guide',
  href: '#user-guide',
  children: [
    CIRCULAR_REVEAL_GUIDE_NAV_ITEM,
    SWEEP_REVEAL_GUIDE_NAV_ITEM,
  ],
} as const;
