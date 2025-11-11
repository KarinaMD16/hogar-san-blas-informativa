import InputField from "../../../components/forms/InputField";
import { Label } from "@radix-ui/react-label";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../../DropdownMenu";
import { Popover, PopoverContent, PopoverTrigger } from "../../Popover";
import { CirclePlus, Clock } from "lucide-react";
import { Command, CommandGroup, CommandItem } from "../../Command";

const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
const generarHoras = () => {
  const times: string[] = [];
  for (let h = 7; h <= 17; h++) {
    times.push(`${h.toString().padStart(2, "0")}:00`);
    if (h < 17) times.push(`${h.toString().padStart(2, "0")}:30`);
  }
  return times;
};

export const HorariosDisponiblesSection = ({ form, formErrors }: any) => {
  const horas = generarHoras();
  
  return (
    <>
      <form.Field
        name="horarios"
        validators={{ onChangeAsyncDebounceMs: 500 }}
        children={(field: any) => {
          const horarios = Array.isArray(field.state.value) ? field.state.value : [];

          const addHorario = () => {
            field.handleChange([...horarios, { dia: "", horaInicio: "", horaFin: "" }]);
          };

          const removeHorario = (index: number) => {
            const nuevos = horarios.filter((_: any, i: any) => i !== index);
            field.handleChange(nuevos);
          };

          const updateHorario = (index: number, key: "dia" | "horaInicio" | "horaFin", value: string) => {
            const nuevos = horarios.map((h: any, i: any) => (i === index ? { ...h, [key]: value } : h));
            field.handleChange(nuevos);
          };

          const diasUsadosPorIndex = horarios.map((_: any, index: any) => {
            return horarios
              .filter((_: any, i: any) => i !== index)
              .map((h: any) => h.dia)
              .filter((d: any) => d);
          });

          return (
            <div className="mb-4">
            <Label htmlFor="observaciones" className="block text-left text-sm font-medium mb-1">
              Horarios disponibles para voluntariado <span className="text-red-600">*</span>
            </Label>

              {horarios.length === 0 && (
                <p className="text-gray-500 text-sm mb-2">No hay horarios agregados</p>
              )}

              {horarios.map((horario: any, index: any) => {
                const diasUsados = diasUsadosPorIndex[index] || [];

                const horasFinFiltradas = horario.horaInicio
                  ? horas.filter((h: any) => h > horario.horaInicio)
                  : horas;

                return (
                  <div
                    key={index}
                    className="mb-3 p-3 border border-gray-200 rounded-md bg-gray-200/10"
                  >
                    <div className="flex justify-between mb-2">
                      <h4 className="text-sm font-medium">Horario {index + 1}</h4>
                      <button
                        type="button"
                        onClick={() => removeHorario(index)}
                        className="text-red-600 text-xs hover:cursor-pointer"
                      >
                        Eliminar
                      </button>
                    </div>

                    <div className="grid grid-cols-3 gap-3 items-center">
                      <div>
                        <Label
                          htmlFor={`horario-dia-${index}`}
                          className="text-sm block mb-1"
                        >
                          Día
                        </Label>
                        <DropdownMenu>
                          <DropdownMenuTrigger className="w-full text-left px-3 py-2 border rounded-md hover:cursor-pointer">
                            {horario.dia || "Seleccionar día"}
                          </DropdownMenuTrigger>

                          <DropdownMenuContent>
                            {dias.map((dia) => (
                              <DropdownMenuItem
                                key={dia}
                                className={`hover:cursor-pointer ${diasUsados.includes(dia)
                                  ? "text-gray-400 pointer-events-none select-none"
                                  : ""
                                  }`}
                                onSelect={() => updateHorario(index, "dia", dia)}
                              >
                                {dia}
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>

                        <div className="w-full">
                          <Label
                            htmlFor={`horario-inicio-${index}`}
                            className="text-sm block mb-1"
                          >
                            Hora Inicio
                          </Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <button
                                type="button"
                                className="w-full flex items-center justify-between px-3 py-2 text-black border border-gray-200 rounded-md hover:bg-gray-50"
                              >
                                <span>{horario.horaInicio || "--:--"}</span>
                                <Clock size={18} className="text-gray-500" />
                              </button>
                            </PopoverTrigger>
                            <PopoverContent
                              className="p-0 w-40 scrollbar-thin scrollbar-thumb-ecruYellow scrollbar-track-transparent"
                              style={{ maxHeight: 200, overflowY: "auto" }}
                            >
                              <Command>
                                <CommandGroup>
                                  {horas.map((time) => (
                                    <CommandItem 
                                      key={time}
                                      value={time}
                                      onSelect={(value) =>
                                          updateHorario(index, "horaInicio", value)
                                        }
                                        className="cursor-pointer text-black hover:bg-gray-100"
                                      >
                                        {time}
                                      </CommandItem>
                                    ))}
                                </CommandGroup>
                              </Command>
                            </PopoverContent>
                          </Popover>
                        </div>

                        <div className="w-full">
                          <Label
                            htmlFor={`horario-fin-${index}`}
                            className="text-sm block mb-1"
                          >
                            Hora Fin
                          </Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <button
                                type="button"
                                className="w-full flex items-center justify-between px-3 py-2 text-black border border-gray-200 rounded-md hover:bg-gray-50"
                                disabled={!horario.horaInicio}
                              >
                                <span>{horario.horaFin || "--:--"}</span>
                                <Clock size={18} className="text-gray-500" />
                              </button>
                            </PopoverTrigger>
                            <PopoverContent
                              className="p-0 w-40 scrollbar-thin scrollbar-thumb-ecruYellow scrollbar-track-transparent"
                              style={{ maxHeight: 200, overflowY: "auto" }}
                            >
                              <Command>
                                <CommandGroup>
                                  {horasFinFiltradas.map((time) => (
                                    <CommandItem
                                        key={time}
                                        value={time}
                                        onSelect={(value) =>
                                          updateHorario(index, "horaFin", value)
                                        }
                                        className="cursor-pointer text-black hover:bg-gray-100"
                                      >
                                        {time}
                                      </CommandItem>
                                    ))}
                                </CommandGroup>
                              </Command>
                            </PopoverContent>
                          </Popover>
                        </div>
                      </div>
                    </div>
                );
              })}

              <div className="flex items-center justify-center w-full">
                <button
                  type="button"
                  onClick={addHorario}
                  className="flex items-center gap-3 hover:cursor-pointer mt-2 py-1 px-3 bg-blue-100 text-blue-700 text-sm rounded-md"
                  disabled={horarios.length >= dias.length}
                  title={
                    horarios.length >= dias.length
                      ? "No quedan días disponibles"
                      : undefined
                  }
                >
                  <CirclePlus size={15} />
                  Agregar horario
                </button>
              </div>

              <p className="text-sm text-gray-500 mt-1">
                Solo se guardarán los horarios donde todos los campos estén completos.
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
