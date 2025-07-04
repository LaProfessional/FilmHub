import styles from './Textarea.module.scss'
import cls from '@fvilers/cls'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant: string
  error?: string
}

export const Textarea: React.FC<TextareaProps> = ({ variant, error, ...props }) => {
  return <textarea className={cls(styles[variant], error && styles.error)} {...props}></textarea>
}
