import styles from './Textarea.module.scss'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant: string
}

export const Textarea: React.FC<TextareaProps> = ({ variant, ...props }) => {
  return <textarea className={styles[variant]} {...props}></textarea>
}