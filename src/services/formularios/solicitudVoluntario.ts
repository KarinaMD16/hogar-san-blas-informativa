import sidnamAPI from "../../api/apiConfig";
import type { CrearSolicitudPendienteDto, SolicitudPendiente, TipoVoluntariado } from "../../models/formularios/solicitudVoluntario";
import { voluntariosRuta } from "../apiRutas";

export async function getTipoVoluntarios(): Promise<TipoVoluntariado[]> {
  const response = await sidnamAPI.get<TipoVoluntariado[]>(
    `${voluntariosRuta}/getTipoVoluntario`
  );

  return response.data;
}

export const postSolicitudPendiente = async (data: CrearSolicitudPendienteDto): Promise<SolicitudPendiente> => {
  const response = await sidnamAPI.post<SolicitudPendiente>( `${voluntariosRuta}/crearSolicitudPendiente`, data);
  return response.data;
};