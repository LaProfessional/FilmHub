import { Button } from "@/shared/ui";
import { User, Folder, Flag, Settings } from "lucide-react";

import { useTranslation } from "react-i18next";

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
  },
  {
    icon: <Settings size={18} />,
    text: "Settings",
  },
];

export const UserActions = () => {
  const { t } = useTranslation();

  return (
    <ul className="flex flex-col gap-2">
      {userActionsButtons.map((item, index) => (
        <li className="flex gap-1" key={index}>
          {/* TODO: эти кнопки должны стать навигационными ссылка */}
          <Button>
            {item.icon}
            <span>{t(item.text)}</span>
          </Button>
        </li>
      ))}
    </ul>
  );
};
