import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import InputField from "./InputField";
import TextAreaField from "./TextAreaField";
import Boton from "../Boton";
import IdiomaContext from "../../context/language/idiomaContext";

const FormularioVoluntariado = () => {
  const { contentJson } = useContext(IdiomaContext);
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    setValue,
    clearErrors,
  } = useForm();

  const cumpleHoras = watch("cumpleHoras");
  const archivoPdf = watch("hojaDelincuencia");
  const [pdfPreview, setPdfPreview] = useState<string | null>(null);

  useEffect(() => {
    if (archivoPdf && archivoPdf.length > 0) {
      const file = archivoPdf[0];
      const url = URL.createObjectURL(file);
      setPdfPreview(url);

      return () => URL.revokeObjectURL(url);
    } else {
      setPdfPreview(null);
    }
  }, [archivoPdf]);

  useEffect(() => {
    if (!cumpleHoras) {
      clearErrors("cantidadHoras");
      setValue("cantidadHoras", "");
    }
  }, [cumpleHoras, clearErrors, setValue]);

  const onSubmit = async (data: any) => {
    try {
      const formData = new FormData();

      // Campos simples
      formData.append("nombreCompleto", data.nombreCompleto);
      formData.append("cedula", data.cedula);
      formData.append("sexo", data.sexo);
      formData.append("ocupacion", data.ocupacion);
      formData.append("telefono", data.telefono);
      formData.append("correo", data.correo);
      formData.append("direccion", data.direccion);
      formData.append("cumpleHoras", data.cumpleHoras ? "sí" : "no");
      if (data.cantidadHoras) formData.append("cantidadHoras", data.cantidadHoras);
      formData.append("experiencia", data.experiencia || "");
      formData.append("observaciones", data.observaciones || "");

      // Contacto emergencia
      formData.append("emergenciaNombre", data.emergenciaNombre);
      formData.append("emergenciaTelefono", data.emergenciaTelefono);

      // Horarios
      contentJson.formularioVoluntariado.horario.dias.forEach(dia => {
        if (data.horario?.[dia]) {
          formData.append(dia, data.horario[dia]);
        }
      });

      // Archivo PDF
      if (data.hojaDelincuencia && data.hojaDelincuencia[0]) {
        formData.append("hojaDelincuencia", data.hojaDelincuencia[0]);
      }

      const response = await fetch("http://localhost:3000/voluntarios/postFormulario", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Error al enviar formulario");

      alert("Formulario enviado con éxito");
      reset();
    } catch (error) {
      console.error("Error al enviar:", error);
      alert("Hubo un error al enviar el formulario.");
    }
  };

  return (
    <div className="flex flex-col items-center gap-10">
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-30">
        <div className="flex flex-col gap-5">
          <InputField
            label= {contentJson.formularioVoluntariado.nombre}
            name="nombreCompleto"
            register={register}
            errors={errors}
            validation={{ required: "Este campo es obligatorio" }}
          />

          <InputField
            label={contentJson.formularioVoluntariado.cedula}
            name="cedula"
            register={register}
            errors={errors}
            validation={{ required: "Este campo es obligatorio" }}
          />

          <div className="text-left">
            <label htmlFor="sexo" className="block text-left mb-1">{contentJson.formularioVoluntariado.sexo.label}</label>
            <select
              id="sexo"
              {...register("sexo", { required: "Seleccione una opción" })}
              className="bg-white border-2 border-ecruYellow rounded-full p-2 w-1/2"
            >
              <option value="" disabled hidden>{contentJson.formularioVoluntariado.sexo.opciones[0]}</option>
              <option value="M">{contentJson.formularioVoluntariado.sexo.opciones[1]}</option>
              <option value="F">{contentJson.formularioVoluntariado.sexo.opciones[2]}</option>
            </select>
            {errors.sexo && <span className="text-red-500 text-sm">{String(errors.sexo.message)}</span>}
          </div>

          <InputField
            label={contentJson.formularioVoluntariado.ocupacion}
            name="ocupacion"
            register={register}
            errors={errors}
            validation={{ required: "Este campo es obligatorio" }}
          />

          <InputField
            label={contentJson.formularioVoluntariado.telefono}
            name="telefono"
            type="tel"
            register={register}
            errors={errors}
            validation={{
              required: "Este campo es obligatorio",
              pattern: {
                value: /^[0-9]{8,15}$/,
                message: "Número inválido"
              }
            }}
          />

          <InputField
            label={contentJson.formularioVoluntariado.correo.label}
            name="correo"
            type="email"
            placeholder={contentJson.formularioVoluntariado.correo.placeholder}
            register={register}
            errors={errors}
            validation={{
              required: "Este campo es obligatorio",
              pattern: { value: /^\S+@\S+$/i, message: "Correo inválido" }
            }}
          />

          <TextAreaField
            label={contentJson.formularioVoluntariado.direccion}
            name="direccion"
            register={register}
            errors={errors}
            validation={{ required: "Este campo es obligatorio" }}
          />

          <div>
            <label className="block text-left mb-4">{contentJson.formularioVoluntariado.contactoEmergencia.label}</label>
            <div className="flex flex-col md:flex-row gap-2">
              <InputField
                label={contentJson.formularioVoluntariado.contactoEmergencia.nombre.label}
                name="emergenciaNombre"
                register={register}
                errors={errors}
                validation={{ required: "Este campo es obligatorio" }}
              />
              <InputField
                label={contentJson.formularioVoluntariado.contactoEmergencia.telefono.label}
                name="emergenciaTelefono"
                type="tel"
                register={register}
                errors={errors}
                validation={{
                  required: "Este campo es obligatorio",
                  pattern: {
                    value: /^[0-9]{8,}$/,
                    message: "Número inválido",
                  },
                }}
              />
            </div>
          </div>
          <TextAreaField
            label={contentJson.formularioVoluntariado.experiencia}
            name="experiencia"
            register={register}
            errors={errors}
            validation={{ required: "Este campo es obligatorio" }}
          />
        </div>
        
        <div className="flex flex-col gap-4">
          <div>
            <label className="flex items-center gap-2">
              <input type="checkbox" {...register("cumpleHoras")} />
              {contentJson.formularioVoluntariado.horas[0]}
            </label>
          </div>

          {cumpleHoras && (
            <InputField
              label={contentJson.formularioVoluntariado.horas[1]}
              name="cantidadHoras"
              type="number"
              register={register}
              errors={errors}
              validation={{
                required: "Debe ingresar la cantidad de horas",
                min: { value: 1, message: "Debe ser mayor a 0" },
              }}
            />
          )}

          <div>
            <label className="block text-left mb-3 mt-4">{contentJson.formularioVoluntariado.horario.label}</label>
            {contentJson.formularioVoluntariado.horario.dias.map(dia => (
              <div key={dia} className="block text-left mb-1">
                <label htmlFor={`horario-${dia}`} className="capitalize block text-sm">{dia}</label>
                <input
                  id={`horario-${dia}`}
                  type="text"
                  {...register(`horario.${dia}`)}
                  placeholder={contentJson.formularioVoluntariado.horario.placeholder}
                  className="bg-white border-2 border-ecruYellow rounded-full p-2 w-1/2 mb-5"
                />
              </div>
            ))}
          </div>

          <TextAreaField
            label={contentJson.formularioVoluntariado.observaciones}
            name="observaciones"
            register={register}
            errors={errors}
          />

          <div className="text-left">
            <label htmlFor="hojaDelincuencia" className="block text-left mb-1">{contentJson.formularioVoluntariado.delincuencia.label}</label>
            <input
              id="hojaDelincuencia"
              type="file"
              accept="application/pdf"
              {...register("hojaDelincuencia", { required: "Este campo es obligatorio" })}
              className="bg-white border-2 border-ecruYellow rounded-full p-2 w-1/2"
            />
            {errors.hojaDelincuencia && (
              <span className="text-red-500 text-sm">{errors.hojaDelincuencia.message as string}</span>
            )}

            {pdfPreview && (
              <div className="mt-2">
                <p className="text-sm text-gray-600">{contentJson.formularioVoluntariado.delincuencia.preview[0]}</p>
                <a
                  href={pdfPreview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  {contentJson.formularioVoluntariado.delincuencia.preview[1]}
                </a>
              </div>
            )}
          </div>
        </div>
      </form>
      <Boton type="submit" >
          {contentJson.formulario.botones[0]}
        </Boton>
    </div>
  );
};

export default FormularioVoluntariado;