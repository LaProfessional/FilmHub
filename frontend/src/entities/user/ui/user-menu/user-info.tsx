import styles from "./user-menu.module.scss"
import clsx from "clsx"

interface Props {
  className?: string
}

export const UserInfo = ({ className }: Props) => {
  return (
    <div className={clsx(styles.userInfo, className)}>
      <div className={styles.username}>vokz55</div>
      <div className={styles.email}>vokz55@yandex.ru</div>
    </div>
  )
}
