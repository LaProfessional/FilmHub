import React, { forwardRef } from "react";
import styles from "./Input.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ variant, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={styles[variant]}
        {...props}
      />
    );
  }
);