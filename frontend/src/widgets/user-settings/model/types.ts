export type Option = {
  value: string;
  type: "checkbox" | "switch";
};

export type NavItemKey = "gallery" | "sidebar" | "mainPage";

export type NavItem = {
  text: string;
  key: NavItemKey;
};

export type SettingsItem = {
  title: string;
  desc?: string;
  options: Option[];
};

export type ActiveOptions = {
  [key in NavItemKey]: Record<string, boolean>;
};

export type Settings = Record<NavItemKey, SettingsItem>;
