import styles from "./Button.module.scss";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant: string;
}

export const Button: React.FC<ButtonProps> = ({ children, variant, ...props }) => {

    return (
        <button
            { ...props }
            className={ styles[variant] }
        >{ children }</button>
    );
};