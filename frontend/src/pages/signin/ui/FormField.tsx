import styles from "./FormField.module.scss";
import type { FieldError } from "react-hook-form";

import { Input } from "@/shared/ui/Input.tsx";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

interface FormFieldProps extends InputProps {
    label: string;
    variant: string;
    error?: FieldError;
}

export const FormField: React.FC<FormFieldProps> = ({ variant, label, error, ...props }) => {

    // console.log(error.message);
    return (
        <div className={ styles.wrapper }>
            <label className={ styles.label } htmlFor={ label }>{ label }</label>

            <Input
                variant={ variant }
                type={ props.type }
                placeholder={ props.placeholder }
                id={ props.id }
            />
            {/*<p className={ styles.error }>{ error.message }</p>*/ }
            { error && <p className={ styles.error }>{ error.message }</p> }
        </div>
    );
};