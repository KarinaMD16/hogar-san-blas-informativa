import type { TextAreaFieldProps } from "../../types/forms/formularios";

const inputClass = "bg-white border-2 border-ecruYellow rounded-full p-2 w-full";

const TextAreaField = ({ label, name, register, errors, placeholder, validation }: TextAreaFieldProps) => (
  <div>
    <label htmlFor={name} className="block text-left mb-1">{label}</label>
    <textarea
      id={name}
      {...register(name, validation)}
      placeholder={placeholder}
      className={inputClass}
    />
    {errors[name] && <span className="text-red-500 text-sm">{String(errors[name].message)}</span>}
  </div>
);
export default TextAreaField;