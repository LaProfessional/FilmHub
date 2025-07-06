import { useSettings } from "@/shared/theme/SettingsContext";
import { SettingsToggler } from "@/shared/theme/SettingsToggler";
import { Button } from "@/shared/ui";
import { User, Folder, Flag, Settings } from "lucide-react";
import { useTranslation } from "react-i18next";
import s from "./UserActions.module.scss";

const userActionsButtons: { icon: React.ReactNode; text: string }[] = [
  {
    icon: <User size={18} />,
    text: "YourProfile",
  },
  {
    icon: <Folder size={18} />,
    text: "YourCollections",
  },
  {
    icon: <Flag size={18} />,
    text: "YourFlags",
  }
];

export const UserActions = () => {
  const { t } = useTranslation();
  const { setSettings, settings } = useSettings();

  const toggleButton = (button: string) => {
    if (button === "Settings") {
      setSettings(settings ? false : true);
    }
  };

  return (
    <>
      <ul className="flex flex-col gap-2">
        {userActionsButtons.map((item, index) => (
          <li className="flex gap-1" key={index}>
            {/* TODO: эти кнопки должны стать навигационными ссылка */}
            <Button className={s.button} onClick={() => toggleButton(item.text)}>
              {item.icon}
              <span>{t(item.text)}</span>
            </Button>
          </li>
        ))}
        <li className="flex gap-1" key={userActionsButtons.length}>
          <SettingsToggler />
        </li>
      </ul>
    </>
  );
};
