import { useState } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "@/shared/lib/utils";
import { movieTypes, type MovieTypeValue } from '@/constants/movieTypes'

interface Props {
  onChange: (data: MovieTypeValue | null) => void
}

const ALL_ELEMENT = 'all'

interface IItems {
  label: string;
  count: number;
  value: MovieTypeValue;
}

// TODO: это нужно выделить в фичу фильтрации, которая потом пойдет в виджет галереи
export const NavTabs = ({ onChange }: Props) => {
  const { t } = useTranslation();

  const [selectedIndex, setSelectedIndex] = useState<MovieTypeValue | 'all'>(ALL_ELEMENT);

  const handleSelect = (value: MovieTypeValue | 'all') => {
    setSelectedIndex(value)
    onChange(value === 'all' ? null : value);
  };

  const navItems: IItems[] = [
    { label: t("Movies"), count: 2, value: movieTypes.MOVIE },
    { label: t("Serials"), count: 55, value: movieTypes.SERIALS },
    { label: t("Cartoons"), count: 224, value: movieTypes.ANIMATIONS },
  ];

  return (
    <ul className="flex flex-wrap gap-3">
      <li
        className={cn(
          "rounded-2 cursor-pointer p-4 hover:bg-blue-100 hover:shadow-2xl", (
            selectedIndex === ALL_ELEMENT && "bg-blue-300"
          )
        )}
        onClick={() => handleSelect(ALL_ELEMENT)}
      >
        {t("All")} {124}
      </li>
      {navItems.map((item, index) => (
          <li
            className={cn(
              "rounded-2 cursor-pointer p-4 hover:bg-blue-100 hover:shadow-2xl",
              selectedIndex === item.value && "bg-blue-300",
            )}
            onClick={() => handleSelect(item.value)}
            key={index}
          >
            {item.label} {item.count}
          </li>
        )
      )}
    </ul>
  )
    ;
};
