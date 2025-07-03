import type { Servicio } from "../models/servicios";

export type CardServicioProps = {
  servicio: Servicio;
  showMore: () => void;
};

export type DescripcionServicioProps = {
  servicio: Servicio;
};