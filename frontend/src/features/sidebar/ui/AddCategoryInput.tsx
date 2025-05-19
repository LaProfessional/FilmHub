import styles from "./AddCategoryInput.module.scss";
import { useTranslation } from "react-i18next";

const AddCategoryInput = () => {

    const { t } = useTranslation();

    return (
        <div className={ styles.wrapper }>
            <input
                className={ styles.input }
                type="text"
                placeholder={ t("createCategory") }
            />
            <button className={ styles.add }>+</button>
        </div>
    );
};

export default AddCategoryInput;