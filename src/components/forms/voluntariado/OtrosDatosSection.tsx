import InputField from "../../../components/forms/InputField";
import { Label } from "@radix-ui/react-label";

export const OtrosDatosSection = ({ form, formErrors }: any) => {
    return (
        <div className="space-y-6 text-left">
            <form.Field 
            name="sexo"
            children={(field: { state: { value: string; }; handleChange: (arg0: string) => void; }) => (
                <div className="mb-8">
                    <Label className="block text-left text-sm font-medium mb-4">Sexo</Label>
                    <div className="flex flex-wrap gap-4">
                        {[
                            { id: 'F', label: 'Femenino' },
                            { id: 'M', label: 'Masculino' }
                        ].map((opcion) => (
                            <div key={opcion.id} className="flex items-center">
                                <input
                                    type="radio"
                                    id={`sexo${opcion.id}`}
                                    name="sexo"
                                    value={opcion.id}
                                    checked={field.state.value === opcion.id}
                                    onChange={() => field.handleChange(opcion.id)}
                                    className="h-4 w-4 accent-amaranthPink focus:ring-amaranthPink border-gray-300"
                                />
                                <label 
                                    htmlFor={`sexo${opcion.id}`}
                                    className="ml-2 block text-sm text-gray-700"
                                >
                                    {opcion.label}
                                </label>
                            </div>
                        ))}
                    </div>
                    {formErrors.sexo && (
                        <p className="text-red-700 text-sm mt-1">
                            {formErrors.sexo}
                        </p>
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
                    <div>
                        <Label htmlFor="ocupacion" className="block text-left text-sm font-medium mb-1">Ocupación</Label>
                        <InputField
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
                    <div>
                        <Label htmlFor="direccion" className="block text-left text-sm font-medium mb-1">Dirección</Label>
                        <InputField
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
        <form.Field
            name="experienciaLaboral"
            validators={{ onChangeAsyncDebounceMs: 500 }}
            children={(field: {
                state: { value: string | number | readonly string[] | undefined };
                handleChange: (arg0: string) => void;
            }) => (
                <div className="mb-4">
                    <Label htmlFor="experienciaLaboral" className="block text-left text-sm font-medium mb-1">Experiencia Laboral</Label>
                    <InputField
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
        </div>
    );
};

export default OtrosDatosSection;