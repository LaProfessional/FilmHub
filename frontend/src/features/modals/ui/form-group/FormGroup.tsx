import styles from './FormGroup.module.scss'
import { useTranslation } from 'react-i18next'

interface FormGroupProps {
  label: string
  children: React.ReactNode
}

export const FormGroup: React.FC<FormGroupProps> = ({ label, children }) => {
  const { t } = useTranslation()

  return (
    <div className={styles.formGroup}>
      <label className={styles.label}>{t(label)}</label>
      {children}
    </div>
  )
}
