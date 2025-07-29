import { useMutation, useQuery } from "@tanstack/react-query";
import type { CrearSolicitudPendienteDto, SolicitudPendiente, TipoVoluntariado } from "../../models/formularios/solicitudVoluntario";
import { getTipoVoluntarios, postSolicitudPendiente } from "../../services/formularios/solicitudVoluntario";

export function useGetTipoVoluntarios() {
  const { data, isLoading, error, isFetching, isPlaceholderData } = useQuery<TipoVoluntariado[]>({
    queryKey: ['tipoVoluntariado'],
    queryFn: getTipoVoluntarios,
  });

  return {
    tiposVoluntariado: data ?? [],
    loadingTipos: isLoading,
    fetchingTipos: isFetching,
    errorTipos: error,
    isPlaceholderData,
  };
}


export const usePostSolicitudVoluntario = () => {
  return useMutation<SolicitudPendiente, Error, CrearSolicitudPendienteDto>({
    mutationFn: postSolicitudPendiente,
  });
};