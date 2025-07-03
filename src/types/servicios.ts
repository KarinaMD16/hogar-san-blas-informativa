import type { Servicio } from "../models/servicios";

export type CardServicioProps = {
  servicio: Servicio;
  showMore: () => void;
  isSelected: boolean;
};

export type DescripcionServicioProps = {
  servicio: Servicio;
};