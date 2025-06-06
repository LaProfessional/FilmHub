import { useRef, useState } from "react";
import styles from "././FiltersPanel.module.scss";
import { useTranslation } from "react-i18next";
import cls from "@fvilers/cls";

import { SlidersHorizontal } from "lucide-react";
import { ChevronDown } from "lucide-react";

import { dataFilter } from "@/pages/home/model/filterData.ts";
import { useHandleClickOutside } from "@/shared/lib/useHandleClickOutside.ts";

import { FilterToggle } from "@/widgets/filters/ui/FilterToggle.tsx";

export const FiltersPanel = () => {
    const [ isOpen, setIsOpen ] = useState(false);
    const fieldsRef = useRef(null);

    const { t } = useTranslation();
    const { dataYear, dataGenre, dataOptions } = dataFilter(t);

    useHandleClickOutside(fieldsRef, isOpen, setIsOpen);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className={ styles.container } ref={ fieldsRef }>
            <div className={ styles.filtersControl } onClick={ toggleMenu } tabIndex={ 0 }>
                <SlidersHorizontal className={ styles.slidersHorizontal }/>
                <h2 className={ styles.title }>{ t("Filters") }</h2>
                <ChevronDown className={ cls(styles.chevronDown, isOpen && styles.open) }/>
            </div>

            <div className={ cls(styles.filtersFields, isOpen && styles.open) }>
                <FilterToggle
                    data={ dataGenre }
                    dropdownTitle={ "Genre" }
                />
                <FilterToggle
                    data={ dataYear }
                    dropdownTitle={ "Year of release" }
                />
                <FilterToggle
                    data={ dataOptions }
                    dropdownTitle={ "Sorting" }
                />
            </div>
        </div>
    );
};