import sidnamAPI from "../../api/apiConfig";
import type { Publicacion } from "../../models/publicaciones/publicaciones";
import { publicacionesRuta } from "../apiRutas";

export const getDonaciones = async (page?: number, limit?: number)
: Promise<{ data: Publicacion[]; total: number }> => {
  const response = await sidnamAPI.get<{ data: Publicacion[]; total: number }>(
    `${publicacionesRuta}/getDonaciones?page=${page}&limit=${limit}`
  );
  return response.data;
};