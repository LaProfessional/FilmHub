import styles from '@/features/modals/ui/media-modal-header/MediaModalHeader.module.scss'
import { useTranslation } from 'react-i18next'

import { Button } from '@/shared/ui/Button.tsx'

import { X } from 'lucide-react'
import type { SetStateAction } from 'react'

interface MediaModalHeaderProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<SetStateAction<boolean>>
}

export const MediaModalHeader: React.FC<MediaModalHeaderProps> = ({ isOpen, setIsOpen }) => {
  const { t } = useTranslation()

  return (
    <header className={styles.modalHeader}>
      <h2 className={styles.modalTitle}>{t('Add new movie')}</h2>
      <Button onClick={() => setIsOpen(!isOpen)}>
        <X className={styles.iconX} />
      </Button>
    </header>
  )
}
