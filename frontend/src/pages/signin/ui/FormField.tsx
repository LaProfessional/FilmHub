import styles from "./FormField.module.scss";

import { Input } from "@/shared/ui/Input.tsx";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

interface FormFieldProps extends InputProps {
    label: string;
    variant: string;
}

export const FormField: React.FC<FormFieldProps> = ({ variant, label, ...props }) => {
    return (
        <div className={ styles.wrapper }>
            <label className={ styles.label } htmlFor={ label }>{ label }</label>
            <Input
                variant={ variant }
                type={ props.type }
                placeholder={ props.placeholder }
                id={ props.id }
            />
        </div>
    );
};