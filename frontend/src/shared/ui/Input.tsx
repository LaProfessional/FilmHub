import styles from "./Input.module.scss";
import cls from "@fvilers/cls";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ variant, error, ...props }) => {
  return (
    <input className={cls(styles[variant], error && styles.error)} {...props} />
  );
};
