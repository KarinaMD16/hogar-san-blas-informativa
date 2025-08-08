import { useForm } from "@tanstack/react-form";
import { useState } from "react";
import { usePostSolicitudDonacion } from "../../../hooks/formularios/solicitudDonacion";
import type { CrearSolicitudDonacionDto } from "../../../models/formularios/solicitudDonacion";
import { formDonacionSchema } from "../../../schemas/schema";
import InformacionDonanteSection from "./InformacionDonanteSection";
import DatosDonacionSection from "./DatosDonacionSection";
import { Stepper, StepperIndicator, StepperItem, StepperSeparator, StepperTrigger } from "../../ui/Stepper";
import { cn } from "../../../lib/utils";
import Boton from "../../Boton";
import ContactosDonanteSection from "./ConactosDonanteSection";
import { toast } from "sonner";

const steps = [1, 2, 3];

const FormSolicitudDonacion = () => {
    const mutation = usePostSolicitudDonacion();
    const [formErrors, setFormErrors] = useState<Record<string, string>>({});
    const [currentStep, setCurrentStep] = useState(1);

    const getFieldsForStep = (step: number): string[] => {
        switch (step) {
            case 1:
                return ['cedula', 'nombre', 'apellido1', 'apellido2'];
            case 2:
                return ['email', 'telefono'];
            case 3:
                return ['tipoDonacion', 'descripcion'];
            default:
                return [];
        }
    };

    const validateCurrentStep = async (step: number) => {
        const fields = getFieldsForStep(step);
        const errors: Record<string, string> = {};
        let isValid = true;

        const formValues = form.state.values;
        
        for (const field of fields) {
            try {
                const fieldSchema = formDonacionSchema.pick({ [field]: true } as any);
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

    const form = useForm({
        defaultValues: {
            cedula: "",
            nombre: "",
            apellido1: "",
            apellido2: "",
            telefono: "",
            email: "",
            anonimo: false,
            descripcion: "",
            tipoDonacion: "",
            observaciones: "",
        },

        onSubmit: async ({ value }: { value: CrearSolicitudDonacionDto }) => {
            const result = formDonacionSchema.safeParse(value);

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
                const result = await mutation.mutateAsync(value);
                console.log("Form submission successful:", result);
                toast.success("Solicitud de donación enviada", {
                    description: "Hemos recibido tu solicitud de donación. ¡Gracias por tu generosidad!",
                    duration: 5000,
                });
                form.reset();
                setCurrentStep(1);
            } catch (error: any) {
                console.error("Form submission error:", error);
                console.error("Error response:", error?.response);
                
                toast.error("Ocurrió un error al enviar tu solicitud de donación", {
                    description: error?.response?.data?.message || "Por favor, inténtalo de nuevo más tarde",
                    duration: 8000,
                });
            }
        },
    });
    return (
        <form onSubmit={async (event) => {
            event.preventDefault();
            await form.handleSubmit();
        }}>
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
                
                <div className="mt-4 space-y-6">
                    {currentStep === 1 && (
                        <div className="space-y-4">
                            <h3 className="text-lg font-medium text-gray-900 mb-10">Información del Donante</h3>
                            <p className="text-sm text-gray-500 text-left mb-6">Los campos marcados con <span className="text-red-600">*</span> son obligatorios</p>
                            <div className="space-y-4">
                                <InformacionDonanteSection form={form} formErrors={formErrors} />
                            </div>
                        </div>
                    )}
                    {currentStep === 2 && (
                        <div className="space-y-4">
                            <h3 className="text-lg font-medium text-gray-900 mb-10">Información de Contacto</h3>
                            <p className="text-sm text-gray-500 text-left mb-6">Los campos marcados con <span className="text-red-600">*</span> son obligatorios</p>
                            <div className="space-y-4">
                                <ContactosDonanteSection form={form} formErrors={formErrors} />
                            </div>
                        </div>
                    )}
                    {currentStep === 3 && (
                        <div className="space-y-4">
                            <h3 className="text-lg font-medium text-gray-900 mb-10">Detalles de la Donación</h3>
                            <p className="text-sm text-gray-500 text-left mb-6">Los campos marcados con <span className="text-red-600">*</span> son obligatorios</p>
                            <div className="space-y-4">
                                <DatosDonacionSection form={form} formErrors={formErrors} />
                            </div>
                        </div>
                    )}
                </div>
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
                            <Boton 
                                type="submit"
                                onClick={async (e) => {
                                    e.preventDefault();
                                    const isValid = await validateCurrentStep(currentStep);
                                    if (isValid) {
                                        await form.handleSubmit();
                                    } else {
                                        const firstErrorField = Object.keys(formErrors)[0];
                                        if (firstErrorField) {
                                            const element = document.querySelector(`[name="${firstErrorField}"]`);
                                            element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                        }
                                    }
                                }}
                            >
                                Enviar
                            </Boton>
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
export default FormSolicitudDonacion;