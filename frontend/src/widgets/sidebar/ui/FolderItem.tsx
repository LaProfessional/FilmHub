import styles from "./FolderItem.module.scss";

export const FolderItem = ({ name, isActive, onClick }: {
  name: string;
  isActive: boolean;
  onClick: () => void;
}) => (
  <li
    className={`${styles.item} ${isActive ? styles.select : ""}`}
    onClick={onClick}
  >
    {name}
  </li>
);