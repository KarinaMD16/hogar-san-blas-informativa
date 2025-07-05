import sidnamAPI from "../../../api/apiConfig";
import type { Publicacion } from "../../../models/publicaciones/publicaciones";
import { publicacionesRuta } from "../apiRuta";

export const getProyectos = async (): Promise<Publicacion[]> => {
  const response = await sidnamAPI.get<Publicacion[]>(`${publicacionesRuta}/getProyectos`);
  return response.data;
};