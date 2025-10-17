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
import { Loader2 } from "lucide-react";

const steps = [1, 2, 3];

const FormSolicitudDonacion = () => {
    const mutation = usePostSolicitudDonacion();
    const [formErrors, setFormErrors] = useState<Record<string, string>>({});
    const [currentStep, setCurrentStep] = useState(1);
    const [touchedSteps, setTouchedSteps] = useState<Set<number>>(new Set());

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

    const validateStep = (step: number): { isValid: boolean; errors: Record<string, string> } => {
        const fields = getFieldsForStep(step);
        const errors: Record<string, string> = {};
        const formValues = form.state.values;
        
        for (const field of fields) {
            try {
                const fieldSchema = formDonacionSchema.pick({ [field]: true } as any);
                const result = fieldSchema.safeParse({ [field]: formValues[field as keyof typeof formValues] });
                
                if (!result.success) {
                    const error = result.error.issues[0];
                    errors[field] = error.message;
                }
            } catch (error) {
                errors[field] = "Error al validar este campo";
            }
        }

        return {
            isValid: Object.keys(errors).length === 0,
            errors
        };
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
                
                // Regresar al primer paso con errores
                const stepWithError = [1, 2, 3].find(step => 
                    getFieldsForStep(step).some(field => fieldErrors[field])
                );
                if (stepWithError) {
                    setCurrentStep(stepWithError);
                    setTouchedSteps(prev => new Set([...prev, stepWithError]));
                }
                
                toast.error("Por favor completa todos los campos requeridos");
                return;
            }

            const loadingToast = toast.loading("Enviando solicitud...");

            try {
                await mutation.mutateAsync(value);
                toast.dismiss(loadingToast);
                toast.success("Solicitud de donación enviada", {
                    description: "Hemos recibido tu solicitud de donación. ¡Gracias por tu generosidad!",
                    duration: 5000,
                });
                form.reset();
                setCurrentStep(1);
                setFormErrors({});
                setTouchedSteps(new Set());
            } catch (error: any) {
                toast.dismiss(loadingToast);
                toast.error("Ocurrió un error al enviar tu solicitud de donación", {
                    description: error?.response?.data?.message || "Por favor, inténtalo de nuevo más tarde",
                    duration: 8000,
                });
            }
        },
    });

    const handleNext = () => {
        setTouchedSteps(prev => new Set([...prev, currentStep]));
        
        const { isValid, errors } = validateStep(currentStep);
        
        if (isValid) {
            setFormErrors(prev => {
                const newErrors = { ...prev };
                getFieldsForStep(currentStep).forEach(field => {
                    delete newErrors[field];
                });
                for (let step = currentStep + 1; step <= steps.length; step++) {
                    getFieldsForStep(step).forEach(field => {
                        delete newErrors[field];
                    });
                }
                return newErrors;
            });
            setCurrentStep(prev => prev + 1);
        } else {
            setFormErrors(prev => {
                const newErrors = { ...prev };
                getFieldsForStep(currentStep).forEach(field => {
                    delete newErrors[field];
                });
                return { ...newErrors, ...errors };
            });
            
            const firstErrorField = getFieldsForStep(currentStep).find(field => errors[field]);
            if (firstErrorField) {
                setTimeout(() => {
                    const element = document.querySelector(`[name="${firstErrorField}"]`);
                    element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 100);
            }
        }
    };

    const handlePrevious = () => {
        setFormErrors(prev => {
            const newErrors = { ...prev };
            getFieldsForStep(currentStep).forEach(field => {
                delete newErrors[field];
            });
            return newErrors;
        });
        setCurrentStep(prev => prev - 1);
    };

    const handleSubmit = async () => {
        setTouchedSteps(prev => new Set([...prev, currentStep]));
        
        const { isValid, errors } = validateStep(currentStep);
        
        if (isValid) {
            setFormErrors(prev => {
                const newErrors = { ...prev };
                getFieldsForStep(currentStep).forEach(field => {
                    delete newErrors[field];
                });
                return newErrors;
            });
            await form.handleSubmit();
        } else {
            setFormErrors(prev => {
                const newErrors = { ...prev };
                getFieldsForStep(currentStep).forEach(field => {
                    delete newErrors[field];
                });
                return { ...newErrors, ...errors };
            });
            
            const firstErrorField = getFieldsForStep(currentStep).find(field => errors[field]);
            if (firstErrorField) {
                setTimeout(() => {
                    const element = document.querySelector(`[name="${firstErrorField}"]`);
                    element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 100);
            }
        }
    };

    const shouldShowErrors = touchedSteps.has(currentStep);
    const currentStepFields = getFieldsForStep(currentStep);
    const currentStepErrors = shouldShowErrors 
        ? currentStepFields.filter(field => formErrors[field])
        : [];

    return (
        <form 
            onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
            }}
        >
            <div className="mx-auto max-w-2xl space-y-8">
                <Stepper 
                    value={currentStep} 
                    onValueChange={(value) => {
                        if (value < currentStep) {
                            setCurrentStep(value);
                        }
                    }}
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
                            <p className="text-sm text-gray-500 text-left mb-6">
                                Los campos marcados con <span className="text-red-600">*</span> son obligatorios
                            </p>
                            <div className="space-y-4">
                                <InformacionDonanteSection 
                                    form={form} 
                                    formErrors={shouldShowErrors ? formErrors : {}} 
                                />
                            </div>
                        </div>
                    )}
                    {currentStep === 2 && (
                        <div className="space-y-4">
                            <h3 className="text-lg font-medium text-gray-900 mb-10">Información de Contacto</h3>
                            <p className="text-sm text-gray-500 text-left mb-6">
                                Los campos marcados con <span className="text-red-600">*</span> son obligatorios
                            </p>
                            <div className="space-y-4">
                                <ContactosDonanteSection 
                                    form={form} 
                                    formErrors={shouldShowErrors ? formErrors : {}} 
                                />
                            </div>
                        </div>
                    )}
                    {currentStep === 3 && (
                        <div className="space-y-4">
                            <h3 className="text-lg font-medium text-gray-900 mb-10">Detalles de la Donación</h3>
                            <p className="text-sm text-gray-500 text-left mb-6">
                                Los campos marcados con <span className="text-red-600">*</span> son obligatorios
                            </p>
                            <div className="space-y-4">
                                <DatosDonacionSection 
                                    form={form} 
                                    formErrors={shouldShowErrors ? formErrors : {}} 
                                />
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
                                onClick={handlePrevious}
                                disabled={mutation.isPending}
                            >
                                Anterior
                            </Boton>
                        ) : <div></div>}
                        
                        {currentStep < steps.length ? (
                            <Boton
                                type="button"
                                onClick={handleNext}
                            >
                                Siguiente
                            </Boton>
                        ) : (
                            <Boton 
                                type="button"
                                onClick={handleSubmit}
                                disabled={mutation.isPending}
                            >
                                {mutation.isPending ? (
                                    <div className="flex items-center">
                                        <Loader2 className="mr-2" />
                                        Enviando...
                                    </div>
                                ) : (
                                    "Enviar"
                                )}
                            </Boton>
                        )}
                    </div>
                    
                    {currentStepErrors.length > 0 && (
                        <div className="mt-4 text-center text-sm text-red-600">
                            {currentStep < steps.length 
                                ? "Por favor completa todos los campos obligatorios antes de continuar"
                                : "Por favor completa todos los campos obligatorios"
                            }
                        </div>
                    )}
                </div>
            </div>
        </form>
    );
};

export default FormSolicitudDonacion;