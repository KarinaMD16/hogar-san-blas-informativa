import { useState } from "react";
import { useForm } from "@tanstack/react-form";
import { usePostSolicitudVoluntario } from "../../../hooks/formularios/solicitudVoluntario";
import type { CrearSolicitudPendienteDto } from "../../../models/formularios/solicitudVoluntario";
import { formVoluntarioSchema } from "../../../schemas/schema";
import Boton from "../../Boton";
import { ContactoEmergenciaSection } from "./ContactoEmergenciaSection";
import DatosPersonalesSection from "../DatosPersonalesSection";
import { HorariosDisponiblesSection } from "./HorariosDisponiblesSection";
import OtrosDatosSection from "./OtrosDatosSection";
import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTrigger,
} from "../../ui/Stepper"
import { cn } from "../../../lib/utils";
import TipoVoluntariadoSection from "./TipoVoluntariadoSection";

const steps = [1, 2, 3, 4, 5];

const FormSolicitudVoluntariado = () => {
  const mutation = usePostSolicitudVoluntario();
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [currentStep, setCurrentStep] = useState(1);

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
      cantidadHoras: 0,
      contactosEmergencia: [{ nombre: "", telefono: "" }],
      horarios: [{ dia: "", horaInicio: "", horaFin: "" }],
      observaciones: ""
    },

    onSubmit: async ({ value }: { value: CrearSolicitudPendienteDto }) => {
      if (value.horarios && value.horarios.length > 0) {
        value.horarios = value.horarios.filter(
          (h) => h.dia && h.horaInicio && h.horaFin
        );
      }

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
        form.reset();
      } catch (error) {
        console.error(error);
        setFormErrors({ error: "Error al enviar formulario" });
      }
    },
  })

  return (
    <form 
      onSubmit={async (event) => {
        event.preventDefault();
        if (currentStep === steps.length) {
          await form.handleSubmit();
        }
      }}
    >
      <div className="mx-auto max-w-2xl space-y-8">
        <Stepper 
          value={currentStep} 
          onValueChange={setCurrentStep}
          className="flex items-center justify-between w-full"
        >
          {steps.map((step) => (
            <StepperItem key={step} step={step} className="not-last:flex-1">
              <StepperTrigger asChild>
                <StepperIndicator 
                  className={cn(
                    "border-2 border-amaranthPink",
                    "data-[state=active]:bg-amaranthPink data-[state=active]:text-white",
                    "data-[state=inactive]:bg-white data-[state=inactive]:text-amaranthPink",
                    "data-[state=completed]:bg-amaranthPink data-[state=completed]:text-white"
                  )} 
                />
              </StepperTrigger>
              {step < steps.length && <StepperSeparator className="bg-amaranthPink h-0.5" />}
            </StepperItem>
          ))}
        </Stepper>
        {currentStep === 1 && (
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900 mb-10">Información Personal</h3>
            <DatosPersonalesSection form={form} formErrors={formErrors} />
          </div>
        )}
        {currentStep === 2 && (
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900 mb-6">Otros Datos</h3>
              <OtrosDatosSection form={form} formErrors={formErrors} />
            </div>
          </div>
        )}
        {currentStep === 3 && (
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900 mb-10">Contacto de Emergencia</h3>
            <ContactoEmergenciaSection form={form} formErrors={formErrors} />
          </div>
        )}
        {currentStep === 4 && (
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900 mb-10">Tipo de Voluntariado</h3>
            <TipoVoluntariadoSection form={form} formErrors={formErrors} />
          </div>
        )}
        {currentStep === 5 && (
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900 mb-10">Horarios Disponibles</h3>
            <HorariosDisponiblesSection form={form} formErrors={formErrors} />
          </div>
        )}
        <div className="flex justify-end space-x-4 pt-6">
          {currentStep > 1 && (
            <Boton
              variant="outline"
              onClick={() => setCurrentStep((prev) => prev - 1)}
            >
              Anterior
            </Boton>
          )}
          {currentStep < steps.length ? (
            <Boton
              onClick={() => setCurrentStep((prev) => prev + 1)}
            >
              Siguiente
            </Boton>
          ) : (
            <form.Subscribe
              selector={(state) => [state.canSubmit, state.isSubmitting]}
              children={([canSubmit, isSubmitting]) => (
                <Boton type="submit" disabled={!canSubmit || isSubmitting}>
                  {isSubmitting ? "Enviando..." : "Enviar"}
                </Boton>
              )}
            />
          )}
        </div>
      </div>
    </form>
  );
};

export default FormSolicitudVoluntariado;