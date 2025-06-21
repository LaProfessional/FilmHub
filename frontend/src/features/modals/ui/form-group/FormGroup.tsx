import styles from './FormGroup.module.scss'
import errorMessage from '@/shared/styles/components/ErrorMessage.module.scss'
import { useTranslation } from 'react-i18next'
import cls from '@fvilers/cls'

interface FormGroupProps {
  label: string
  error?: string
  children: React.ReactNode
}

export const FormGroup: React.FC<FormGroupProps> = ({ label, error, children }) => {
  const { t } = useTranslation()

  return (
    <div className={styles.formGroup}>
      <label className={styles.label}>{t(label)}</label>
      {children}

      {error && (
        <p className={cls(error && errorMessage.error)}>{t(error)}</p>
      )}
    </div>
  )
}