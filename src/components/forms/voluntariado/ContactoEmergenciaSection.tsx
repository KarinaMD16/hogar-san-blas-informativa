import InputField from "../../../components/forms/InputField";
import { Label } from "@radix-ui/react-label";

export const ContactoEmergenciaSection = ({ form, formErrors }: any) => {
    return (
        <form.Field name="contactosEmergencia">
            {(field: { state: { value: string | any[]; }; handleChange: (arg0: any[]) => void; }) => {
            const contacto =
                    Array.isArray(field.state.value) && field.state.value.length > 0
                    ? field.state.value[0]
                    : { nombre: "", telefono: "" };

                const handleContactChange = (
                    key: "nombre" | "telefono",
                    value: string
                ) => {
                    const updatedContact = { ...contacto, [key]: value };
                    field.handleChange([updatedContact]);
                };

                return (
                    <div className="space-y-3 text-left">
                        <div>
                        <Label
                            htmlFor="contacto-nombre"
                            className="block text-left text-sm font-medium mb-1"
                        >
                            Nombre <span className="text-red-600">*</span>
                        </Label>
                        <InputField
                            id="contacto-nombre"
                            type="text"
                            value={contacto.nombre}
                            onChange={(e) =>
                            handleContactChange("nombre", e.target.value)
                            }
                            placeholder="Ingrese el nombre completo de alguien a quien llamar en caso de emergencia"
                        />
                        </div>

                        <div>
                        <Label
                            htmlFor="contacto-telefono"
                            className="block text-left text-sm font-medium mb-1"
                        >
                            Teléfono <span className="text-red-600">*</span>
                        </Label>
                        <InputField
                            id="contacto-telefono"
                            type="tel"
                            value={contacto.telefono}
                            onChange={(e) =>
                            handleContactChange("telefono", e.target.value)
                            }
                            placeholder="Ingrese el número de su contacto de emergencia"
                        />
                        </div>

                    {formErrors.contactosEmergencia && (
                        <p className="text-red-700 text-sm mt-1">
                        {formErrors.contactosEmergencia}
                        </p>
                    )}
                    </div>
                );
            }}
        </form.Field>
    );
}; export default ContactoEmergenciaSection