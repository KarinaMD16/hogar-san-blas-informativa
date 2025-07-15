import type { ReactNode } from "react";

export interface ContactosSectionProps {
  title: string;
  items: string[];
  icons: ReactNode[];
}

export interface ContactosProps {
  className?: string;
}