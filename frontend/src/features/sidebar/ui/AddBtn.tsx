import * as React from "react";
import styles from "./AddBtn.module.scss";

import { ReactComponent as AddSvg } from "@/shared/assets/sidebar/Add.svg";

interface AddBtnProps {
  children: React.ReactNode;
}

const AddBtn: React.FC<AddBtnProps> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <AddSvg className={styles.addSvg} />
      <button className={styles.button}>{children}</button>
    </div>
  );
};

export default AddBtn;
