import sidnamAPI from "../../../api/apiConfig";
import type { Publicacion } from "../../../models/publicaciones/publicaciones";
import { publicacionesRuta } from "../apiRuta";

export const getEventos = async (): Promise<Publicacion[]> => {
  const response = await sidnamAPI.get<Publicacion[]>(`${publicacionesRuta}/getEventos`);
  return response.data;
};