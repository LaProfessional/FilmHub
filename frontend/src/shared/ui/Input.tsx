import styles from "./Input.module.scss";
import cls from "@fvilers/cls";
import { useState } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ variant, error, ...props }) => {
  const [text, setText] = useState<string>("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const typedText = e.target.value;
    setText(typedText);
  }
  return (
    <input
      value={text}
      onChange={handleChange}
      className={cls(styles[variant], error && styles.error)}
      {...props}
    />
  );
};
