import { useQuery } from "@tanstack/react-query";
import { getProyectos } from "../../services/publicaciones/proyectosServices";
import { getDonaciones } from "../../services/publicaciones/donacionesServices";
import { getEventos } from "../../services/publicaciones/eventosServices";

export function useGetProyectos( page?: number, limit?:number) {
  const { data, isLoading, error, isPlaceholderData, isFetching } = useQuery({
    queryKey: ['proyectos', page],
    queryFn: () => getProyectos(page, limit),
    select: (resp) => ({
      proyectos: resp.data,
      total: resp.total,
    }), 
  })

  return {
    proyectos: data?.proyectos ?? [],
    total: data?.total ?? 0,
    loadingProyectos: isLoading,
    fetchingProyectos: isFetching,
    errorProyectos: error,
    isPlaceholderData
  }
}

export function useGetDonaciones(page?: number, limit?:number) {
  const { data, isLoading, error, isPlaceholderData, isFetching } = useQuery({
    queryKey: ['donaciones', page],
    queryFn: () => getDonaciones(page, limit),
    select: (resp) => ({
      donaciones: resp.data,
      total: resp.total,
    }), 
  })

  return {
    donaciones: data?.donaciones ?? [],
    total: data?.total ?? 0,
    loadingDonaciones: isLoading,
    fetchingDonaciones: isFetching,
    errorDonaciones: error, 
    isPlaceholderData
  }
}

export function useGetEventos(page?:number, limit?:number) {
  const { data, isLoading, error, isPlaceholderData, isFetching } = useQuery({
    queryKey: ['eventos', page],
    queryFn: () => getEventos(page, limit),
   select: (resp) => ({
      eventos: resp.data,
      total: resp.total,
    }), 
  })

  return {
    eventos: data?.eventos ?? [],
    total: data?.total ?? 0,
    loadingEventos: isLoading,
    fetchingEventos: isFetching,
    errorEventos: error,
    isPlaceholderData
  }
}
