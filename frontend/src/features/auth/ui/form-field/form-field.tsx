import styles from "./form-field.module.scss";
import type { FieldError } from "react-hook-form";
import { cn } from "@/shared/lib/utils";

import { Input } from "@/shared/ui";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

interface FormFieldProps extends InputProps {
  label: string;
  variant: string;
  error: FieldError | undefined;
}

export const FormField: React.FC<FormFieldProps> = ({ label, error, ...props }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={label}>
        {label}
      </label>

      <Input {...props} />
      <p className={cn(error?.message && styles.error)}>{error?.message}</p>
    </div>
  );
};
