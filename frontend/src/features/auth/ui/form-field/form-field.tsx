import type { FieldError } from "react-hook-form";

import { Input } from "@/shared/ui";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

interface FormFieldProps extends InputProps {
  label: string;
  variant: string;
  error: FieldError | undefined;
}

export const FormField: React.FC<FormFieldProps> = ({ label, error, ...props }) => {
  return (
    <div className="">
      <label className="" htmlFor={label}>
        {label}
      </label>

      <Input {...props} />
      <p className="">{error?.message}</p>
    </div>
  );
};
