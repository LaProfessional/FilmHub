import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { ChevronDown } from "lucide-react";
import { X } from "lucide-react";

import { useHandleClickOutside } from "@/shared/lib/useHandleClickOutside";

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
  isAllOption?: boolean;
  allLabel?: string;
  onChange?: (value: string[]) => void;
  className?: string;
}

export const Filter = React.memo(
  forwardRef<FilterHandle, FilterProps>(
    ({ className = "", data, dropdownTitle, isAllOption = false, allLabel='', isMulti, onChange = null }, ref) => {
      const { t } = useTranslation();
      const [isOpen, setIsOpen] = useState(false);
      const wrapperRef = useRef<HTMLDivElement>(null);

      useHandleClickOutside(wrapperRef, isOpen, setIsOpen);

      const [value, setValue] = useState<string[]>([]);

      const optionHandler = (newValue: string) => {
        const lValue = [...value];

        // IsMulty == true
        const index = value.indexOf(newValue);
        if (isMulti && index > -1) {
          lValue.splice(index, 1);
        } else if (isMulti) {
          lValue.push(newValue);
        }

        // IsMulty == false
        if (!isMulti && lValue.length === 0) {
          lValue.push(newValue);
        } else if (!isMulti && lValue?.[0] !== newValue) {
          lValue.splice(0, 1);
          lValue.push(newValue);
        }

        setValue(lValue);
        if (typeof onChange === "function") {
          onChange(lValue);
        }
      };

      const resetFilter = () => {
        setValue([]);
        if (typeof onChange === "function") {
          onChange([]);
        }
      };

      useImperativeHandle(ref, () => ({
        reset: () => {
          resetFilter();
        },
      }));

      const labels: string[] = [];
      data.forEach((item: Item) => {
        const index = value.indexOf(item.value);
        if (index > -1) {
          labels.push(item.label);
        }
      });

      return (
        <div className={`${className} relative`} ref={wrapperRef}>
          <div className="w-full">
            <Popover>
              <PopoverTrigger asChild>
                <Button className={cn("w-full flex items-center justify-between")}>
                  <span className="">{labels.length ? labels.join(", ") : t(dropdownTitle)}</span>
                  {value.length ?
                    <ChevronDown className={cn("", isOpen && "")} />
                  : <X className="" onClick={resetFilter} />}
                </Button>
              </PopoverTrigger>

              <PopoverContent className={cn("w-max")}>
                <ul className={cn("grid grid-cols-1 gap-4", isOpen && "")}>
                  {isAllOption && (
                    <li
                      className={cn("w-full gap-2 flex items-center")}
                      onClick={resetFilter}
                    >
                      <Input
                        className={cn("flex-min w-6 h-6")}
                        checked={value.length === 0}
                        type={"checkbox"}
                        id="all"
                        readOnly
                      />

                      <label className={cn("flex-auto")}>{allLabel || t('All label')}</label>
                    </li>
                  )}
                  {data.map((item, index) => (
                    <li
                      className={cn("w-full gap-2 flex items-center")}
                      key={index}
                      onClick={() => optionHandler(item.value)}
                    >
                      <Input
                        className={cn("flex-min w-6 h-6")}
                        checked={value.includes(item.value)}
                        type={"checkbox"}
                        id={item.id}
                        readOnly
                      />

                      <label className={cn("flex-auto")}>{t(item.label)}</label>
                    </li>
                  ))}
                </ul>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      );
    },
  ),
);
