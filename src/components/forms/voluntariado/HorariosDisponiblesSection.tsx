import InputField from "../../../components/forms/InputField";
import { Label } from "@radix-ui/react-label";

export const HorariosDisponiblesSection = ({ form, formErrors }: any) => {
  return (
    <>
    <form.Field name="horarios">
    {(field: { state: { value: any; }; handleChange: (arg0: any[]) => void; }) => {
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
              <Label className="block text-left text-sm font-medium mb-1">Seleccione los horarios disponibles para voluntariado:</Label>

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
                          className="block text-center text-sm font-medium mb-1"
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
                          className="block text-center text-sm font-medium mb-1"
                        >
                          Hora Inicio
                        </Label>
                        <InputField
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
                          className="block text-center text-sm font-medium mb-1"
                        >
                          Hora Fin
                        </Label>
                        <InputField
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
  </form.Field>

  <form.Field 
              name="observaciones"
              validators={{ onChangeAsyncDebounceMs: 500 }}
                  children={(field: {
                  state: { value: string | number | readonly string[] | undefined };
                  handleChange: (arg0: string) => void;
                  }) => (
                  <div className="mb-4 text-left">
                      <Label htmlFor="observaciones" className="block text-left text-sm font-medium mb-1">Observaciones</Label>
                      <InputField
                      id="observaciones"
                      type="text"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      />
                      {formErrors.observaciones && (
                      <p className="text-red-700 text-sm">{formErrors.observaciones}</p>
                      )}
                  </div>
                  )}
              />
    </>
);
};
