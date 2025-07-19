import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui";
import { Edit2, MoreVerticalIcon, ShareIcon, Trash2 } from "lucide-react";
import { useTranslation } from "react-i18next";

export const ActionsMenu = ({ onDelete, onEdit }: { onDelete: () => void; onEdit: () => void }) => {
  const { t } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer opacity-0 group-hover:opacity-100 data-[state=open]:opacity-100 transition-all delay-150">
        <MoreVerticalIcon size={18} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <ShareIcon /> {t("action-menu.share")}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={onEdit}>
          <Edit2 /> {t("action-menu.edit")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={onDelete}>
          <Trash2 /> {t("action-menu.delete")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
