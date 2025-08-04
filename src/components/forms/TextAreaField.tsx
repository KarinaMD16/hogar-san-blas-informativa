import * as React from "react"
import { cn } from "../../lib/utils";

interface TextAreaFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

function TextAreaField({ 
  className, 
  id,
  label,
  error,
  ...props 
}: TextAreaFieldProps) {
  return (
    <div className="space-y-1 w-full">
      {label && (
        <label 
          htmlFor={id} 
          className="block text-left text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      <textarea
        id={id}
        className={cn(
          "w-full px-3 py-2 border border-ecruYellow rounded-lg shadow-sm",
          "focus:outline-none focus:ring-1 focus:ring-ecruYellow focus:border-ecruYellow",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          className
        )}
        {...props}
      />
      {error && (
        <p className="text-red-700 text-sm mt-1">{error}</p>
      )}
    </div>
  );
}

export default TextAreaField;
