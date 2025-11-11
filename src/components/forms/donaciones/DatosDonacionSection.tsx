import { Label } from "@radix-ui/react-label";
import InputField from "../InputField";
import TextAreaField from "../TextAreaField";

const DatosDonacionSection = ({ form, formErrors }: any) => {
    return (
        <div className="space-y-6">
                <form.Field name="tipoDonacion" children={(field: { state: { value: string | number | readonly string[] | undefined; }; handleChange: (arg0: string) => void; }) => (
                    <div className="space-y-1">
                        <Label htmlFor="tipoDonacion" className="block text-left text-sm font-medium mb-1">
                            Tipo de Donación <span className="text-red-600">*</span>
                        </Label>
                        <InputField
                            id="tipoDonacion"
                            type="text"
                            value={field.state.value}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => field.handleChange(e.target.value)}
                            className="w-full"
                            placeholder="Ej: Ropa, alimentos, aseo personal, pañales, etc."
                            maxLength={30}
                        />
                        {formErrors.tipoDonacion && (
                            <p className="text-red-700 text-sm mt-1">{formErrors.tipoDonacion}</p>
                        )}
                    </div>
                )} />
                <form.Field name="descripcion" children={(field: { state: { value: string | number | readonly string[] | undefined; }; handleChange: (arg0: string) => void; }) => (
                    <div className="space-y-1">
                        <Label htmlFor="descripcion" className="block text-left text-sm font-medium mb-1">
                            Descripción <span className="text-red-600">*</span>
                        </Label>
                        <TextAreaField
                            id="descripcion"
                            value={field.state.value}
                            onChange={(e) => field.handleChange(e.target.value)}
                            className="w-full min-h-[100px]"
                            placeholder="Describa ampliamente los artículos que desea donar"
                            maxLength={200}
                        />
                        {formErrors.descripcion && (
                            <p className="text-red-700 text-sm mt-1">{formErrors.descripcion}</p>
                        )}
                    </div>
                )} />
                <form.Field name="observaciones" children={(field: { state: { value: string | number | readonly string[] | undefined; }; handleChange: (arg0: string) => void; }) => (
                    <div className="space-y-1">
                        <Label htmlFor="observaciones" className="block text-left text-sm font-medium mb-1">
                            Observaciones
                        </Label>
                        <TextAreaField
                            id="observaciones"
                            value={field.state.value}
                            onChange={(e) => field.handleChange(e.target.value)}
                            className="w-full min-h-[100px]"
                            placeholder="Agregue cualquier información adicional que desee compartir (opcional)"
                            maxLength={200}
                        />
                        {formErrors.observaciones && (
                            <p className="text-red-700 text-sm mt-1">{formErrors.observaciones}</p>
                        )}
                    </div>
                )} />
        </div>
    );
};
export default DatosDonacionSection;