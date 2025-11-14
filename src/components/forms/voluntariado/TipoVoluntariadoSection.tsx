import { useGetTipoVoluntarios } from "../../../hooks/formularios/solicitudVoluntario";
import InputField from "../../../components/forms/InputField";
import { Label } from "@radix-ui/react-label";
import { useStore } from "@tanstack/react-form";
import { useEffect } from "react";

const TipoVoluntariadoSection = ({ form, formErrors }: any) => {
    const { tiposVoluntariado, loadingTipos } = useGetTipoVoluntarios();

    const tipoSeleccionadoId = useStore(form.store, (state: any) => state.values.tipoVoluntariado);
    const tipoSeleccionado = tiposVoluntariado?.find((tipo) => tipo.id === tipoSeleccionadoId);
    const isHoras = tipoSeleccionado?.nombre.toLowerCase().includes("horas");

    useEffect(() => {
      if (!isHoras) {
        form.setFieldValue("cantidadHoras", "0");
      }
    }, [isHoras, form]);
    return (
        <>
        <form.Field 
          name="tipoVoluntariado">
          {(field: { 
            state: { value: number | undefined }; 
            handleChange: (value: number) => void; 
          }) => (
            <div className="mb-4">
              <Label className="block text-left text-sm font-medium mb-6">
                Seleccione el tipo de voluntariado a realizar: <span className="text-red-600">*</span>
              </Label>
              {loadingTipos ? (
                <div className="flex gap-4 mb-10">
                    <div className="flex items-center">
                      <div className="h-4 w-4 rounded-full border-2 border-gray-300 border-t-amaranthPink animate-spin" />
                      <p className="ml-2 text-sm text-gray-500">Cargando tipos de voluntariado...</p>
                    </div>
                </div>
              ) : (
                <div className="flex flex-wrap gap-4 mb-10">
                  {tiposVoluntariado.map((tipo) => (
                    <div key={tipo.id} className="flex items-center">
                      <input
                        type="radio"
                        id={`tipo-${tipo.id}`}
                        name="tipoVoluntariado"
                        value={tipo.id}
                        checked={field.state.value === tipo.id}
                        onChange={() => field.handleChange(tipo.id)}
                        className="h-4 w-4 accent-amaranthPink focus:ring-amaranthPink border-gray-300"
                      />
                      <label 
                        htmlFor={`tipo-${tipo.id}`}
                        className="ml-2 block text-sm"
                      >
                        {tipo.nombre}
                      </label>
                    </div>
                  ))}
                </div>
              )}
              {formErrors.tipoVoluntariado && (
                <p className="text-red-700 text-sm mt-1">
                  {formErrors.tipoVoluntariado}
                </p>
              )}
            </div>
          )}
        </form.Field>
        {isHoras && (<form.Field name="cantidadHoras">
          {(field: { state: { value: any; }; handleChange: (arg0: number) => void; }) => (
            <div className="mb-4">
              <Label className="block text-left text-sm font-medium mb-2">
                Cantidad de horas totales a cumplir: <span className="text-red-600">*</span>
              </Label>
              <InputField
                id="cantidadHoras"
                type="number"
                min="0"
                step="1"
                placeholder="Ejemplo: 40"
                value={field.state.value}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  if (value >= 0) {
                    field.handleChange(value);
                  }
                }}
              />
              {formErrors.cantidadHoras && (
                <p className="text-red-700 text-sm mt-1">
                  {formErrors.cantidadHoras}
                </p>
              )}
            </div>
          )}
        </form.Field>
        )}
        </>
    )
}; export default TipoVoluntariadoSection;