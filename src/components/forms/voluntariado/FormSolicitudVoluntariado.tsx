import { useState } from "react";
import { useForm } from "@tanstack/react-form";
import { usePostSolicitudVoluntario } from "../../../hooks/formularios/solicitudVoluntario";
import type { CrearSolicitudPendienteDto } from "../../../models/formularios/solicitudVoluntario";
import { formVoluntarioSchema } from "../../../schemas/schema";
import Boton from "../../Boton";
import { ContactoEmergenciaSection } from "./ContactoEmergenciaSection";
import DatosPersonalesSection from "./DatosPersonalesSection";
import { HorariosDisponiblesSection } from "./HorariosDisponiblesSection";
import OtrosDatosSection from "./OtrosDatosSection";

const FormSolicitudVoluntariado = () => {
  const mutation = usePostSolicitudVoluntario();
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const form = useForm({
    defaultValues: {
      cedula: "",
      nombre: "",
      apellido1: "",
      apellido2: "",
      email: "",
      telefono: "",
      ocupacion: "",
      direccion: "",
      sexo: "F",
      experienciaLaboral: "",
      tipoVoluntariado: 0,
      contactosEmergencia: [{ nombre: "", telefono: "" }],
      horarios: [{ dia: "", horaInicio: "", horaFin: "" }],
      observaciones: ""
    },
    onSubmit: async ({ value }: { value: CrearSolicitudPendienteDto }) => {
      if (value.horarios && value.horarios.length > 0) {
        value.horarios = value.horarios.filter(
          (h) => h.dia && h.horaInicio && h.horaFin
        );
      }

      const result = formVoluntarioSchema.safeParse(value);

      if (!result.success) {
        const fieldErrors: Record<string, string> = {};
        result.error.issues.forEach((err) => {
          const field = err.path[0] as string;
          fieldErrors[field] = err.message;
        });
        setFormErrors(fieldErrors);
        return;
      }

      try {
        await mutation.mutateAsync(value);
        alert("Formulario enviado con éxito");
        form.reset();
      } catch (error) {
        console.error(error);
        setFormErrors({ error: "Error al enviar formulario" });
      }
    },
  });

  return (
  <form
    onSubmit={(event) => {
      event.preventDefault();
      form.handleSubmit();
    }}
  >

    <DatosPersonalesSection form={form} formErrors={formErrors} />
    <OtrosDatosSection form={form} formErrors={formErrors} />
    <ContactoEmergenciaSection form={form} formErrors={formErrors} />
    <HorariosDisponiblesSection form={form} formErrors={formErrors} />

    <Boton type="submit">
      {mutation.isPending ? "Enviando..." : "Enviar solicitud"}
    </Boton>
  </form>
);
};

export default FormSolicitudVoluntariado;