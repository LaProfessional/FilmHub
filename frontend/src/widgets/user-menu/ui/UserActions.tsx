import { useSettings } from "@/shared/theme/SettingsContext";
import { SettingsToggler } from "@/shared/theme/SettingsToggler";
import { Button } from "@/shared/ui";
import { User, Folder, Flag } from "lucide-react";
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
  const { updateSettings } = useSettings();

  const toggleButton = (button: string) => {
    if (button === "YourFlags") {
      updateSettings({
        flagsVisibility: false,
      });
    }
  };

  return (
    <>
      <ul className="flex flex-col gap-2">
        {userActionsButtons.map((item, index) => (
          <li className="flex gap-1" key={index}>
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
