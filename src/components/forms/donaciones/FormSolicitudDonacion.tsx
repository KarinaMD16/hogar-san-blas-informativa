import { useForm } from "@tanstack/react-form";
import { useState } from "react";
import { usePostSolicitudDonacion } from "../../../hooks/formularios/solicitudDonacion";
import type { CrearSolicitudDonacionDto } from "../../../models/formularios/solicitudDonacion";
import { formDonacionSchema } from "../../../schemas/schema";
import DatosPersonalesSection from "../DatosPersonalesSection";
import DatosDonacionSection from "./DatosDonacionSection";
import { Stepper, StepperIndicator, StepperItem, StepperSeparator, StepperTrigger } from "../../ui/Stepper";
import { cn } from "../../../lib/utils";
import Boton from "../../Boton";

const steps = [1, 2];

const FormSolicitudDonacion = () => {
    const mutation = usePostSolicitudDonacion();
    const [formErrors, setFormErrors] = useState<Record<string, string>>({});
    const [currentStep, setCurrentStep] = useState(1);

    const form = useForm({
        defaultValues: {
            nombre: "",
            apellido1: "",
            apellido2: "",
            email: "",
            telefono: "",
            anonimo: false,
            tipoDonacion: "",
            descripcion: "",
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
                await mutation.mutateAsync(value);
                alert("Formulario enviado con éxito");
                form.reset();
            } catch (error) {
                console.error(error);
                setFormErrors({ error: "Error al enviar formulario" });
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
                        <>
                        <div className="space-y-4">
                            <h3 className="text-lg font-medium text-gray-900 mb-10">Información Personal</h3>
                            <div className="space-y-4">
                                <DatosPersonalesSection form={form} formErrors={formErrors} />
                            </div>
                        </div>
                        
                        <form.Field name="anonimo" children={(field: { state: { value: boolean | undefined; }; handleChange: (arg0: boolean) => void; }) => (
                        <div className="mb-4">
                            <label htmlFor="anonimo" className="flex items-center gap-2 cursor-pointer">
                                <div className="relative">
                                    <input
                                        id="anonimo"
                                        type="checkbox"
                                        className="absolute opacity-0 h-0 w-0"
                                        checked={field.state.value}
                                        onChange={(e) => field.handleChange(e.target.checked)}
                                    />
                                    <span className={`
                                        h-4 w-4 rounded border border-gray-300 
                                        flex items-center justify-center flex-shrink-0
                                        ${field.state.value ? 'bg-amaranthPink border-amaranthPink' : 'bg-white'}
                                    `}>
                                        {field.state.value && (
                                            <svg className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        )}
                                    </span>
                                </div>
                                <span className="text-gray-700">Deseo que mi donación sea anónima</span>
                            </label>
                            {formErrors.anonimo && (
                                <p className="text-red-700 text-sm">{formErrors.anonimo}</p>
                            )}
                        </div>
                    )} />
                    </>
                    )}
                    {currentStep === 2 && (
                        <div className="space-y-4">
                            <h3 className="text-lg font-medium text-gray-900 mb-10">Detalles de la Donación</h3>
                            <div className="space-y-4">
                                <DatosDonacionSection form={form} formErrors={formErrors} />
                            </div>
                        </div>
                    )}
                </div>
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
                            onClick={async () => setCurrentStep((prev) => prev + 1)}
                        >
                            Siguiente
                        </Boton>
                    ) : (
                        <Boton
                            onClick={async () => form.handleSubmit()}
                        >
                            Enviar
                        </Boton>
                    )}
                </div>
            </div>
        </form>
    );
};
export default FormSolicitudDonacion;