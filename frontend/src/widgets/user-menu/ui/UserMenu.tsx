import {} from "@/shared/ui";
import { UserInfoShort } from "@/entities/user";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Separator,
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/shared/ui";

import { UserActions } from "./UserActions";
import { LogoutButton } from "@/features/auth";

export const UserMenu = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Avatar>
          <AvatarImage src="frontend_chan_170.png" alt="Profile Avatar" />
          <AvatarFallback>FC</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col gap-2" align="end" sideOffset={5}>
        {/* TODO: убрать хардкод */}
        <UserInfoShort name="Arnold" email="callme@tonight.uwu" />
        <Separator decorative orientation="horizontal" />
        <UserActions />
        <Separator decorative orientation="horizontal" />
        <LogoutButton />
      </PopoverContent>
    </Popover>
  );
};
