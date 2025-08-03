import InputField from "../InputField";
import TextAreaField from "../TextAreaField";
import { Label } from "@radix-ui/react-label";

const DatosDonacionSection = ({ form, formErrors }: any) => {
    return (
        <div className="space-y-6">
                <form.Field name="tipoDonacion" children={(field: { state: { value: string | number | readonly string[] | undefined; }; handleChange: (arg0: string) => void; }) => (
                    <div className="space-y-1">
                        <Label htmlFor="tipoDonacion" className="block text-left text-sm font-medium text-gray-700 mb-1">Tipo de Donación</Label>
                        <InputField
                            id="tipoDonacion"
                            type="text"
                            value={field.state.value}
                            onChange={(e) => field.handleChange(e.target.value)}
                            className="w-full"
                        />
                        {formErrors.tipoDonacion && (
                            <p className="text-red-700 text-sm mt-1">{formErrors.tipoDonacion}</p>
                        )}
                    </div>
                )} />
                <form.Field name="descripcion" children={(field: { state: { value: string | number | readonly string[] | undefined; }; handleChange: (arg0: string) => void; }) => (
                    <TextAreaField
                        id="descripcion"
                        label="Descripción"
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        rows={2}
                        error={formErrors.descripcion}
                    />
                )} />
                <form.Field name="observaciones" children={(field: { state: { value: string | number | readonly string[] | undefined; }; handleChange: (arg0: string) => void; }) => (
                    <TextAreaField
                        id="observaciones"
                        label="Observaciones"
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        rows={4}
                        error={formErrors.observaciones}
                    />
                )} />
        </div>
    );
};
export default DatosDonacionSection;