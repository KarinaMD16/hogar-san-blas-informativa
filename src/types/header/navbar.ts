export type NavItemUI = {
  label: string;
  links: { texto: string; ruta: string }[];
};

export type DropdownItemProps = {
  item: NavItemUI;
  idx: number;
  isOpen: boolean;
  setOpen: (idx: number | null) => void;
};

export type MobileMenuProps = {
  navItems: NavItemUI[];
  setMobileMenuOpen: (open: boolean) => void;
};