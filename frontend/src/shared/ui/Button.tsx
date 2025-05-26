import styles from "./Button.module.scss";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant: string;
}

export const Button: React.FC<ButtonProps> = ({ children, variant, ...props }) => {

    let className;
    switch (variant) {
        case "addBtn":
            className = styles.addBtn;
            break;
        case "collapseExpandBtn":
            className = styles.collapseExpandBtn;
            break;
    }

    return (
        <button
            { ...props }
            className={ className }
        >{ children }</button>
    );
};