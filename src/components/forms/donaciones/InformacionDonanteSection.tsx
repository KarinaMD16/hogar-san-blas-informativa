import InputField from "../InputField";
import { Label } from "@radix-ui/react-label";

export const InformacionDonanteSection = ({ form, formErrors }: any) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <form.Field 
            name="nombre"
            validators={{ onChangeAsyncDebounceMs: 500 }}
                children={(field: {
                state: { value: string | number | readonly string[] | undefined };
                handleChange: (arg0: string) => void;
                }) => (
                <div className="space-y-1">
                    <Label htmlFor="nombre" className="block text-left text-sm font-medium mb-1">
                        Nombre <span className="text-red-600">*</span>
                    </Label>
                    <InputField
                        id="nombre"
                        type="text"
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        className="w-full"
                        placeholder="Ingrese su nombre"
                        maxLength={30}
                    />
                    {formErrors.nombre && (
                        <p className="text-red-700 text-sm mt-1">{formErrors.nombre}</p>
                    )}
                </div>
            )}
        />
        <form.Field 
            name="apellido1"
            validators={{ onChangeAsyncDebounceMs: 500 }}
            children={(field: {
            state: { value: string | number | readonly string[] | undefined };
            handleChange: (arg0: string) => void;
            }) => (
                <div className="space-y-1">
                    <Label htmlFor="apellido1" className="block text-left text-sm font-medium mb-1">
                        Primer Apellido <span className="text-red-600">*</span>
                    </Label>
                    <InputField
                        id="apellido1"
                        type="text"
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        className="w-full"
                        placeholder="Ingrese su primer apellido"
                        maxLength={20}
                    />
                    {formErrors.apellido1 && (
                        <p className="text-red-700 text-sm mt-1">{formErrors.apellido1}</p>
                    )}
                </div>
            )}
        />
        <form.Field 
            name="apellido2"
            validators={{ onChangeAsyncDebounceMs: 500 }}
                children={(field: {
                state: { value: string | number | readonly string[] | undefined };
                handleChange: (arg0: string) => void;
                }) => (
            <div className="space-y-1">
                <Label htmlFor="apellido2" className="block text-left text-sm font-medium mb-1">
                    Segundo Apellido
                </Label>
                <InputField
                    id="apellido2"
                    type="text"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className="w-full"
                    placeholder="Ingrese su segundo apellido (opcional)"
                    maxLength={20}
                />
                {formErrors.apellido2 && (
                    <p className="text-red-700 text-sm mt-1">{formErrors.apellido2}</p>
                )}
            </div>
            )}
        />
        <form.Field 
            name="cedula"
            validators={{ onChangeAsyncDebounceMs: 500 }}
                children={(field: {
                state: { value: string | number | readonly string[] | undefined };
                handleChange: (arg0: string) => void;
                }) => (
            <div className="space-y-1">
                <Label htmlFor="cedula" className="block text-left text-sm font-medium mb-1">
                    Cédula <span className="text-red-600">*</span>
                </Label>
                <InputField
                    id="cedula"
                    type="text"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className="w-full"
                    placeholder="Ingrese su número de cédula"
                    maxLength={20}
                />
                {formErrors.cedula && (
                    <p className="text-red-700 text-sm mt-1">{formErrors.cedula}</p>
                )}
            </div>
            )}
        ></form.Field>
        <form.Field name="anonimo" children={(field: { state: { value: boolean | undefined; }; handleChange: (arg0: boolean) => void; }) => (
            <div className="mb-4">
                <div className="flex items-center gap-2">
                    <label htmlFor="anonimo" className="flex items-center gap-2 cursor-pointer whitespace-nowrap">
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
                        <span>Deseo que mi donación sea anónima</span>
                    </label>
                    <span className="text-gray-500 text-sm whitespace-nowrap">(Su nombre no aparecerá en nuestros registros públicos)</span>
                </div>
                {formErrors.anonimo && (
                    <p className="text-red-700 text-sm mt-1">{formErrors.anonimo}</p>
                )}
            </div>
        )} />
        </div>
    );
}; export default InformacionDonanteSection