import styles from "./Button.module.scss";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant: string;
    isActive?: Boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, variant, isActive, ...props }) => {
    const className = `${ styles[variant] } ${ isActive ? styles.active : '' }`;

    return (
        <button
            { ...props }
            className={ className }
        >{ children }</button>
    );
};