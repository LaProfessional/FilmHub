import cls from "clsx";
import styles from "./FolderItem.module.scss";
import { Pencil, Trash2 } from "lucide-react";

interface FolderItemProps {
  name: string;
  isActive: boolean;
  isPublic: boolean;
  isSystem: boolean;
  onClick: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

export const FolderItem = ({
  name,
  isActive,
  isSystem,
  onClick,
  onEdit,
  onDelete,
}: FolderItemProps) => {
  return (
    <li
      className={cls(styles.item, isActive && styles.select)}
      onClick={onClick}
    >
      <span className={styles.name}>{name}</span>
      {!isSystem && (
        <div className={styles.actions} onClick={(e) => e.stopPropagation()}>
          <button className={styles.iconBtn} onClick={onEdit}>
            <Pencil size={16} />
          </button>
          <button className={styles.iconBtn} onClick={onDelete}>
            <Trash2 size={16} />
          </button>
        </div>
        )}

    </li>
  );
};