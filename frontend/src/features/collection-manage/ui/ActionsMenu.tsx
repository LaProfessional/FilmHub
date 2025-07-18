import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui";
import { MoreVerticalIcon } from "lucide-react";

export const ActionsMenu = ({ onEdit }: { onEdit: () => void }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer opacity-0 group-hover:opacity-100 data-[state=open]:opacity-100 transition-all delay-150">
        <MoreVerticalIcon size={18} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={onEdit}>Rename</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
