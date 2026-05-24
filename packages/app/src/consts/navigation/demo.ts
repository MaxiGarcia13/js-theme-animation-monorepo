import type { AppNavItem } from './type';

export const CIRCULAR_REVEAL_DEMO_NAV_ITEM: AppNavItem = {
  id: 'circular-reveal-demo',
  label: 'Circular reveal',
  href: '#circular-reveal-demo',
} as const;

export const SWEEP_REVEAL_DEMO_NAV_ITEM: AppNavItem = {
  id: 'sweep-reveal-demo',
  label: 'Sweep reveal',
  href: '#sweep-reveal-demo',
} as const;

export const DEMOS_NAV_ITEM: AppNavItem = {
  id: 'live-demos',
  label: 'Live demos',
  href: '#live-demos',
  children: [
    CIRCULAR_REVEAL_DEMO_NAV_ITEM,
    SWEEP_REVEAL_DEMO_NAV_ITEM,
  ],
} as const;
