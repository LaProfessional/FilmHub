import { Popover } from "@/shared/ui/Popover"
import Avatar from "@/shared/assets/header/Avatar.png"
import styles from "./UserMenu.module.scss"
import { UserInfo } from "./UserInfo"
import { UserActions } from "./UserActions"
import { LogoutButton } from "./LogoutButton"
import { Separator } from "@/shared/ui/Separator"

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
        <LogoutButton />
      </Popover.Content>
    </Popover>
  )
}
