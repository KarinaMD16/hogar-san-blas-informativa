import { useState } from "react";
import { useForm } from "@tanstack/react-form";
import { usePostSolicitudVoluntario } from "../../../hooks/formularios/solicitudVoluntario";
import type { CrearSolicitudPendienteDto } from "../../../models/formularios/solicitudVoluntario";
import { formVoluntarioSchema } from "../../../schemas/schema";
import Boton from "../../Boton";
import { ContactoEmergenciaSection } from "./ContactoEmergenciaSection";
import DatosPersonalesSection from "./DatosPersonalesSection";
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
import { toast } from "sonner";

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
      sexo: "",
      experienciaLaboral: "",
      tipoVoluntariado: 0,
      cantidadHoras: undefined,
      contactosEmergencia: [{ nombre: "", telefono: "" }],
      horarios: [],
      observaciones: ""
    },
    onSubmit: async ({ value }: { value: CrearSolicitudPendienteDto }) => {
  // First filter the horarios
  const filteredHorarios = value.horarios?.filter(
    (h) => h.dia && h.horaInicio && h.horaFin
  );

  // Create form data without modifying the original value
  const formData = {
    ...value,
    horarios: filteredHorarios || [],
    // Convert cantidadHoras to number and handle empty/undefined
    cantidadHoras: value.cantidadHoras ? Number(value.cantidadHoras) : undefined
  };

  // Remove cantidadHoras if it's 0, "0", or undefined
  if (formData.cantidadHoras === 0 || formData.cantidadHoras?.toString() === "0" || formData.cantidadHoras === undefined) {
    delete formData.cantidadHoras;
  }

  // Determine if we should validate cantidadHoras
  const shouldValidateCantidadHoras = formData.tipoVoluntariado && 
    formData.tipoVoluntariado.toString().toLowerCase().includes('horas');
  
  // Apply schema with or without cantidadHoras validation
  const submissionSchema = shouldValidateCantidadHoras
    ? formVoluntarioSchema
    : formVoluntarioSchema.omit({ cantidadHoras: true });
  
  // Validate the form data
  const result = submissionSchema.safeParse(formData);

  if (!result.success) {
    const fieldErrors: Record<string, string> = {};
    result.error.issues.forEach((issue) => {
      const path = issue.path.join('.');
      fieldErrors[path] = issue.message;
    });
    setFormErrors(fieldErrors);
    return;
  }

  try {
    // Send the form data (without cantidadHoras if it was 0/undefined)
    const result = await mutation.mutateAsync(formData);
    console.log("Form submission successful:", result);
    toast.success("Solicitud de voluntario enviada", {
      description: "Se te enviará un aviso a tu correo electrónico sobre el estado de tu solicitud",
      duration: 8000,
    });
    form.reset();
    setCurrentStep(1);
  } catch (error: any) {
    console.error("Form submission error:", error);
    console.error("Error response:", error?.response);
    
    toast.error("Ocurrió un error al enviar tu solicitud de voluntario", {
      description: "Vuelve a intentarlo más tarde",
      duration: 8000,
    });
  }
},
  });

  const validateCurrentStep = async (step: number): Promise<boolean> => {
    const fields = getFieldsForStep(step);
    const errors: Record<string, string> = {};
    let isValid = true;

    const formValues = form.state.values;

    const shouldValidateCantidadHoras = fields.includes('cantidadHoras') && 
      formValues.tipoVoluntariado && 
      formValues.tipoVoluntariado.toString().toLowerCase().includes('horas');

    const fieldsToValidate = shouldValidateCantidadHoras 
      ? fields 
      : fields.filter(field => field !== 'cantidadHoras');
    
    for (const field of fieldsToValidate) {
      try {
        if (field === 'cantidadHoras' && shouldValidateCantidadHoras) {
          if (!formValues.cantidadHoras || formValues.cantidadHoras < 1) {
            errors[field] = 'Debe ingresar una cantidad de horas';
            isValid = false;
            continue;
          }
        }
        
        const fieldSchema = formVoluntarioSchema.pick({ [field]: true } as any);
        const result = fieldSchema.safeParse({ [field]: formValues[field as keyof typeof formValues] });
        
        if (!result.success) {
          isValid = false;
          const error = result.error.issues[0];
          errors[field] = error.message;
        }
      } catch (error) {
        isValid = false;
        errors[field] = "Error al validar este campo";
      }
    }

    if (!isValid) {
      setFormErrors(prev => ({
        ...prev,
        ...errors
      }));
    } else {      
      const newErrors = { ...formErrors };
      fields.forEach(field => {
        delete newErrors[field];
      });
      setFormErrors(newErrors);
    }

    return isValid;
  };

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
            <h3 className="text-lg font-medium text-gray-900 mb-4">Información Personal</h3>
            <p className="text-sm text-gray-500 text-left mb-6">Los campos marcados con <span className="text-red-600">*</span> son obligatorios</p>
            <DatosPersonalesSection form={form} formErrors={formErrors} />
          </div>
        )}
        {currentStep === 2 && (
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Otros Datos</h3>
              <p className="text-sm text-gray-500 text-left mb-6">Los campos marcados con <span className="text-red-600">*</span> son obligatorios</p>
              <OtrosDatosSection form={form} formErrors={formErrors} />
            </div>
          </div>
        )}
        {currentStep === 3 && (
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Contacto de Emergencia</h3>
            <p className="text-sm text-gray-500 text-left mb-6">Los campos marcados con <span className="text-red-600">*</span> son obligatorios</p>
            <ContactoEmergenciaSection form={form} formErrors={formErrors} />
          </div>
        )}
        {currentStep === 4 && (
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Tipo de Voluntariado</h3>
            <p className="text-sm text-gray-500 text-left mb-6">Los campos marcados con <span className="text-red-600">*</span> son obligatorios</p>
            <TipoVoluntariadoSection form={form} formErrors={formErrors} />
          </div>
        )}
        {currentStep === 5 && (
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Horarios Disponibles</h3>
            <p className="text-sm text-gray-500 text-left mb-6">Los campos marcados con <span className="text-red-600">*</span> son obligatorios</p>
            <HorariosDisponiblesSection form={form} formErrors={formErrors} />
          </div>
        )}
        <div className="mt-8">
          <div className={`flex ${currentStep === 1 ? 'justify-end' : 'justify-between'}`}>
            {currentStep > 1 ? (
              <Boton
                type="button"
                variant="outline"
                onClick={() => setCurrentStep(prev => prev - 1)}
              >
                Anterior
              </Boton>
            ) : <div></div>}
            {currentStep < steps.length ? (
              <Boton
                type="button"
                onClick={async () => {
                  const isValid = await validateCurrentStep(currentStep);
                  if (isValid) {
                    setCurrentStep(prev => prev + 1);
                  } else {
                    const firstErrorField = Object.keys(formErrors)[0];
                    if (firstErrorField) {
                      const element = document.querySelector(`[name="${firstErrorField}"]`);
                      element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                  }
                }}
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
          {Object.keys(formErrors).length > 0 && (
            <div className="mt-4 text-center text-sm text-red-600">
              Por favor completa todos los campos obligatorios antes de continuar
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

function getFieldsForStep(step: number): string[] {
  switch (step) {
    case 1: 
      return ['nombre', 'apellido1', 'cedula', 'email', 'telefono'];
    case 2: 
      return ['ocupacion', 'direccion', 'sexo'];
    case 3: 
      return ['contactosEmergencia'];
    case 4: 
      return ['tipoVoluntariado', 'cantidadHoras'];
    case 5: 
      return ['horarios'];
    default:
      return [];
  }
}

export default FormSolicitudVoluntariado;