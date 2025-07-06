import sidnamAPI from "../../api/apiConfig";
import type { Categoria, Galeria, GaleriaCategoria } from "../../models/galeria/galeria";
import { galeriaRuta } from "../apiRutas";

export const getTodasGaleria = async (): Promise<Galeria[]> => {
  const response = await sidnamAPI.get<Galeria[]>(`${galeriaRuta}/getImagenes`);
  return response.data;
};

export const getCategorias = async (): Promise<Categoria[]> => {
  const response = await sidnamAPI.get<Categoria[]>(`${galeriaRuta}/getCategorias`);
  return response.data;
};

export const getImagenesPorCategoria = async (id:number): Promise<GaleriaCategoria[]> => {
  const response = await sidnamAPI.get<GaleriaCategoria[]>(`${galeriaRuta}/categoria/${id}`);
  return response.data;
}