import { useForm } from "react-hook-form";

const FormularioVoluntariado = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("Datos enviados:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold">Formulario de Voluntariado</h2>

      <input
        type="text"
        placeholder="Nombre completo"
        {...register("nombreCompleto", { required: true })}
      />
      {errors.nombreCompleto && <span>Este campo es obligatorio</span>}

      {/* aqui faltan los inputs */}

      <button
        type="submit"
        className="bg-amaranthPink text-white px-4 py-2 rounded hover:bg-pink-600"
      >
        Enviar
      </button>
    </form>
  );
};

export default FormularioVoluntariado;
