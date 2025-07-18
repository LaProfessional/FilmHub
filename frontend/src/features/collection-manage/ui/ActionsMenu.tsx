import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui";
import { MoreVerticalIcon } from "lucide-react";

export const ActionsMenu = ({ onDelete, onEdit }: { onDelete: () => void; onEdit: () => void }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer opacity-0 group-hover:opacity-100 data-[state=open]:opacity-100 transition-all delay-150">
        <MoreVerticalIcon size={18} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={onEdit}>Rename</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={onDelete}>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
