import type { ReactNode } from "react";
import type { Galeria } from "../../models/galeria/galeria";

export interface BotonGaleriaProps {
  children: ReactNode;
  isActive: boolean
  toggleCategoria: () => void;
  ariaLabel?: string;
}
export interface CardGaleriaProps {
  imagenes: Galeria,
  toggleModal: (imagen: Galeria) => void;
}
export interface ModalImagenGaleriaProps {
  imagen: { imagenUrl: string; descripcion?: string } | null;
  open: boolean;
  onClose: () => void;
};
