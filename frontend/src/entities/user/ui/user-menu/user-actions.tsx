import styles from "./user-menu.module.scss";
import { User, Folder, Flag, Settings } from "lucide-react";

import { useTranslation } from "react-i18next";
import clsx from "clsx";

interface Props {
  className?: string;
}

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

export const UserActions = ({ className }: Props) => {
  const { t } = useTranslation();

  return (
    <ul className={clsx(styles.menuList, className)}>
      {userActionsButtons.map((item, index) => (
        <li key={index}>
          {item.icon}
          <span>{t(item.text)}</span>
        </li>
      ))}
    </ul>
  );
};
