import type { MouseEvent } from 'react';

export interface BotonProps {
  children: React.ReactNode;
  where?: string;
  type?: "button" | "submit" | "reset";
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void | Promise<void>;
  variant?: "filled" | "outline";
  disabled?: boolean;
}