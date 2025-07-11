import type { NavItem, Settings } from "./types";

export const getSettingsData = () => {
  const navItems: NavItem[] = [
    {
      text: "Gallery",
      key: "gallery",
    },
    {
      text: "Sidebar",
      key: "sidebar",
    },
    {
      text: "Main Page",
      key: "mainPage",
    },
  ];

  const settings: Settings = {
    gallery: {
      title: "Gallery",
      desc: "Настройте отображения карточек с фильмами",
      options: [
        {
          value: "Описание под карточкой",
          type: "checkbox",
        },
        {
          value: "Для 4к мониторов",
          type: "switch",
        },
      ],
    },
    sidebar: {
      title: "Sidebar",
      options: [
        {
          value: "Описание под карточкой",
          type: "checkbox",
        },
        {
          value: "Для 4к мониторов",
          type: "switch",
        },
      ],
    },
    mainPage: {
      title: "Main Page",
      options: [
        {
          value: "Показывать progress bar флагов",
          type: "checkbox",
        },
        {
          value: "Показывать количество флагов",
          type: "checkbox",
        },
      ],
    },
  };

  return { navItems, settings };
};
