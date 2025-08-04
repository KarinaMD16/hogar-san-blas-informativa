import sidnamAPI from "../../api/apiConfig";
import type { CrearSolicitudDonacionDto, SolicitudDonacion } from "../../models/formularios/solicitudDonacion";
import { donacionesRuta } from "../apiRutas";

export const postSolicitudDonacion = async (data: CrearSolicitudDonacionDto): Promise<SolicitudDonacion> => {
  const response = await sidnamAPI.post<SolicitudDonacion>( `${donacionesRuta}/crearSolicitudPendiente`, data);
  return response.data;
}