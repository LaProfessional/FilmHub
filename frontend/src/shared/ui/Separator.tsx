import styles from "./Separator.module.scss";
import clsx from "clsx";

interface Props {
  className?: string;
}

export const Separator = ({ className }: Props) => {
  return <div className={clsx(styles.separator, className)} />;
};