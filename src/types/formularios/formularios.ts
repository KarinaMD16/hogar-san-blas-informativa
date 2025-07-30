export type FieldProps<T = string> = {
  state: { value: T };
  handleChange: (val: T) => void;
};