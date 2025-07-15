import { CurrentUserInfoShort } from "@/entities/current-user";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Separator,
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/shared/ui";

import { LogoutButton } from "@/features/auth";
import { useCurrentUser } from "@/entities/current-user";
import { UserActions } from "./UserActions";

export const UserMenu = () => {
  const user = useCurrentUser();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Avatar>
          <AvatarImage src="frontend_chan_170.png" alt="Profile Avatar" />
          <AvatarFallback>FC</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col gap-2" align="end" sideOffset={5}>
        {/* TODO: убрать хардкод, исправить */}
        <CurrentUserInfoShort
          name={user?.username || "Arnold"}
          email={user?.email || "callme@tonight.uwu"}
        />
        <Separator decorative orientation="horizontal" />
        <UserActions />
        <Separator decorative orientation="horizontal" />
        <LogoutButton />
      </PopoverContent>
    </Popover>
  );
};
