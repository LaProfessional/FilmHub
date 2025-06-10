import styles from "./FormField.module.scss";
import type { FieldError } from "react-hook-form";
import cls from "@fvilers/cls";

import { Input } from "@/shared/ui//Input/Input";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

interface FormFieldProps extends InputProps {
    label: string;
    variant: string;
    error?: FieldError;
}

export const FormField: React.FC<FormFieldProps> = ({ variant, label, error, ...props }) => {

    return (
        <div className={ styles.wrapper }>
            <label className={ styles.label } htmlFor={ label }>{ label }</label>

            <Input
                { ...props }
                variant={ variant }
                error={ error?.message }
            />
            <p className={ cls(error?.message && styles.error) }>{ error?.message }</p>
        </div>
    );
};