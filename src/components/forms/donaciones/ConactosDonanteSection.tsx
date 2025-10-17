import InputField from "../InputField";
import { Label } from "@radix-ui/react-label";

export const ContactosDonanteSection = ({ form, formErrors }: any) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    maxLength={100}
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
                    maxLength={15}
                />
                {formErrors.telefono && (
                    <p className="text-red-700 text-sm mt-1">{formErrors.telefono}</p>
                )}
            </div>
            )}
        />
        </div>
    );
}; export default ContactosDonanteSection