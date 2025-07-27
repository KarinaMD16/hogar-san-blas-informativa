import sidnamAPI from "../../api/apiConfig";
import type { CrearSolicitudPendienteDto, SolicitudPendiente } from "../../models/formularios/solicitudVoluntario";

export const postSolicitudPendiente = async (data: CrearSolicitudPendienteDto): Promise<SolicitudPendiente> => {
  const response = await sidnamAPI.post<SolicitudPendiente>("/voluntariado/crearSolicitudPendiente", data);
  return response.data;
};