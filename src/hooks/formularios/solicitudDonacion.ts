import { useMutation } from "@tanstack/react-query";
import type { SolicitudDonacion, CrearSolicitudDonacionDto } from "../../models/formularios/solicitudDonacion";
import { postSolicitudDonacion } from "../../services/formularios/solicitudDonacion";

export const usePostSolicitudDonacion = () => {
  return useMutation<SolicitudDonacion, Error, CrearSolicitudDonacionDto>({
    mutationFn: postSolicitudDonacion,
  });
};