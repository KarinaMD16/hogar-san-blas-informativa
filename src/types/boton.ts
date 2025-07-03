import type { JSX } from "react";

export type BotonProps = {
  children: JSX.Element;
    onClick?: () => void;
    where?: string;
};