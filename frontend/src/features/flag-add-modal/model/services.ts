import React, { type ChangeEvent, type Dispatch, type RefObject, type SetStateAction } from "react";
import iro from "@jaames/iro";
import ColorPicker = iro.ColorPicker;
import tablerIcons from "@iconify/json/json/tabler.json";
import type { IconType, IconTypeMap } from "@/features/flag-add-modal/model/types";

export const initColorPicker = (
  colorPickerRef: RefObject<HTMLDivElement | null>,
  selectedColor: string,
  setSelectedColor: (color: string) => void,
  iroInstanceRef: RefObject<ColorPicker | null>,
) => {
  if (colorPickerRef.current) {
    // @ts-expect-error: iro.ColorPicker не имеет явно объявленного конструктора
    const picker = new iro.ColorPicker(colorPickerRef.current, {
      width: 200,
      color: selectedColor,
    });

    picker.on("color:change", (color: { hexString: string }) => {
      setSelectedColor(color.hexString);
    });

    iroInstanceRef.current = picker;
  }
};

export const handleSearchIcon = (
  e: ChangeEvent<HTMLInputElement>,
  queryRef: RefObject<string>,
  timeoutId: RefObject<ReturnType<typeof setTimeout> | null>,
  setIconEntries: Dispatch<SetStateAction<[string, IconTypeMap][]>>,
) => {
  queryRef.current = e.target.value.trim();

  if (timeoutId.current) clearTimeout(timeoutId.current);

  timeoutId.current = setTimeout(() => {
    setIconEntries(() => {
      return Object.entries(tablerIcons.icons).filter(([icon]) => icon.includes(queryRef.current));
    });
  }, 300);
};

export const handleAddIcon = (
  IconName: string,
  icon: IconType,
  dataIcons: [string, IconType][],
  setDataIcons: React.Dispatch<React.SetStateAction<[string, IconType][]>>,
) => {
  const alreadyExists = dataIcons.some(([name]) => name === IconName);
  if (alreadyExists) return;
  setDataIcons((prev) => [...prev, [IconName, icon]]);
};
