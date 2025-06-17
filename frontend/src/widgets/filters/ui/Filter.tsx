import styles from "./Filter.module.scss"
import cls from "@fvilers/cls"
import { forwardRef, useImperativeHandle, useRef, useState } from "react"
import { useTranslation } from "react-i18next"

import { ChevronDown } from "lucide-react"
import { X } from "lucide-react"

import { useHandleClickOutside } from "@/shared/lib/useHandleClickOutside.ts"
import { useFilters } from "@/widgets/filters/model/useFilters.ts"

import { Button } from "@/shared/ui/Button/Button"
import { Input } from "@/shared/ui/Input/Input"
import React from "react"

type Item = {
  id: string
  label: string
  htmlFor: string
  value: string
}

export type FilterHandle = {
  reset: () => void
}

interface FilterProps {
  data: Item[]
  dropdownTitle: string
  isMulti?: boolean
}

export const Filter = React.memo(
  forwardRef<FilterHandle, FilterProps>(({ data, dropdownTitle, isMulti }, ref) => {
    const { t } = useTranslation()
    const [isOpen, setIsOpen] = useState(false)
    const wrapperRef = useRef<HTMLDivElement>(null)

    useHandleClickOutside(wrapperRef, isOpen, setIsOpen)

    const { activeIndexes, handleSelectItem, resetFilter } = useFilters(isMulti ?? false)

    useImperativeHandle(ref, () => ({
      reset: () => {
        resetFilter()
      },
    }))

    const activeLabels = activeIndexes.map(index => t(data[index].label))

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
      <div className={styles.filterContainer} ref={wrapperRef}>
        <div className={styles.filterWrapper}>
          <Button variant={"btnFilter"} onClick={toggleMenu}>
            <span className={styles.filterTitle}>
              {activeLabels.length ? activeLabels.join(", ") : t(dropdownTitle)}
            </span>
            {activeIndexes.includes(0) ? (
              <ChevronDown className={cls(styles.iconChevron, isOpen && styles.open)} />
            ) : (
              <X className={styles.iconX} onClick={resetFilter} />
            )}
          </Button>

          <ul className={cls(styles.listItem, isOpen && styles.open)}>
            {data.map((item, index) => (
              <li className={styles.item} key={index} onClick={() => handleSelectItem(index)}>
                <Input
                  checked={activeIndexes.includes(index)}
                  variant={"checkbox"}
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
    )
  }),
)
