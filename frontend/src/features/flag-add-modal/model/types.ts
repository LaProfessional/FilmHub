import tablerIcons from "@iconify/json/json/tabler.json";

export type IconType = {
  body: string;
  width?: number;
  height?: number;
};

type IconMap = typeof tablerIcons.icons;
export type IconTypeMap = IconMap[keyof IconMap];
