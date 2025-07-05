import sidnamAPI from "../../api/apiConfig";
import type { Galeria } from "../../models/galeria/galeria";
import { publicacionesRuta } from "../apiRutas";

export const getGaleria = async (): Promise<Galeria[]> => {
  const response = await sidnamAPI.get<Galeria[]>(`${publicacionesRuta}/getDonaciones`);
  return response.data;
};