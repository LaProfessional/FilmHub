import styles from "@/widgets/sidebar/ui/SidebarSectionHeader.module.scss"
import cls from "@fvilers/cls"

import { ReactComponent as ArrowSvg } from "@/shared/assets/sidebar/Arrow.svg"

import { Button } from "@/shared/ui/Button.tsx"

interface SidebarSectionHeaderProps {
  variant: string
  headingStyle: string
  heading: string

  toggleMenu: () => void
  isClose: Boolean
}

export const SidebarSectionHeader: React.FC<SidebarSectionHeaderProps> = ({
  variant,
  headingStyle,
  heading,
  toggleMenu,
  isClose,
}) => {
  return (
    <div className={styles[variant]}>
      {headingStyle === "title" ? (
        <h2 className={styles[headingStyle]}>{heading}</h2>
      ) : (
        <h3 className={styles[headingStyle]}>{heading}</h3>
      )}

      <Button variant={"collapseExpandBtn"} onClick={toggleMenu}>
        <ArrowSvg className={cls(styles.arrowSvg, isClose && styles.close)} />
      </Button>
    </div>
  )
}
