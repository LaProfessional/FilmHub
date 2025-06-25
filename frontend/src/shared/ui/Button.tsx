import styles from './Button.module.scss'
import cls from '@fvilers/cls'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: string
  isActive?: boolean
  error?: string
}

export const Button: React.FC<ButtonProps> = ({ children, variant, isActive, error, ...props }) => {
  const className = `${cls(variant && styles[variant], isActive && styles.active, error && styles.error)}`

  return (
    <button {...props} className={className}>
      {children}
    </button>
  )
}
