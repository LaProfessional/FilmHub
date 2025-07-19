import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui";
import { Edit2, MoreVerticalIcon, ShareIcon, Trash2 } from "lucide-react";

export const ActionsMenu = ({ onDelete, onEdit }: { onDelete: () => void; onEdit: () => void }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer opacity-0 group-hover:opacity-100 data-[state=open]:opacity-100 transition-all delay-150">
        <MoreVerticalIcon size={18} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <ShareIcon /> Share
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={onEdit}>
          <Edit2 /> Rename
        </DropdownMenuItem>
        <DropdownMenuItem onClick={onDelete}>
          <Trash2 /> Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
