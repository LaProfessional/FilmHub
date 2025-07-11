import { CheckboxOption } from "./CheckboxOption";
import { SwitchOption } from "./SwitchOption";

export const SettingsOptions = () => {
  return (
    <section className="p-4">
      <h1>Gallery</h1>
      <p>Настройте отображения карточек с фильмами</p>

      <div>
        <CheckboxOption value="Описание под карточкой" />
        <SwitchOption value="Для 4к мониторов" />
      </div>
    </section>
  );
};
