import styles from '@/features/modals/ui/media-modal-footer/MediaModalFooter.module.scss'
import { useTranslation } from 'react-i18next'
import type { SetStateAction } from 'react'

import { Button } from '@/shared/ui/Button.tsx'
import type { MovieData } from '@/features/modals/lib/types.ts'

interface MediaModalFooterProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<SetStateAction<boolean>>
  dataType: MovieData
}

export const MediaModalFooter: React.FC<MediaModalFooterProps> = ({
  isOpen,
  setIsOpen,
  dataType,
}) => {
  const { t } = useTranslation()

  return (
    <footer className={styles.modalFooter}>
      <Button type="button" variant="btnCancel" onClick={() => setIsOpen(!isOpen)}>
        {t('Cancel')}
      </Button>

      <Button variant="btnAddMovie">{t(dataType.add)}</Button>
    </footer>
  )
}
