import type { ReactNode } from "react";

export interface BotonGaleriaProps {
  children: ReactNode;
  isActive: boolean
  toggleCategoria: () => void;
}