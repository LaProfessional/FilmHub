import styles from '@/features/modals/ui/media-modal-header/MediaModalHeader.module.scss'
import { useTranslation } from 'react-i18next'
import type { SetStateAction } from 'react'

import { Button } from '@/shared/ui/button'

import { X } from 'lucide-react'

import type { MovieData } from '@/features/modals/lib/types.ts'

interface MediaModalHeaderProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<SetStateAction<boolean>>
  dataType: MovieData
}

export const MediaModalHeader: React.FC<MediaModalHeaderProps> = ({
  isOpen,
  setIsOpen,
  dataType,
}) => {
  const { t } = useTranslation()

  return (
    <header className={styles.modalHeader}>
      <h2 className={styles.modalTitle}>{t(dataType.add)}</h2>

      <Button type="button" onClick={() => setIsOpen(!isOpen)}>
        <X className={styles.iconX} />
      </Button>
    </header>
  )
}
