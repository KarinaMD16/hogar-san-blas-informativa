import type { useForm } from "react-hook-form";

export type InputFieldProps = {
  label: string;
  name: string;
  register: ReturnType<typeof useForm>["register"];
  errors: any;
  type?: string;
  placeholder?: string;
  validation?: object;
};

export type TextAreaFieldProps = {
  label: string;
  name: string;
  register: ReturnType<typeof useForm>["register"];
  errors: any;
  placeholder?: string;
  validation?: object;
};