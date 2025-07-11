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
          type: "switch",
        },
        {
          value: "Без отступов по краям",
          type: "switch",
        },
        {
          value: "Для 4к мониторов",
          type: "checkbox",
        },
        {
          value: "Слайдер",
          type: "switch",
        },
        {
          value: "Список",
          type: "switch",
        },
        {
          value: "Сетка",
          type: "switch",
        },
        {
          value: "Большие карточки",
          type: "switch",
        },
        {
          value: "Отключить отображение флагов на фильме",
          type: "switch",
        },
        {
          value: "Показывать только картинку флага",
          type: "switch",
        },
        {
          value: "Маленькие карточки",
          type: "switch",
        },
        {
          value: "Маленькие карточки",
          type: "switch",
        },
        {
          value: "Маленькие карточки",
          type: "switch",
        },
        {
          value: "Маленькие карточки",
          type: "switch",
        },
        {
          value: "Маленькие карточки",
          type: "switch",
        },
        {
          value: "Маленькие карточки",
          type: "switch",
        },
        {
          value: "Маленькие карточки",
          type: "switch",
        },
      ],
    },
    sidebar: {
      title: "Sidebar",
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
