export interface BotonProps {
  children: React.ReactNode;
  where?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  variant?: "filled" | "outline";
}