import type { SettingsItem } from "../model/types";
import { CheckboxOption } from "./CheckboxOption";
import { SwitchOption } from "./SwitchOption";

export const SettingsOptions = ({ settings }: { settings: SettingsItem }) => {
  const { options, title, desc } = settings;

  return (
    <section className="p-5 pr-30 w-full">
      <h1 className="text-3xl">{title}</h1>
      {!!desc && (
        <p className="text-lg font-extralight">Настройте отображения карточек с фильмами</p>
      )}

      <div className="mt-10">
        {options.map(({ type, value }) =>
          type === "checkbox" ? <CheckboxOption value={value} /> : <SwitchOption value={value} />,
        )}
      </div>
    </section>
  );
};
