import { useQuery } from "@tanstack/react-query";
import { getProyectos } from "../../services/publicaciones/proyectosServices";
import { getDonaciones } from "../../services/publicaciones/donacionesServices";
import { getEventos } from "../../services/publicaciones/eventosServices";

export function useGetProyectos() {
  const { data: Proyectos, isLoading, error } = useQuery({
    queryKey: ['proyectos'],
    queryFn: getProyectos
  })

  return {
    Proyectos,
    loadingProyectos: isLoading,
    errorProyectos: error
  }
}

export function useGetDonaciones() {
  const { data: Donaciones, isLoading, error } = useQuery({
    queryKey: ['donaciones'],
    queryFn: getDonaciones
  })

  return {
    Donaciones,
    loadingProyectos: isLoading,
    errorProyectos: error
  }
}

export function useGetEventos() {
  const { data: Eventos, isLoading, error } = useQuery({
    queryKey: ['eventos'],
    queryFn: getEventos
  })

  return {
    Eventos,
    loadingProyectos: isLoading,
    errorProyectos: error
  }
}
