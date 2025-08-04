import InputField from "../InputField";
import { Label } from "@radix-ui/react-label";

export const DatosPersonalesSection = ({ form, formErrors }: any) => {
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
                />
                {formErrors.cedula && (
                    <p className="text-red-700 text-sm mt-1">{formErrors.cedula}</p>
                )}
            </div>
            )}
        ></form.Field>
        <form.Field 
            name="email"
            validators={{ onChangeAsyncDebounceMs: 500 }}
                children={(field: {
                state: { value: string | number | readonly string[] | undefined };
                handleChange: (arg0: string) => void;
                }) => (
            <div className="space-y-1">
                <Label htmlFor="email" className="block text-left text-sm font-medium mb-1">
                    Correo Electrónico <span className="text-red-600">*</span>
                </Label>
                <InputField
                    id="email"
                    type="email"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className="w-full"
                    placeholder="ejemplo@correo.com"
                />
                {formErrors.email && (
                    <p className="text-red-700 text-sm mt-1">{formErrors.email}</p>
                )}
            </div>
            )}
        />
        <form.Field 
            name="telefono"
            validators={{ onChangeAsyncDebounceMs: 500 }}
                children={(field: {
                state: { value: string | number | readonly string[] | undefined };
                handleChange: (arg0: string) => void;
                }) => (
            <div className="space-y-1">
                <Label htmlFor="telefono" className="block text-left text-sm font-medium mb-1">
                    Teléfono <span className="text-red-600">*</span>
                </Label>
                <InputField
                    id="telefono"
                    type="text"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className="w-full"
                    placeholder="Ingrese su número de teléfono"
                />
                {formErrors.telefono && (
                    <p className="text-red-700 text-sm mt-1">{formErrors.telefono}</p>
                )}
            </div>
            )}
        />
        </div>
    );
}; export default DatosPersonalesSection