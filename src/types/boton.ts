import type { ReactNode } from "react";

export interface BotonProps {
  children: ReactNode;
  where?: string; // ahora opcional
  type?: "button" | "submit";
  onClick?: () => void;
}