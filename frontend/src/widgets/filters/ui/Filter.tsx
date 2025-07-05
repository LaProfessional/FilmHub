import styles from "./Filter.module.scss";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { ChevronDown } from "lucide-react";
import { X } from "lucide-react";

import { useHandleClickOutside } from "@/shared/lib/useHandleClickOutside";
import { useFilters } from "@/widgets/filters/model/useFilters";

import { Button, Input } from "@/shared/ui";
import React from "react";

import { cn } from "@/shared/lib/utils";

type Item = {
  id: string;
  label: string;
  htmlFor: string;
  value: string;
};

export type FilterHandle = {
  reset: () => void;
};

interface FilterProps {
  data: Item[];
  dropdownTitle: string;
  isMulti?: boolean;
}

export const Filter = React.memo(
  forwardRef<FilterHandle, FilterProps>(({ data, dropdownTitle, isMulti }, ref) => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useHandleClickOutside(wrapperRef, isOpen, setIsOpen);

    const { activeIndexes, handleSelectItem, resetFilter } = useFilters(isMulti ?? false);

    useImperativeHandle(ref, () => ({
      reset: () => {
        resetFilter();
      },
    }));

    // FIXME: Массив `data` может быть пустым? Нужно убедиться что значение по индексу есть
    const activeLabels = activeIndexes.map((index) => t(data[index]?.label || ""));

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
      <div className={styles.filterContainer} ref={wrapperRef}>
        <div className={styles.filterWrapper}>
          <Button onClick={toggleMenu}>
            <span className={styles.filterTitle}>
              {activeLabels.length ? activeLabels.join(", ") : t(dropdownTitle)}
            </span>
            {activeIndexes.includes(0) ?
              <ChevronDown className={cn(styles.iconChevron, isOpen && styles.open)} />
            : <X className={styles.iconX} onClick={resetFilter} />}
          </Button>

          <ul className={cn(styles.listItem, isOpen && styles.open)}>
            {data.map((item, index) => (
              <li className={styles.item} key={index} onClick={() => handleSelectItem(index)}>
                <Input
                  checked={activeIndexes.includes(index)}
                  type={"checkbox"}
                  id={item.id}
                  readOnly
                />

                <label className={styles.label}>{t(item.label)}</label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }),
);
