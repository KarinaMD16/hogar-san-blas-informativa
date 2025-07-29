import sidnamAPI from "../../api/apiConfig";
import { voluntariosRuta } from "../apiRutas";

export const crearSolicitudPendiente = async (formData: FormData) => {
  const response = await sidnamAPI.post("/voluntariado/crearSolicitudPendiente", formData, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
  return response.data;
};

export const subirPdf = async (file: File, voluntarioId: string) => {
  const formData = new FormData();
  formData.append("archivo", file);
  await sidnamAPI.post(`${voluntariosRuta}/${voluntarioId}/hoja-delincuencia`, formData);
};

