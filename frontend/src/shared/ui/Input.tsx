import styles from "./Input.module.scss";
import cls from "@fvilers/cls";
import { useState } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant: string;
  error?: string;
  type?: string;
}

export const Input: React.FC<InputProps> = ({
  variant,
  error,
  type,
  ...props
}) => {
  const [text, setText] = useState<string>("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const typedText = e.target.value;
    console.log("input type from shared/ui/input");
    setText(typedText);
  }
  return (
    <input
      value={text}
      type={type}
      onChange={handleChange}
      className={cls(styles[variant], error && styles.error)}
      name="search"
      {...props}
    />
  );
};
