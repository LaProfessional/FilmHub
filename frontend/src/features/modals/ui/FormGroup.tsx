import { useTranslation } from 'react-i18next'
import { clsx } from 'clsx'

interface FormGroupProps {
  label: string | undefined
  error?: string | undefined
  children: React.ReactNode
}

export const FormGroup: React.FC<FormGroupProps> = ({ label, error, children }) => {
  const { t } = useTranslation()

  return (
    <div className="relative w-full">
      <label className="block text-[14px] text-[#FAFAFAFF] mb-[5px]">{t(label || '')}</label>
      {children}

      {error && <p className={clsx(error && 'text-[#EF4444FF] text-[12px] pt-1')}>{t(error)}</p>}
    </div>
  )
}
