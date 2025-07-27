import { useState } from "react";
import { Label } from "@radix-ui/react-label";
import { useForm } from "@tanstack/react-form";
import { usePostSolicitudVoluntario } from "../../hooks/formularios/solicitudVoluntario";
import type { CrearSolicitudPendienteDto } from "../../models/formularios/solicitudVoluntario";
import { formVoluntarioSchema } from "../../schemas/schema";
import { Input } from "./InputField";


const SolicitudVoluntariadoForm = () => {
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
      tipoVoluntariado: 1,
      contactosEmergencia: [{ nombre: "", telefono: "" }],
      horarios: [{ dia: "", horaInicio: "", horaFin: "" }],
    },
    onSubmit: async ({ value }: { value: CrearSolicitudPendienteDto }) => {
      
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
      } catch (err) {
        setFormErrors({error: "Error al enviar formulario"});
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
      <form.Field name="nombre" validators={{onChangeAsyncDebounceMs: 500,}} children={(field: { state: { value: string | number | readonly string[] | undefined; }; handleChange: (arg0: string) => void; }) => (
        <div className="mb-4">
          <Label htmlFor="nombre">Nombre</Label>
          <Input
            id="nombre"
            type="text"
            value={field.state.value}
            onChange={(e) => field.handleChange(e.target.value)}
          />
          {formErrors.nombre && (
            <p className="text-red-700 text-sm">{formErrors.cedula}</p>
          )}
        </div>
        )}
      />
      <form.Field name="apellido1" validators={{onChangeAsyncDebounceMs: 500,}} children={(field: { state: { value: string | number | readonly string[] | undefined; }; handleChange: (arg0: string) => void; }) => (
        <div className="mb-4">
          <Label htmlFor="apellido1">Primer Apellido</Label>
          <Input
            id="apellido1"
            type="text"
            value={field.state.value}
            onChange={(e) => field.handleChange(e.target.value)}
          />
          {formErrors.apellido1 && (
            <p className="text-red-700 text-sm">{formErrors.cedula}</p>
          )}
        </div>
      )}
      />

      <button type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? "Enviando..." : "Enviar solicitud"}
      </button>
    </form>
  );
};

export default SolicitudVoluntariadoForm;