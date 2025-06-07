import cls from "clsx";
import styles from "./FolderItem.module.scss";

export const FolderItem = ({ name, isActive, onClick }: {
  name: string;
  isActive: boolean;
  onClick: () => void;
}) => (
  <li
    className={cls(styles.item, isActive && styles.select)}
    onClick={onClick}
  >
    {name}
  </li>
);