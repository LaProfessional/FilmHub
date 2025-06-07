import { useRef, useState } from "react";
import styles from "./FilterPanel.module.scss";
import { useTranslation } from "react-i18next";
import cls from "@fvilers/cls";

import { SlidersHorizontal } from "lucide-react";
import { ChevronDown } from "lucide-react";

import { dataFilter } from "@/pages/home/model/filterData.ts";
import { useHandleClickOutside } from "@/shared/lib/useHandleClickOutside.ts";

import { Filter } from "@/widgets/filters/ui/Filter.tsx";
import { Button } from "@/shared/ui/Button.tsx";

export const FilterPanel = () => {
    const [ isOpen, setIsOpen ] = useState(false);
    const fieldsRef = useRef<HTMLDivElement>(null);

    const { t } = useTranslation();
    const { dataYear, dataGenre, dataOptions } = dataFilter(t);

    useHandleClickOutside(fieldsRef, isOpen, setIsOpen);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className={ styles.filterContainer } ref={ fieldsRef }>
            <div className={ styles.filterWrapper } tabIndex={ 0 }>
                <Button variant={ "btnFiltersControl" } onClick={ toggleMenu }>
                    <SlidersHorizontal className={ styles.iconSlidersHorizontal }/>
                    <span className={ styles.filterTitle }>{ t("Filters") }</span>
                    <ChevronDown className={ cls(styles.iconChevron, isOpen && styles.open) }/>
                </Button>

                <section className={ cls(styles.fieldsList, isOpen && styles.open) }>
                    <Filter
                        data={ dataGenre }
                        dropdownTitle={ "Genre" }
                    />
                    <Filter
                        data={ dataYear }
                        dropdownTitle={ "Year of release" }
                    />
                    <Filter
                        data={ dataOptions }
                        dropdownTitle={ "Sorting" }
                    />
                </section>
            </div>
        </div>
    );
};