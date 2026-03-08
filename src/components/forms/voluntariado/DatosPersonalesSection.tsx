import { useContext } from "react";
import IdiomaContext from "../../../context/language/idiomaContext";
import InputField from "../InputField";
import { Label } from "@radix-ui/react-label";

export const DatosPersonalesSection = ({ form, formErrors }: any) => {

    const { contentJson } = useContext(IdiomaContext);
    const placeholders = contentJson.formularioVoluntariado;

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
                        {placeholders.nombre.label} <span className="text-red-600">*</span>
                    </Label>
                    <InputField
                        id="nombre"
                        type="text"
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        className="w-full"
                        placeholder={placeholders.nombre.placeholder}
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
                        {placeholders.apellido1.label} <span className="text-red-600">*</span>
                    </Label>
                    <InputField
                        id="apellido1"
                        type="text"
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        className="w-full"
                        placeholder={placeholders.apellido1.placeholder}
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
                    {placeholders.apellido2.label}
                </Label>
                <InputField
                    id="apellido2"
                    type="text"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className="w-full"
                    placeholder={placeholders.apellido2.placeholder}
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
                    {placeholders.cedula.label} <span className="text-red-600">*</span>
                </Label>
                <InputField
                    id="cedula"
                    type="text"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className="w-full"
                    placeholder={placeholders.cedula.placeholder}
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
                    {placeholders.correo.label} <span className="text-red-600">*</span>
                </Label>
                <InputField
                    id="email"
                    type="email"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className="w-full"
                    placeholder={placeholders.correo.placeholder}
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
                    {placeholders.telefono.label} <span className="text-red-600">*</span>
                </Label>
                <InputField
                    id="telefono"
                    type="text"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className="w-full"
                    placeholder={placeholders.telefono.placeholder}
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