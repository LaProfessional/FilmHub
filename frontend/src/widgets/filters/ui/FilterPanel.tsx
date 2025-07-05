import { useRef, useState } from "react";
import styles from "./FilterPanel.module.scss";
import { useTranslation } from "react-i18next";
import { cn } from "@/shared/lib/utils";
import { SlidersHorizontal } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { Delete } from "lucide-react";

import { dataFilter } from "@/pages/home/model/filterData";
import { useHandleClickOutside } from "@/shared/lib/useHandleClickOutside";
import type { FilterHandle } from "@/widgets/filters/ui/Filter";

import { Filter } from "@/widgets/filters/ui/Filter";
import { Button } from "@/shared/ui";

export const FilterPanel = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const fieldsRef = useRef<HTMLDivElement>(null);

  const { dataYear, dataGenre, dataOptions } = dataFilter(t);

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
    <div className={styles.filterContainer} ref={fieldsRef}>
      <div className={styles.filterWrapper} tabIndex={0}>
        <Button onClick={toggleMenu}>
          <SlidersHorizontal className={styles.iconSlidersHorizontal} />
          <span className={styles.filterTitle}>{t("Filters")}</span>
          <ChevronDown className={cn(styles.iconChevron, isOpen && styles.open)} />
        </Button>

        <section className={cn(styles.filtersList, isOpen && styles.open)}>
          <Filter ref={genreRef} data={dataGenre} dropdownTitle={"Genre"} isMulti={true} />
          <Filter ref={yearRef} data={dataYear} dropdownTitle={"Year of release"} />
          <Filter ref={sortRef} data={dataOptions} dropdownTitle={"Sorting"} />
          <Button onClick={resetFilters}>
            <Delete className={styles.iconDelete} />
            {t("Reset all")}
          </Button>
        </section>
      </div>
    </div>
  );
};
