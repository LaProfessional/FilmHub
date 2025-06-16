import styles from "./Button.module.scss"
import cls from "@fvilers/cls"

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant: string
  isActive?: boolean
}

export const Button: React.FC<ButtonProps> = ({ children, variant, isActive, ...props }) => {
  const className = `${cls(styles[variant], isActive && styles.active)}`

  return (
    <button {...props} className={className}>
      {children}
    </button>
  )
}
