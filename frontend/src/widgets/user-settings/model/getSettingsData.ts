import type { TFunction } from "i18next";
import type { NavItem, Settings } from "./types";

export const getSettingsData = (t: TFunction) => {
  const navItems: NavItem[] = [
    {
      text: t("settings.nav.gallery"),
      key: "gallery",
    },
    {
      text: t("settings.nav.sidebar"),
      key: "sidebar",
    },
    {
      text: t("settings.nav.mainPage"),
      key: "mainPage",
    },
  ];

  const settings: Settings = {
    gallery: {
      title: t("settings.gallery.title"),
      desc: t("settings.gallery.desc"),
      options: [
        { value: t("settings.gallery.options.descBelowCard"), type: "switch" },
        { value: t("settings.gallery.options.noGutters"), type: "switch" },
        { value: t("settings.gallery.options.for4k"), type: "checkbox" },
        // и т.д.
      ],
    },
    sidebar: {
      title: t("settings.sidebar.title"),
      options: [
        { value: t("settings.sidebar.options.showProgress"), type: "checkbox" },
        { value: t("settings.sidebar.options.showCount"), type: "checkbox" },
      ],
    },
    mainPage: {
      title: t("settings.mainPage.title"),
      options: [
        { value: t("settings.mainPage.options.param"), type: "checkbox" },
        { value: t("settings.mainPage.options.showCount"), type: "checkbox" },
      ],
    },
  };

  return { navItems, settings };
};
