import type { NavigationItem } from '@/types/navigation';

export const CIRCULAR_REVEAL_GUIDE_NAV_ITEM: NavigationItem = {
  id: 'circular-reveal-guide',
  label: 'Circular reveal',
  href: '#circular-reveal-guide',
} as const;

export const SWEEP_REVEAL_GUIDE_NAV_ITEM: NavigationItem = {
  id: 'sweep-reveal-guide',
  label: 'Sweep reveal',
  href: '#sweep-reveal-guide',
} as const;

export const FALL_GUIDE_NAV_ITEM: NavigationItem = {
  id: 'fall-guide',
  label: 'Fall',
  href: '#fall-guide',
} as const;

export const USER_GUIDE_NAV_ITEM: NavigationItem = {
  id: 'user-guide',
  label: 'User Guide',
  href: '#user-guide',
  children: [
    CIRCULAR_REVEAL_GUIDE_NAV_ITEM,
    SWEEP_REVEAL_GUIDE_NAV_ITEM,
    FALL_GUIDE_NAV_ITEM,
  ],
} as const;
