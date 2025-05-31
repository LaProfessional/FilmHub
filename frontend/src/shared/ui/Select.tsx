import styles from "./Select.module.scss";

import { ChevronDown } from "lucide-react";
import { Input } from "@/shared/ui/Input.tsx";

import { useTranslation } from "react-i18next";

interface Item {
    id: string,
    label: string,
    htmlFor: string,
    value: string,
}

interface SelectProps {
    data: Item[];
}

export const Select: React.FC<SelectProps> = ({ data }) => {
    const { t } = useTranslation();

    return (
        <div className={ styles.select }>
            <div className={ styles.dropdownTitleWrapper }>
                <span className={ styles.dropdownTitle }>{ t("Genre") }</span>
                <ChevronDown className={ styles.chevronDown }/>
            </div>

            <ul className={ styles.listItem }>
                { data.map((item, index) =>
                    <li className={ styles.genreItem } key={ index }>
                        <Input
                            variant={ "checkbox" }
                            type={ "checkbox" }
                            id={ item.id }
                        />

                        <label
                            className={ styles.label }
                            htmlFor={ item.htmlFor }
                        >{ t(item.label) }</label>
                    </li>
                ) }
            </ul>
        </div>
    );
};
