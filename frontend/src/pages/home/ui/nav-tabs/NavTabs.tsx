import { useState } from "react"
import styles from "@/pages/home/ui/nav-tabs/NavTabs.module.scss"
import cls from "@fvilers/cls"
import { useTranslation } from "react-i18next"

export const NavTabs = () => {
  const { t } = useTranslation()

  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  const handleSelect = (index: number) => setSelectedIndex(index)

  const navItems = [
    { label: t("All"), count: 124 },
    { label: t("Movies"), count: 2 },
    { label: t("Serials"), count: 55 },
    { label: t("Cartoons"), count: 224 },
  ]

  return (
    <ul className={styles.navItemWrapper}>
      {navItems.map((item, index) => (
        <li
          className={cls(styles.navItem, selectedIndex === index && styles.select)}
          onClick={() => handleSelect(index)}
          key={index}
        >
          {item.label} {item.count}
        </li>
      ))}
    </ul>
  )
}
