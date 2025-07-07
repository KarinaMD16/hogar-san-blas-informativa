import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getProyectos } from "../../services/publicaciones/proyectosServices";
import { getDonaciones } from "../../services/publicaciones/donacionesServices";
import { getEventos } from "../../services/publicaciones/eventosServices";

export function useGetProyectos( page: number, limit:number) {
  const { data: Proyectos, isLoading, error, isPlaceholderData } = useQuery({
    queryKey: ['proyectos', page, limit],
    queryFn: () => getProyectos(page, limit),
    placeholderData: keepPreviousData, 
  })

  return {
    Proyectos,
    loadingProyectos: isLoading,
    errorProyectos: error,
    isPlaceholderData
  }
}

export function useGetDonaciones(page: number, limit:number) {
  const { data: Donaciones, isLoading, error, isPlaceholderData } = useQuery({
    queryKey: ['donaciones', page, limit],
    queryFn: () => getDonaciones(page, limit),
    placeholderData: keepPreviousData, 
  })

  return {
    Donaciones,
    loadingProyectos: isLoading,
    errorProyectos: error, 
    isPlaceholderData
  }
}

export function useGetEventos(page:number, limit:number) {
  const { data: Eventos, isLoading, error, isPlaceholderData } = useQuery({
    queryKey: ['eventos', page, limit],
    queryFn: () => getEventos(page, limit),
    placeholderData: keepPreviousData, 
  })

  return {
    Eventos,
    loadingProyectos: isLoading,
    errorProyectos: error,
    isPlaceholderData
  }
}
