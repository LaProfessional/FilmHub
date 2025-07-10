import styles from './Textarea.module.scss'
import { clsx } from 'clsx'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant: string
  error?: string | undefined
}

export const Textarea: React.FC<TextareaProps> = ({ variant, error, ...props }) => {
  return <textarea className={clsx(styles[variant], error && styles.error)} {...props}></textarea>
}
