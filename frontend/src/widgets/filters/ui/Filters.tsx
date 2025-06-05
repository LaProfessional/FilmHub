import styles from "./Filters.module.scss";
import { useTranslation } from "react-i18next";

import { SlidersHorizontal } from "lucide-react";
import { ChevronDown } from "lucide-react";

import { dataFilter } from "@/pages/home/model/filterData.ts";

import { Select } from "@/shared/ui/Select.tsx";
import { useHandleClickOutside } from "@/shared/lib/useHandleClickOutside.ts";
import { useRef, useState } from "react";

export const Filters = () => {
    const [ isOpen, setIsOpen ] = useState(false);
    const fieldsRef = useRef(null);

    const { t } = useTranslation();
    const { dataYear, dataGenre, dataOptions } = dataFilter(t);

    useHandleClickOutside(fieldsRef, isOpen, setIsOpen);

    return (
        <div className={ styles.filters } tabIndex={ 0 }>
            <SlidersHorizontal className={ styles.slidersHorizontal }/>
            <h2 className={ styles.title }>{ t("Filters") }</h2>
            <ChevronDown className={ styles.chevronDown }/>

            <div className={ styles.filtersFields }>
                <Select
                    data={ dataGenre }
                    dropdownTitle={ "Genre" }
                />
                <Select
                    data={ dataYear }
                    dropdownTitle={ "Year of release" }
                />
                <Select
                    data={ dataOptions }
                    dropdownTitle={ "Sorting" }
                />
            </div>
        </div>
    );
};