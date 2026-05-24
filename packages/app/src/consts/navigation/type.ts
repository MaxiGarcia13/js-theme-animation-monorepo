export interface AppNavItem {
  id: string;
  label: string;
  href: string;
  children?: readonly AppNavItem[];
};
