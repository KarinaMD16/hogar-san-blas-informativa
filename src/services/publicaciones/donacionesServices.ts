import sidnamAPI from "../../api/apiConfig";
import type { Publicacion } from "../../models/publicaciones/publicaciones";
import { publicacionesRuta } from "../apiRutas";

export const getDonaciones = async ( page: number, limit:number): Promise<Publicacion[]> => {
  const response = await sidnamAPI.get<Publicacion[]>(`${publicacionesRuta}/getDonaciones?page=${page}&limit=${limit}`);
  return response.data;
};