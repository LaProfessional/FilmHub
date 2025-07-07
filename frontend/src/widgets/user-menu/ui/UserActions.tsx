import { useSettings } from "@/shared/theme/SettingsContext";
import { SettingsToggler } from "@/features/SettingsToggler/ui";
import { Button } from "@/shared/ui";
import { User, Folder, Flag, Settings } from "lucide-react";
import { useTranslation } from "react-i18next";

const toggleSettingsWindow = (openWindow: Function) => {
    openWindow();
};

export const UserActions = () => {
  const openSettingsWindow = () => {
    setOpen(true);
  };

  const userActionsButtons: { icon: React.ReactNode; text: string; action: () => void }[] = [
    {
      icon: <User size={18} />,
      text: "YourProfile",
      action: () => {},
    },
    {
      icon: <Folder size={18} />,
      text: "YourCollections",
      action: () => {},
    },
    {
      icon: <Flag size={18} />,
      text: "YourFlags",
      action: () => {},
    },
    {
      icon: <Settings size={18} />,
      text: "Settings",
      action: () => toggleSettingsWindow(openSettingsWindow),
    },

  ];
  const { t } = useTranslation();
  const { setOpen } = useSettings();

  return (
    <>
      <ul className="flex flex-col gap-2">
        {userActionsButtons.map((item, index) => (
          <li className="flex gap-1" key={index}>
            <Button className="cursor-pointer" onClick={item.action}>
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
