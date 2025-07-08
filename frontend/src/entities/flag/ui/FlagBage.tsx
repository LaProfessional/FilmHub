import { useTranslation } from "react-i18next";
import { type Flag } from "../model";

export function FlagBage(props: Flag) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col">
      <div className="flex justify-between align-baseline">
        <span
          className="text-base px-2 py-1 rounded whitespace-nowrap overflow-ellipsis overflow-hidden w-fit h-fit"
          title={t(props.flagName)}
          style={{
            color: props.color,
            backgroundColor: props.bg,
            borderLeft: props.border,
          }}
        >
          {t(props.flagName)}
        </span>
        <span className="p-2 rounded-full">3</span>
      </div>

      <div className="">
        <div className="" style={{ backgroundColor: props.progress }}></div>
      </div>
    </div>
  );
}
