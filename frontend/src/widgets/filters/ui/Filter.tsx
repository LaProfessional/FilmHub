import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { ChevronDown } from "lucide-react";
import { X } from "lucide-react";

import { useHandleClickOutside } from "@/shared/lib/useHandleClickOutside";
import { useFilters } from "@/widgets/filters/model/useFilters";

import { Button, Input } from "@/shared/ui";
import React from "react";

import { cn } from "@/shared/lib/utils";
import { Popover, PopoverTrigger, PopoverContent } from "@/shared/ui";

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

    return (
      <div className="relative" ref={wrapperRef}>
        <div className="">
          <Popover>
            <PopoverTrigger asChild>
              <Button>
                <span className="">
                  {activeLabels.length ? activeLabels.join(", ") : t(dropdownTitle)}
                </span>
                {activeIndexes.includes(0) ?
                  <ChevronDown className={cn("", isOpen && "")} />
                : <X className="" onClick={resetFilter} />}
              </Button>
            </PopoverTrigger>

            <PopoverContent>
              <ul className={cn("", isOpen && "")}>
                {data.map((item, index) => (
                  <li className="" key={index} onClick={() => handleSelectItem(index)}>
                    <Input
                      checked={activeIndexes.includes(index)}
                      type={"checkbox"}
                      id={item.id}
                      readOnly
                    />

                    <label className="">{t(item.label)}</label>
                  </li>
                ))}
              </ul>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    );
  }),
);
