import type { NavigationItem } from '@/types/navigation';

export const CIRCULAR_REVEAL_DEMO_NAV_ITEM: NavigationItem = {
  id: 'circular-reveal-demo',
  label: 'Circular reveal',
  href: '#circular-reveal-demo',
} as const;

export const SWEEP_REVEAL_DEMO_NAV_ITEM: NavigationItem = {
  id: 'sweep-reveal-demo',
  label: 'Sweep reveal',
  href: '#sweep-reveal-demo',
} as const;

export const FALL_DEMO_NAV_ITEM: NavigationItem = {
  id: 'fall-demo',
  label: 'Fall',
  href: '#fall-demo',
} as const;

export const PAGE_TURN_DEMO_NAV_ITEM: NavigationItem = {
  id: 'page-turn-demo',
  label: 'Page turn',
  href: '#page-turn-demo',
} as const;

export const DEMOS_NAV_ITEM: NavigationItem = {
  id: 'live-demos',
  label: 'Live demos',
  href: '#live-demos',
  children: [
    CIRCULAR_REVEAL_DEMO_NAV_ITEM,
    SWEEP_REVEAL_DEMO_NAV_ITEM,
    FALL_DEMO_NAV_ITEM,
    PAGE_TURN_DEMO_NAV_ITEM,
  ],
} as const;
