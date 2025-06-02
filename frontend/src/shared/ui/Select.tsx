import styles from "./Select.module.scss";
import cls from "@fvilers/cls";

import { ChevronDown } from "lucide-react";
import { Input } from "@/shared/ui/Input.tsx";

import { useTranslation } from "react-i18next";
import { useRef, useState } from "react";

import { useHandleClickOutside } from "@/shared/lib/useHandleClickOutside.ts";

type Item = {
    id: string,
    label: string,
    htmlFor: string,
    value: string,
};

interface SelectProps {
    data: Item[];
    dropdownTitle: string;
}

export const Select: React.FC<SelectProps> = ({ data, dropdownTitle }) => {
    const [ isOpen, setIsOpen ] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const { t } = useTranslation();

    useHandleClickOutside(wrapperRef, isOpen, setIsOpen);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className={ styles.select } ref={ wrapperRef }>
            <div
                className={ styles.dropdownTitleWrapper }
                onClick={ toggleMenu }
            >
                <span className={ styles.dropdownTitle }>{ t(dropdownTitle) }</span>
                <ChevronDown className={ styles.chevronDown }/>
            </div>

            <ul className={ cls(styles.listItem, isOpen && styles.open) }>
                { data.map((item, index) =>
                    <li className={ styles.item } key={ index }>
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
