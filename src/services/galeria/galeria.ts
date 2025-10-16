import sidnamAPI from "../../api/apiConfig";
import type { Categoria, Galeria, GaleriaCategoria } from "../../models/galeria/galeria";
import { galeriaRuta } from "../apiRutas";

export const getTodasGaleria = async (page: number, limit: number)
: Promise<Galeria[]> => {
  const response = await sidnamAPI.get<Galeria[]>(
    `${galeriaRuta}/getImagenes?page=${page}&limit=${limit}`
  );
  return response.data;
};

export const getCategorias = async (): Promise<Categoria[]> => {
  const response = await sidnamAPI.get<Categoria[]>(`${galeriaRuta}/getCategoriasActivas`);
  return response.data;
};

export const getImagenesPorCategoria = async (id:number, page: number, limit: number)
: Promise<GaleriaCategoria[]> => {
  const response = await sidnamAPI.get<GaleriaCategoria[]>(`${galeriaRuta}/categoria/${id}?page=${page}&limit=${limit}`);
  return response.data;
}