import InputField from "./InputField";
import { Label } from "@radix-ui/react-label";

export const DatosPersonalesSection = ({ form, formErrors }: any) => {
    return (
        <>
        <form.Field 
            name="nombre"
            validators={{ onChangeAsyncDebounceMs: 500 }}
                children={(field: {
                state: { value: string | number | readonly string[] | undefined };
                handleChange: (arg0: string) => void;
                }) => (
                <div className="mb-4">
                <Label htmlFor="nombre">Nombre</Label>
                <InputField
                id="nombre"
                type="text"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                />
                {formErrors.nombre && (
                <p className="text-red-700 text-sm">{formErrors.nombre}</p>
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
                <div className="mb-4">
                    <Label htmlFor="apellido1">Primer Apellido</Label>
                    <InputField
                    id="apellido1"
                    type="text"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    />
                    {formErrors.apellido1 && (
                    <p className="text-red-700 text-sm">{formErrors.apellido1}</p>
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
            <div className="mb-4">
                <Label htmlFor="apellido2">Segundo Apellido</Label>
                <InputField
                id="apellido2"
                type="text"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                />
                {formErrors.apellido2 && (
                <p className="text-red-700 text-sm">{formErrors.apellido2}</p>
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
            <div className="mb-4">
                <Label htmlFor="cedula">Cedula</Label>
                <InputField
                id="cedula"
                type="text"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                />
                {formErrors.cedula && (
                <p className="text-red-700 text-sm">{formErrors.cedula}</p>
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
            <div className="mb-4">
                <Label htmlFor="email">Email</Label>
                <InputField
                id="email"
                type="email"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                />
                {formErrors.email && (
                <p className="text-red-700 text-sm">{formErrors.email}</p>
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
            <div className="mb-4">
                <Label htmlFor="telefono">Telefono</Label>
                <InputField
                id="telefono"
                type="text"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                />
                {formErrors.telefono && (
                <p className="text-red-700 text-sm">{formErrors.telefono}</p>
                )}
            </div>
            )}
        />
        </>
    );
}; export default DatosPersonalesSection