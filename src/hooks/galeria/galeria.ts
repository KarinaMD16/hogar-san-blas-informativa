import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { getCategorias, getImagenesPorCategoria, getTodasGaleria } from "../../services/galeria/galeria"

export function useGetCategorias() {
  const { data: Categorias, isLoading, error } = useQuery({
    queryKey: ['categorias'],
    queryFn: getCategorias
  })

  return {
    Categorias,
    loadingCategorias: isLoading,
    errorCategorias: error
  }
}

export function useGetTodasGaleria(page: number, limit:number) {
  const {
    data: imagenes, isLoading: loadingImagenes, isFetching, isPlaceholderData, error: errorImagenes } = useQuery({
    queryKey: ['imagenes', page, limit],
    queryFn: () => getTodasGaleria(page, limit),
    placeholderData: keepPreviousData, 
  });

  return { imagenes, loadingImagenes, isFetching, isPlaceholderData, errorImagenes };
}

export const useGetImagenesPorCategoria = (idCategoria: number, page: number, limit:number) => {
  const { data, isPending, error, isPlaceholderData } = useQuery({
    queryKey: ['imagenesPorCategoria', idCategoria, page, limit],
    queryFn: () => getImagenesPorCategoria(idCategoria, page, limit), 
    enabled: !!idCategoria,
    placeholderData: keepPreviousData, 
  });

  return {
    imagenesPorCategoria: data,
    isPendingimagenesPorCategoria: isPending,
    errorimagenesPorCategoria: error,
    isPlaceholderData
  };
};