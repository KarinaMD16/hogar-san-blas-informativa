import sidnamAPI from "../../api/apiConfig";
import type { Publicacion } from "../../models/publicaciones/publicaciones";
import { publicacionesRuta } from "../apiRutas";

export const getProyectos = async (page?: number, limit?:number)
: Promise<{ data: Publicacion[]; total: number }> => {
  const response = await sidnamAPI.get<{ data: Publicacion[]; total: number }>(`${publicacionesRuta}/getProyectos?page=${page}&limit=${limit}`);
  return response.data;
};