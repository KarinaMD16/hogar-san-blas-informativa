import InputField from "../../../components/forms/InputField";
import { Label } from "@radix-ui/react-label";

const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

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

          const validateTime = (time: string): string => {
            if (!time) return '';
            
            // Remove any non-digit characters and split into hours and minutes
            const cleaned = time.replace(/[^\d:]/g, '');
            const match = cleaned.match(/^(\d{1,2}):?(\d{0,2})$/);
            
            if (!match) return '';
            
            let hours = parseInt(match[1]) || 0;
            let minutes = parseInt(match[2]) || 0;
            
            // Validate hours (7-15)
            if (hours < 7) hours = 7;
            if (hours > 15) hours = 15;
            
            // Validate minutes (0-59)
            if (minutes < 0) minutes = 0;
            if (minutes > 59) minutes = 59;
            
            // Special case: if hours is 15, minutes must be 00
            if (hours === 15) minutes = 0;
            
            return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
          };

          const updateHorario = (
            index: number,
            key: "dia" | "horaInicio" | "horaFin",
            value: string
          ) => {
            if (key === "horaInicio" || key === "horaFin") {
              value = validateTime(value);
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
              <Label className="block text-left text-sm font-medium mb-1">
                Horarios disponibles para voluntariado 
              </Label>

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
                        Dia {index + 1}
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
                          <option className="hover:cursor-pointer" value="">Seleccionar día</option>
                          {dias.map((dia, index) => (
                            <option key={index} className="hover:cursor-pointer" value={dia}>{dia}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <Label
                          htmlFor={`horario-inicio-${index}`}
                          className="block text-center text-sm font-medium mb-1"
                        >
                          Hora Inicio (mín 07:00)
                        </Label>
                        <InputField
                          id={`horario-inicio-${index}`}
                          type="time"
                          min="07:00"
                          max="15:00"
                          placeholder="07:00"
                          value={horario.horaInicio}
                          onChange={(e) =>
                            updateHorario(
                              index,
                              "horaInicio",
                              e.target.value
                            )
                          }
                          step={60}
                          className="time-input"
                        />
                      </div>

                      <div>
                        <Label
                          htmlFor={`horario-fin-${index}`}
                          className="block text-center text-sm font-medium mb-1"
                        >
                          Hora Fin (máx 15:00)
                        </Label>
                        <InputField
                          id={`horario-fin-${index}`}
                          type="time"
                          min="07:00"
                          max="15:00"
                          placeholder="15:00"
                          value={horario.horaFin}
                          onChange={(e) =>
                            updateHorario(index, "horaFin", e.target.value)
                          }
                          step={60}
                          className="time-input"
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
                      <Label htmlFor="observaciones" className="block text-left text-sm font-medium mb-1">
                        Observaciones <span className="text-gray-400">(Opcional)</span>
                      </Label>
                      <InputField
                        id="observaciones"
                        type="text"
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder="Alguna información adicional sobre su disponibilidad o voluntariado"
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
