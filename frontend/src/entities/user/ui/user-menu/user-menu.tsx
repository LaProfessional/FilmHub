import styles from "./user-menu.module.scss";

import { Popover, PopoverTrigger, PopoverContent, Separator } from "@/shared/ui";
import Avatar from "@/shared/assets/header/Avatar.png";

import { UserInfo } from "./user-info";
import { UserActions } from "./user-actions";
import { LogoutBtn } from "@/features/auth";

export const UserMenu = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <img src={Avatar} alt="Avatar" className={styles.avatar} />
      </PopoverTrigger>
      <PopoverContent>
        <UserInfo />
        <Separator />
        <UserActions />
        <Separator />
        <LogoutBtn />
      </PopoverContent>
    </Popover>
  );
};
