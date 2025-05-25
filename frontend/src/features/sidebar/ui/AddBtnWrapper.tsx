import * as React from "react";
import styles from "./AddBtn.module.scss";

import { ReactComponent as AddSvg } from "@/shared/assets/sidebar/Add.svg";

import { Button } from "@/shared/ui/Button.tsx";

type TypeButton = "collapseExpandBtn" | "addBtn";

interface AddBtnProps {
    label?: string;
    type: TypeButton;
}

const AddBtnWrapper: React.FC<AddBtnProps> = ({ label, type }) => {
    return (
        <div className={ styles.wrapper }>
            <AddSvg className={ styles.addSvg }/>
            <Button type={ type }>{ label }</Button>
        </div>
    );
};

export default AddBtnWrapper;
