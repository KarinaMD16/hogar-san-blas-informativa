import * as React from "react"
import { cn } from "../../../lib/utils";

function InputField({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "bg-white border-2 border-ecruYellow rounded-full px-4 py-2 w-full",
        "focus:outline-none focus:ring-2 focus:ring-ecruYellow focus:border-ecruYellow",
        "placeholder:text-gray-400",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      {...props}
    />
  );
}

export default InputField