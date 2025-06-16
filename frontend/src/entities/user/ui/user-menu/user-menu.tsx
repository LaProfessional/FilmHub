import styles from "./user-menu.module.scss"

import { Popover, Separator } from "@/shared/ui"
import Avatar from "@/shared/assets/header/Avatar.png"

import { UserInfo } from "./user-info"
import { UserActions } from "./user-actions"
import { LogoutBtn } from "@/features/auth"

export const UserMenu = () => {
  return (
    <Popover>
      <Popover.Trigger asChild>
        <img src={Avatar} alt="Avatar" className={styles.avatar} />
      </Popover.Trigger>
      <Popover.Content variant="userMenu">
        <UserInfo />
        <Separator />
        <UserActions />
        <Separator />
        <LogoutBtn />
      </Popover.Content>
    </Popover>
  )
}
