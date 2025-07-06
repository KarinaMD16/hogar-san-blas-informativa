import type { Servicio } from "../models/sections/servicios";

export type CardServicioProps = {
  servicio: Servicio;
  showMore: () => void;
  isSelected: boolean;
};

export type DescripcionServicioProps = {
  servicio: Servicio;
};