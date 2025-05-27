import styles from "./Input.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    variant: string;
}

export const Input: React.FC<InputProps> = ({ variant, ...props }) => {
    return (
        <input
            className={ styles[variant] }
            type={ props.type }
            placeholder={ props.placeholder }
            id={ props.id }
        />
    );
};