import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "@/shared/lib/utils";
import { SlidersHorizontal } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { Delete } from "lucide-react";

import { dataFilter } from "@/pages/home/model/filterData";
import { useHandleClickOutside } from "@/shared/lib/useHandleClickOutside";
import type { FilterHandle } from "@/widgets/filters/ui/Filter";

import { Filter } from "@/widgets/filters/ui/Filter";
import { Button, Popover, PopoverTrigger, PopoverContent } from "@/shared/ui";
import type { IFilters, IMoviePeriods } from '@/hooks/useMovie'

interface Props {
  onUpdateFilters: (value: Partial<IFilters>) => void;
}

export const FilterPanel = ({onUpdateFilters} : Props) => {
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

  const onChangePeriod = (index) => {
    const period: IMoviePeriods = dataYear[index].value
    onUpdateFilters({period: period})
  }

  const onChangeGenres = (value) => {
  }

  return (
    <div className="" ref={fieldsRef}>
      <div className="" tabIndex={0}>
        <Popover>
          <PopoverTrigger asChild>
            <Button className="flex border-2 border-gray-500 p-2">
              <SlidersHorizontal className="" />
              <span className="">{t("Filters")}</span>
              <ChevronDown className={cn("", isOpen && "")} />
            </Button>
          </PopoverTrigger>

          <PopoverContent>
            {/* TODO: это должны быть форма (или часть формы) с селектами */}
            <section className={cn("", isOpen && "")}>
              <Filter ref={genreRef} data={dataGenre} onChange={onChangeGenres} dropdownTitle={"Genre"} isMulti={true} />
              <Filter ref={yearRef} data={dataYear} onChange={onChangePeriod} dropdownTitle={"Year of release"} />
              <Filter ref={sortRef} data={dataOptions} dropdownTitle={"Sorting"} />
              <Button onClick={resetFilters}>
                <Delete className="" />
                {t("Reset all")}
              </Button>
            </section>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};
