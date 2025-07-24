import { useForm, type FieldValues } from "react-hook-form";

const FormularioVoluntariado = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
  try {
    const formData = new FormData();

    formData.append("nombreCompleto", data.nombreCompleto);
    formData.append("cedula", data.cedula);
    formData.append("sexo", data.sexo);
    formData.append("ocupacion", data.ocupacion);
    formData.append("telefono", data.telefono);
    formData.append("correo", data.correo);
    formData.append("direccion", data.direccion);
    formData.append("contactoEmergencia", data.contactoEmergencia);
    formData.append("tipoColaboracion", data.tipoColaboracion);
    formData.append("experienciaAdultoMayor", data.experienciaAdultoMayor);
    formData.append("horario", data.horario);
    formData.append("observaciones", data.observaciones);
    formData.append("cumpleHoras", data.cumpleHoras ? "true" : "false");

    if (data.cumpleHoras && data.cantidadHoras) {
      formData.append("cantidadHoras", data.cantidadHoras);
    }

    if (data.pdf && data.pdf[0]) {
      formData.append("pdf", data.pdf[0]);
    }

    const response = await fetch("https://tudominio.com/api/postFormulario", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) throw new Error("Error al enviar el formulario");

    alert("Formulario enviado con éxito");
    reset(); 
  } catch (error) {
    console.error(error);
    alert("Hubo un error al enviar el formulario");
  }
};

{/* NADA VA A QUEDAR QUEMADO, es solo para prueba */}
{/* faltan los estilos para que matchee el figma*/}

  return (
    <form
  onSubmit={handleSubmit(onSubmit)}
  className="space-y-4 bg-white p-6 rounded-lg shadow-md max-w-xl mx-auto"
>
  <div>
    <label className="block mb-1">Nombre completo</label>
    <input {...register("nombreCompleto")} className="input" />
  </div>

  <div>
    <label className="block mb-1">Cédula</label>
    <input {...register("cedula")} className="input" />
  </div>

  <div>
    <label className="block mb-1">Sexo</label>
    <select {...register("sexo")} className="input">
      <option value="">Seleccione</option>
      <option value="M">Masculino</option>
      <option value="F">Femenino</option>
    </select>
  </div>

  <div>
    <label className="block mb-1">Ocupación</label>
    <input {...register("ocupacion")} className="input" />
  </div>

  <div>
    <label className="block mb-1">Teléfono</label>
    <input {...register("telefono")} className="input" />
  </div>

  <div>
    <label className="block mb-1">Correo</label>
    <input {...register("correo")} type="email" className="input" />
  </div>

  <div>
    <label className="block mb-1">Dirección</label>
    <textarea {...register("direccion")} className="input" />
  </div>

  <div>
    <label className="block mb-1">Contacto de emergencia (nombre y teléfono)</label>
    <input {...register("contactoEmergencia")} className="input" />
  </div>

  <div>
    <label className="block mb-1">Tipo de colaboración que desea brindar</label>
    <textarea {...register("tipoColaboracion")} className="input" />
  </div>

  <div>
    <label className="block mb-1">Experiencia con adulto mayor</label>
    <textarea {...register("experienciaAdultoMayor")} className="input" />
  </div>

  <div>
    <label className="block mb-1">Horario disponible</label>
    <textarea {...register("horario")} className="input" />
  </div>

  <div>
    <label className="block mb-1">Observaciones</label>
    <textarea {...register("observaciones")} className="input" />
  </div>

  <div className="flex items-center gap-2">
    <input type="checkbox" {...register("cumpleHoras")} id="cumpleHoras" />
    <label htmlFor="cumpleHoras">Voluntariado con cumplimiento de horas</label>
  </div>

  {watch("cumpleHoras") && (
    <div>
      <label className="block mb-1">Cantidad de horas a cumplir</label>
      <input {...register("cantidadHoras")} type="number" className="input" />
    </div>
  )}

  <div>
    <label className="block mb-1">Subir hoja de delincuencia (PDF)</label>
    <input {...register("pdf")} type="file" accept="application/pdf" />
  </div>

  <button
    type="submit"
    className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
  >
    Enviar
  </button>
</form>

  );
};

export default FormularioVoluntariado;
