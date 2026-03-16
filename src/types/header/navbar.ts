import type { MouseEvent } from "react";

export type NavItemUI = {
  label: string;
  links: { texto: string; ruta: string }[];
};

type NavLinkClickHandler = (
  event: MouseEvent<HTMLAnchorElement>,
  ruta: string
) => void;

export type DropdownItemProps = {
  item: NavItemUI;
  idx: number;
  isOpen: boolean;
  setOpen: (idx: number | null) => void;
  onLinkClick: NavLinkClickHandler;
};

export type MobileMenuProps = {
  navItems: NavItemUI[];
  setMobileMenuOpen: (open: boolean) => void;
  onLinkClick: NavLinkClickHandler;
};