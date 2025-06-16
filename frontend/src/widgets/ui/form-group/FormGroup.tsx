import styles from "./FormGroup.module.scss";

interface FormGroupProps {
    label: string;
    children: React.ReactNode;
}

export const FormGroup: React.FC<FormGroupProps> = ({ label, children }) => {
    return (
        <div className={ styles.formGroup }>
            <label className={ styles.label }>{ label }</label>
            { children }
        </div>
    );
};
