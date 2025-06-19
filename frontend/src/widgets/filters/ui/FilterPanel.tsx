import { useRef, useState } from "react";
import styles from "./FilterPanel.module.scss";
import { useTranslation } from "react-i18next";
import cls from "@fvilers/cls";

import { SlidersHorizontal } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { Delete } from "lucide-react";

import { dataFilter } from "@/pages/home/model/filterData.ts";
import { useHandleClickOutside } from "@/shared/lib/useHandleClickOutside.ts";
import type { FilterHandle } from "@/widgets/filters/ui/Filter.tsx";

import { Filter } from "@/widgets/filters/ui/Filter.tsx";
import { Button } from "@/shared/ui/Button.tsx";

export const FilterPanel = () => {
    const { t } = useTranslation();
    const [ isOpen, setIsOpen ] = useState<boolean>(false);
    const fieldsRef = useRef<HTMLDivElement>(null);

    const { genreFilters, yearFilters, sortOptions } = dataFilter(t);

    const genreRef = useRef<FilterHandle>(null);
    const yearRef = useRef<FilterHandle>(null);
    const sortRef = useRef<FilterHandle>(null);

    const resetFilters = () => {
        genreRef.current?.reset();
        yearRef.current?.reset();
        sortRef.current?.reset();
    };

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

                <section className={ cls(styles.filtersList, isOpen && styles.open) }>
                    <Filter
                        ref={ genreRef }
                        data={ genreFilters }
                        dropdownTitle={ "Genre" }
                        isMulti={ true }
                    />
                    <Filter
                        ref={ yearRef }
                        data={ yearFilters }
                        dropdownTitle={ "Year of release" }
                    />
                    <Filter
                        ref={ sortRef }
                        data={ sortOptions }
                        dropdownTitle={ "Sorting" }
                    />
                    <Button variant={ "btnResetAll" } onClick={ resetFilters }>
                        <Delete className={ styles.iconDelete }/>
                        { t("Reset all") }
                    </Button>
                </section>
            </div>
        </div>
    );
};