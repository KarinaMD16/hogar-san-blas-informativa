import { useGetTipoVoluntarios } from "../../../hooks/formularios/solicitudVoluntario";
import InputField from "./InputField";
import { Label } from "@radix-ui/react-label";

export const OtrosDatosSection = ({ form, formErrors }: any) => {
    const { tiposVoluntariado } = useGetTipoVoluntarios();
    return (
        <>
        <form.Field 
            name="ocupacion"
            validators={{ onChangeAsyncDebounceMs: 500 }}
                children={(field: {
                state: { value: string | number | readonly string[] | undefined };
                handleChange: (arg0: string) => void;
                }) => (
                <div className="mb-4">
                    <Label htmlFor="ocupacion">Ocupacion</Label>
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
                <div className="mb-4">
                    <Label htmlFor="direccion">Direccion</Label>
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
                name="sexo">
                {(field: { state: { value: string; }; handleChange: (arg0: { (): string; (): string; }) => void; }) => (
                <div className="mb-4">
                    <Label htmlFor="sexo">Sexo</Label>
                    <div className="flex gap-4">
                    <div className="flex items-center">
                        <input
                        id="sexoF"
                        type="radio"
                        name="sexo"
                        value="F"
                        checked={field.state.value === "F"}
                        onChange={() => field.handleChange(() => "F")}
                        />
                        <Label htmlFor="sexoF" className="ml-2">
                        Femenino
                        </Label>
                    </div>
                    <div className="flex items-center">
                        <input
                        id="sexoM"
                        type="radio"
                        name="sexo"
                        value="M"
                        checked={field.state.value === "M"}
                        onChange={() => field.handleChange(() => "M")}
                        />
                        <Label htmlFor="sexoM" className="ml-2">
                        Masculino
                        </Label>
                    </div>
                    </div>
                    {formErrors.sexo && (
                    <p className="text-red-700 text-sm">{formErrors.sexo}</p>
                    )}
                </div>
                )}
            </form.Field>
            <form.Field
                name="experienciaLaboral"
                validators={{ onChangeAsyncDebounceMs: 500 }}
                children={(field: {
                state: { value: string | number | readonly string[] | undefined };
                handleChange: (arg0: string) => void;
                }) => (
                <div className="mb-4">
                    <Label htmlFor="experienciaLaboral">Experiencia Laboral</Label>
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
            <form.Field 
                name="tipoVoluntariado">
                {(field: { state: { value: any; }; handleChange: (arg0: number) => void; }) => (
                <div className="mb-4">
                    <Label htmlFor="tipoVoluntariado">Tipo de Voluntariado</Label>
                    <select
                    id="tipoVoluntariado"
                    value={field.state.value ?? ""}
                    onChange={(e) => field.handleChange(Number(e.target.value))}
                    className="w-full rounded-md border border-gray-300 px-3 py-2"
                    >
                    <option value={0}>Seleccione una opción</option>
                    {tiposVoluntariado.map((tipo) => (
                        <option key={tipo.id} value={tipo.id}>
                        {tipo.nombre}
                        </option>
                    ))}
                    </select>
                    {formErrors.tipoVoluntariado && (
                    <p className="text-red-700 text-sm mt-1">
                        {formErrors.tipoVoluntariado}
                    </p>
                    )}
                </div>
                )}
            </form.Field>
        </>
    );
}; export default OtrosDatosSection