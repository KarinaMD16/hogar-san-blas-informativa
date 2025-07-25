import type { InputFieldProps } from "../../types/forms/formularios";

const inputClass = "bg-white border-2 border-ecruYellow rounded-full p-2 w-full";

const InputField = ({ label, name, register, errors, type = "text", placeholder, validation }: InputFieldProps) => (
  <div>
    <label htmlFor={name} className="block text-left mb-1">{label}</label>
    <input
      id={name}
      type={type}
      {...register(name, validation)}
      placeholder={placeholder}
      className={inputClass}
    />
    {errors[name] && <span className="text-red-500 text-sm">{String(errors[name].message)}</span>}
  </div>
);

export default InputField;