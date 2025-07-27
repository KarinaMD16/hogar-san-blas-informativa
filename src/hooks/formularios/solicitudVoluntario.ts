import { useMutation } from "@tanstack/react-query";
import type { CrearSolicitudPendienteDto, SolicitudPendiente } from "../../models/formularios/solicitudVoluntario";
import { postSolicitudPendiente } from "../../services/formularios/solicitudVoluntario";

export const usePostSolicitudVoluntario = () => {
  return useMutation<SolicitudPendiente, Error, CrearSolicitudPendienteDto>({
    mutationFn: postSolicitudPendiente,
  });
};