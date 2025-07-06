import { useQuery } from "@tanstack/react-query"
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

export function useGetTodasGaleria() {
  const { data: Imagenes, isLoading, error } = useQuery({
    queryKey: ['imagenes'],
    queryFn: getTodasGaleria
  })

  return {
    Imagenes,
    loadingImagenes: isLoading,
    errorImagenes: error
  }
}


export const useGetImagenesPorCategoria = (idCategoria: number) => {
  const { data, isPending, error } = useQuery({
    queryKey: ['imagenesPorCategoria', idCategoria],
    queryFn: () => getImagenesPorCategoria(idCategoria!), 
    enabled: !!idCategoria,
  });

  return {
    imagenesPorCategoria: data,
    isPendingimagenesPorCategoria: isPending,
    errorimagenesPorCategoria: error,
  };
};