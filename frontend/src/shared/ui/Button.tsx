import * as React from "react";
import styles from "./Button.module.scss";

type TypeButton = "collapseExpandBtn" | "addBtn";
type ToggleMenu = () => void;

interface ButtonProps {
    children: React.ReactNode;
    toggleMenu?: ToggleMenu;
    type: TypeButton;
}

export const Button: React.FC<ButtonProps> = ({ children, toggleMenu, type }) => {
    return (
        <button
            onClick={ toggleMenu }
            className={ styles[type] }
        >{ children }</button>
    );
};