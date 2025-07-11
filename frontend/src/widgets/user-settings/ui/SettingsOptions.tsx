import type { SettingsItem } from "../model/types";
import { CheckboxOption } from "./CheckboxOption";
import { SwitchOption } from "./SwitchOption";

type Props = {
  settings: SettingsItem;
  savedOptions: Record<string, boolean>;
  handleChange: (key: string, value: boolean) => void;
};

export const SettingsOptions = ({ settings, savedOptions, handleChange }: Props) => {
  const { options, title, desc } = settings;

  return (
    <section className="p-5 lg:pr-30 w-full overflow-y-auto">
      <h1 className="lg:text-3xl text-xl">{title}</h1>
      {!!desc && (
        <p className="lg:text-lg text-[16px] font-extralight">
          Настройте отображения карточек с фильмами
        </p>
      )}

      <div className="mt-10 flex flex-col gap-4 ">
        {options.map(({ type, value }) =>
          type === "checkbox" ?
            <CheckboxOption
              value={value}
              checked={savedOptions[value] || false}
              onChange={(bool) => handleChange(value, bool)}
            />
          : <SwitchOption
              value={value}
              checked={savedOptions[value] || false}
              onChange={(bool) => handleChange(value, bool)}
            />,
        )}
      </div>
    </section>
  );
};
