import { User, Folder, Flag, Settings } from "lucide-react"
import { useTranslation } from "react-i18next"
import clsx from "clsx"
import styles from "./UserMenu.module.scss"

interface Props {
  className?: string
}

export const UserActions = ({ className }: Props) => {
  const { t } = useTranslation()

  return (
    <ul className={clsx(styles.menuList, className)}>
      <li>
        <User size={18} />
        {t("YourProfile")}
      </li>
      <li>
        <Folder size={18} />
        {t("YourCollections")}
      </li>
      <li>
        <Flag size={18} />
        {t("YourFlags")}
      </li>
      <li>
        <Settings size={18} />
        {t("Settings")}
      </li>
    </ul>
  )
}
