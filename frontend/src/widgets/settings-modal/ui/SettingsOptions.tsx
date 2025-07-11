import { CheckboxOption } from "./CheckboxOption";
import { SwitchOption } from "./SwitchOption";

export const SettingsOptions = ({ title }: { title: string }) => {
  return (
    <section className="p-5 pr-30 w-full">
      <h1 className="text-3xl">{title}</h1>
      <p className="text-lg font-extralight">Настройте отображения карточек с фильмами</p>

      <div className="mt-10">
        <CheckboxOption value="Описание под карточкой" />
        <SwitchOption value="Для 4к мониторов" />
      </div>
    </section>
  );
};
