import type { Settings } from "./types";

export const getSettingsData = () => {
  const navItems = ["Gallery", "Sidebar", "Main Page"];

  const settings: Settings[] = [
    {
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
    {
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
    {
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
  ];

  const stub = { title: "", options: [] };

  return { navItems, settings, stub };
};
