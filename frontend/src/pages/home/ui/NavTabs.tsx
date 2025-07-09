import { useState } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "@/shared/lib/utils";

// TODO: это нужно выделить в фичу фильтрации, которая потом пойдет в виджет галереи
export const NavTabs = () => {
  const { t } = useTranslation();

  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handleSelect = (index: number) => setSelectedIndex(index);

  const navItems = [
    { label: t("All"), count: 124 },
    { label: t("Movies"), count: 2 },
    { label: t("Serials"), count: 55 },
    { label: t("Cartoons"), count: 224 },
  ];

  return (
    <ul className="flex flex-wrap gap-3">
      {navItems.map((item, index) => (
        <li
          className={cn(
            "rounded-2 cursor-pointer p-4 hover:bg-blue-100 hover:shadow-2xl",
            selectedIndex === index && "bg-blue-300",
          )}
          onClick={() => handleSelect(index)}
          key={index}
        >
          {item.label} {item.count}
        </li>
      ))}
    </ul>
  );
};
