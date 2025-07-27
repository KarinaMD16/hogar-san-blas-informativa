import { useForm, useFieldArray } from "react-hook-form";
import type { CrearSolicitudPendienteDto } from "../../models/formularios/solicitudVoluntario";
import { usePostSolicitudVoluntario } from "../../hooks/formularios/solicitudVoluntario";

export const FormularioVoluntariado = () => {
  const { register, handleSubmit, control } = useForm<CrearSolicitudPendienteDto>({
    defaultValues: {
      contactosEmergencia: [{ nombre: "", telefono: "" }],
      horarios: [{ dia: "", horaInicio: "", horaFin: "" }],
    },
  });

  const {
    fields: contactos,
    append: appendContacto,
    remove: removeContacto,
  } = useFieldArray({
    control,
    name: "contactosEmergencia",
  });

  const {
    fields: horarios,
    append: appendHorario,
    remove: removeHorario,
  } = useFieldArray({
    control,
    name: "horarios",
  });

  const { mutate, isLoading, isSuccess, isError, error } = usePostSolicitudVoluntario();

  const onSubmit = (data: CrearSolicitudPendienteDto) => {
    mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full max-w-2xl mx-auto">

      <input {...register("cedula")} placeholder="Cédula" />
      <input {...register("nombre")} placeholder="Nombre" />
      <input {...register("apellido1")} placeholder="Primer apellido" />
      <input {...register("apellido2")} placeholder="Segundo apellido" />
      <input {...register("email")} placeholder="Correo" />
      <input {...register("telefono")} placeholder="Teléfono" />
      <input {...register("ocupacion")} placeholder="Ocupación" />
      <input {...register("direccion")} placeholder="Dirección" />
      
      <select {...register("sexo")}>
        <option value="">Seleccione sexo</option>
        <option value="F">Femenino</option>
        <option value="M">Masculino</option>
      </select>

      <input {...register("experienciaLaboral")} placeholder="Experiencia laboral" />
      <input type="number" {...register("tipoVoluntariado")} placeholder="Tipo de voluntariado" />

      <h3 className="font-bold mt-4">Contactos de Emergencia</h3>
      {contactos.map((contacto, index) => (
        <div key={contacto.id} className="flex gap-2 items-center">
          <input {...register(`contactosEmergencia.${index}.nombre`)} placeholder="Nombre" />
          <input {...register(`contactosEmergencia.${index}.telefono`)} placeholder="Teléfono" />
          <button type="button" onClick={() => removeContacto(index)}>❌</button>
        </div>
      ))}
      <button type="button" onClick={() => appendContacto({ nombre: "", telefono: "" })}>+ Agregar contacto</button>

      <h3 className="font-bold mt-4">Horarios Disponibles</h3>
      {horarios.map((horario, index) => (
        <div key={horario.id} className="flex gap-2 items-center">
          <input {...register(`horarios.${index}.dia`)} placeholder="Día (ej. Lunes)" />
          <input type="time" {...register(`horarios.${index}.horaInicio`)} />
          <input type="time" {...register(`horarios.${index}.horaFin`)} />
          <button type="button" onClick={() => removeHorario(index)}>❌</button>
        </div>
      ))}
      <button type="button" onClick={() => appendHorario({ dia: "", horaInicio: "", horaFin: "" })}>+ Agregar horario</button>

      <button type="submit" disabled={isLoading} className="bg-blue-500 text-white px-4 py-2 mt-4">
        {isLoading ? "Enviando..." : "Enviar solicitud"}
      </button>

      {isSuccess && <p className="text-green-600">✅ Solicitud enviada correctamente.</p>}
      {isError && <p className="text-red-600">❌ Error: {(error as Error).message}</p>}
    </form>
  );
};
export default FormularioVoluntariado