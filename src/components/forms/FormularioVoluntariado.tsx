import { useState } from "react";
import { Label } from "@radix-ui/react-label";
import { useForm } from "@tanstack/react-form";
import { useGetTipoVoluntarios, usePostSolicitudVoluntario } from "../../hooks/formularios/solicitudVoluntario";
import type { CrearSolicitudPendienteDto } from "../../models/formularios/solicitudVoluntario";
import { formVoluntarioSchema } from "../../schemas/schema";
import { Input } from "./InputField";
import Boton from "../Boton";

const SolicitudVoluntariadoForm = () => {
  const mutation = usePostSolicitudVoluntario();
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const { tiposVoluntariado } = useGetTipoVoluntarios();

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
    },
    onSubmit: async ({ value }: { value: CrearSolicitudPendienteDto }) => {
      if (value.horarios && value.horarios.length > 0) {
        value.horarios = value.horarios.filter(
          (h) => h.dia && h.horaInicio && h.horaFin
        );
      }
      console.log(value);

      const result = formVoluntarioSchema.safeParse(value);
      console.log(result);

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
      <form.Field
        name="nombre"
        validators={{ onChangeAsyncDebounceMs: 500 }}
        children={(field: {
          state: { value: string | number | readonly string[] | undefined };
          handleChange: (arg0: string) => void;
        }) => (
          <div className="mb-4">
            <Label htmlFor="nombre">Nombre</Label>
            <Input
              id="nombre"
              type="text"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
            />
            {formErrors.nombre && (
              <p className="text-red-700 text-sm">{formErrors.nombre}</p>
            )}
          </div>
        )}
      />
      <form.Field
        name="apellido1"
        validators={{ onChangeAsyncDebounceMs: 500 }}
        children={(field: {
          state: { value: string | number | readonly string[] | undefined };
          handleChange: (arg0: string) => void;
        }) => (
          <div className="mb-4">
            <Label htmlFor="apellido1">Primer Apellido</Label>
            <Input
              id="apellido1"
              type="text"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
            />
            {formErrors.apellido1 && (
              <p className="text-red-700 text-sm">{formErrors.apellido1}</p>
            )}
          </div>
        )}
      />
      <form.Field
        name="apellido2"
        validators={{ onChangeAsyncDebounceMs: 500 }}
        children={(field: {
          state: { value: string | number | readonly string[] | undefined };
          handleChange: (arg0: string) => void;
        }) => (
          <div className="mb-4">
            <Label htmlFor="apellido2">Segundo Apellido</Label>
            <Input
              id="apellido2"
              type="text"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
            />
            {formErrors.apellido2 && (
              <p className="text-red-700 text-sm">{formErrors.apellido2}</p>
            )}
          </div>
        )}
      />
      <form.Field
        name="cedula"
        validators={{ onChangeAsyncDebounceMs: 500 }}
        children={(field: {
          state: { value: string | number | readonly string[] | undefined };
          handleChange: (arg0: string) => void;
        }) => (
          <div className="mb-4">
            <Label htmlFor="cedula">Cedula</Label>
            <Input
              id="cedula"
              type="text"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
            />
            {formErrors.cedula && (
              <p className="text-red-700 text-sm">{formErrors.cedula}</p>
            )}
          </div>
        )}
      ></form.Field>
      <form.Field
        name="email"
        validators={{ onChangeAsyncDebounceMs: 500 }}
        children={(field: {
          state: { value: string | number | readonly string[] | undefined };
          handleChange: (arg0: string) => void;
        }) => (
          <div className="mb-4">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
            />
            {formErrors.email && (
              <p className="text-red-700 text-sm">{formErrors.email}</p>
            )}
          </div>
        )}
      />
      <form.Field
        name="telefono"
        validators={{ onChangeAsyncDebounceMs: 500 }}
        children={(field: {
          state: { value: string | number | readonly string[] | undefined };
          handleChange: (arg0: string) => void;
        }) => (
          <div className="mb-4">
            <Label htmlFor="telefono">Telefono</Label>
            <Input
              id="telefono"
              type="text"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
            />
            {formErrors.telefono && (
              <p className="text-red-700 text-sm">{formErrors.telefono}</p>
            )}
          </div>
        )}
      />
      <form.Field
        name="ocupacion"
        validators={{ onChangeAsyncDebounceMs: 500 }}
        children={(field: {
          state: { value: string | number | readonly string[] | undefined };
          handleChange: (arg0: string) => void;
        }) => (
          <div className="mb-4">
            <Label htmlFor="ocupacion">Ocupacion</Label>
            <Input
              id="ocupacion"
              type="text"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
            />
            {formErrors.ocupacion && (
              <p className="text-red-700 text-sm">{formErrors.ocupacion}</p>
            )}
          </div>
        )}
      />
      <form.Field
        name="direccion"
        validators={{ onChangeAsyncDebounceMs: 500 }}
        children={(field: {
          state: { value: string | number | readonly string[] | undefined };
          handleChange: (arg0: string) => void;
        }) => (
          <div className="mb-4">
            <Label htmlFor="direccion">Direccion</Label>
            <Input
              id="direccion"
              type="text"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
            />
            {formErrors.direccion && (
              <p className="text-red-700 text-sm">{formErrors.direccion}</p>
            )}
          </div>
        )}
      />
      <form.Field name="sexo">
        {(field) => (
          <div className="mb-4">
            <Label htmlFor="sexo">Sexo</Label>
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="sexoF"
                  type="radio"
                  name="sexo"
                  value="F"
                  checked={field.state.value === "F"}
                  onChange={() => field.handleChange(() => "F")}
                />
                <Label htmlFor="sexoF" className="ml-2">
                  Femenino
                </Label>
              </div>
              <div className="flex items-center">
                <input
                  id="sexoM"
                  type="radio"
                  name="sexo"
                  value="M"
                  checked={field.state.value === "M"}
                  onChange={() => field.handleChange(() => "M")}
                />
                <Label htmlFor="sexoM" className="ml-2">
                  Masculino
                </Label>
              </div>
            </div>
            {formErrors.sexo && (
              <p className="text-red-700 text-sm">{formErrors.sexo}</p>
            )}
          </div>
        )}
      </form.Field>
      <form.Field
        name="experienciaLaboral"
        validators={{ onChangeAsyncDebounceMs: 500 }}
        children={(field: {
          state: { value: string | number | readonly string[] | undefined };
          handleChange: (arg0: string) => void;
        }) => (
          <div className="mb-4">
            <Label htmlFor="experienciaLaboral">Experiencia Laboral</Label>
            <Input
              id="experienciaLaboral"
              type="text"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
            />
            {formErrors.experienciaLaboral && (
              <p className="text-red-700 text-sm">
                {formErrors.experienciaLaboral}
              </p>
            )}
          </div>
        )}
      />
      <form.Field name="tipoVoluntariado">
        {(field) => (
          <div className="mb-4">
            <Label htmlFor="tipoVoluntariado">Tipo de Voluntariado</Label>
            <select
              id="tipoVoluntariado"
              value={field.state.value ?? ""}
              onChange={(e) => field.handleChange(Number(e.target.value))}
              className="w-full rounded-md border border-gray-300 px-3 py-2"
            >
              <option value={0}>Seleccione una opción</option>
              {tiposVoluntariado.map((tipo) => (
                <option key={tipo.id} value={tipo.id}>
                  {tipo.nombre}
                </option>
              ))}
            </select>
            {formErrors.tipoVoluntariado && (
              <p className="text-red-700 text-sm mt-1">
                {formErrors.tipoVoluntariado}
              </p>
            )}
          </div>
        )}
      </form.Field>
      <form.Field
        name="contactosEmergencia"
        validators={{ onChangeAsyncDebounceMs: 500 }}
        children={(field) => {
          const contacto =
            Array.isArray(field.state.value) && field.state.value.length > 0
              ? field.state.value[0]
              : { nombre: "", telefono: "" };

          const handleContactChange = (
            key: "nombre" | "telefono",
            value: string
          ) => {
            const updatedContact = { ...contacto, [key]: value };
            field.handleChange([updatedContact]);
          };

          return (
            <div className="mb-4">
              <Label htmlFor="contacto-nombre" className="block mb-2">
                Contacto de Emergencia
              </Label>
              <div className="space-y-3">
                <div>
                  <Label
                    htmlFor="contacto-nombre"
                    className="text-sm block mb-1"
                  >
                    Nombre
                  </Label>
                  <Input
                    id="contacto-nombre"
                    type="text"
                    value={contacto.nombre}
                    onChange={(e) =>
                      handleContactChange("nombre", e.target.value)
                    }
                    placeholder="Nombre del contacto"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="contacto-telefono"
                    className="text-sm block mb-1"
                  >
                    Teléfono
                  </Label>
                  <Input
                    id="contacto-telefono"
                    type="tel"
                    value={contacto.telefono}
                    onChange={(e) =>
                      handleContactChange("telefono", e.target.value)
                    }
                    placeholder="Número de teléfono"
                  />
                </div>
              </div>

              {formErrors.contactosEmergencia && (
                <p className="text-red-700 text-sm mt-1">
                  {formErrors.contactosEmergencia}
                </p>
              )}
            </div>
          );
        }}
      />
      <form.Field
        name="horarios"
        validators={{ onChangeAsyncDebounceMs: 500 }}
        children={(field) => {
          const horarios = Array.isArray(field.state.value)
            ? field.state.value
            : [];

          const addHorario = () => {
            const newHorarios = [
              ...horarios,
              { dia: "", horaInicio: "", horaFin: "" },
            ];
            field.handleChange(newHorarios);
          };

          const removeHorario = (index: number) => {
            const newHorarios = horarios.filter((_, i) => i !== index);
            field.handleChange(newHorarios);
          };

          const updateHorario = (
            index: number,
            key: "dia" | "horaInicio" | "horaFin",
            value: string
          ) => {
            if ((key === "horaInicio" || key === "horaFin") && value) {
              const cleaned = value.replace(/[^\d:]/g, "");
              const match = cleaned.match(/^(\d{0,2}):?(\d{0,2})$/);
              if (match) {
                const hours = match[1] ? match[1].padStart(2, "0") : "00";
                const minutes = match[2] ? match[2].padStart(2, "0") : "00";
                value = `${hours}:${minutes}`;
              }
            }

            const newHorarios = horarios.map((horario, i) => {
              if (i === index) {
                return { ...horario, [key]: value };
              }
              return horario;
            });

            field.handleChange(newHorarios);
          };

          return (
            <div className="mb-4">
              <Label className="block mb-2">Horarios Disponibles</Label>

              {horarios.length === 0 ? (
                <p className="text-gray-500 text-sm mb-2">
                  No hay horarios agregados
                </p>
              ) : (
                horarios.map((horario, index) => (
                  <div
                    key={index}
                    className="mb-3 p-3 border border-gray-200 rounded-md bg-gray-50"
                  >
                    <div className="flex justify-between mb-2">
                      <h4 className="text-sm font-medium">
                        Horario {index + 1}
                      </h4>
                      <button
                        type="button"
                        onClick={() => removeHorario(index)}
                        className="text-red-600 text-xs"
                      >
                        Eliminar
                      </button>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <Label
                          htmlFor={`horario-dia-${index}`}
                          className="text-sm block mb-1"
                        >
                          Día
                        </Label>
                        <select
                          id={`horario-dia-${index}`}
                          value={horario.dia}
                          onChange={(e) =>
                            updateHorario(index, "dia", e.target.value)
                          }
                          className="w-full rounded-md border border-gray-300 px-3 py-2"
                        >
                          <option value="">Seleccionar día</option>
                          <option value="Lunes">Lunes</option>
                          <option value="Martes">Martes</option>
                          <option value="Miércoles">Miércoles</option>
                          <option value="Jueves">Jueves</option>
                          <option value="Viernes">Viernes</option>
                          <option value="Sábado">Sábado</option>
                          <option value="Domingo">Domingo</option>
                        </select>
                      </div>

                      <div>
                        <Label
                          htmlFor={`horario-inicio-${index}`}
                          className="text-sm block mb-1"
                        >
                          Hora Inicio
                        </Label>
                        <Input
                          id={`horario-inicio-${index}`}
                          type="text"
                          placeholder="08:00"
                          value={horario.horaInicio}
                          onChange={(e) =>
                            updateHorario(index, "horaInicio", e.target.value)
                          }
                        />
                      </div>

                      <div>
                        <Label
                          htmlFor={`horario-fin-${index}`}
                          className="text-sm block mb-1"
                        >
                          Hora Fin
                        </Label>
                        <Input
                          id={`horario-fin-${index}`}
                          type="text"
                          placeholder="17:00"
                          value={horario.horaFin}
                          onChange={(e) =>
                            updateHorario(index, "horaFin", e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>
                ))
              )}

              <button
                type="button"
                onClick={addHorario}
                className="mt-2 py-1 px-3 bg-blue-100 text-blue-700 text-sm rounded-md"
              >
                + Agregar horario
              </button>

              <p className="text-xs text-gray-500 mt-1">
                Solo se guardarán los horarios donde todos los campos estén
                completos.
              </p>

              {formErrors.horarios && (
                <p className="text-red-700 text-sm mt-1">
                  {formErrors.horarios}
                </p>
              )}
            </div>
          );
        }}
      />

      <Boton type="submit">
        {mutation.isPending ? "Enviando..." : "Enviar solicitud"}
      </Boton>
    </form>
  );
};

export default SolicitudVoluntariadoForm;