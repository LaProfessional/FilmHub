import styles from '@/features/modals/ui/media-modal-footer/MediaModalFooter.module.scss'
import { useTranslation } from 'react-i18next'
import type { SetStateAction } from "react";

import { Button } from '@/shared/ui/Button.tsx'

interface MediaModalFooterProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<SetStateAction<boolean>>
}

export const MediaModalFooter: React.FC<MediaModalFooterProps> = ({ isOpen, setIsOpen }) => {
  const { t } = useTranslation()

  return (
    <footer className={styles.modalFooter}>
      <Button variant="btnCancel" onClick={() => setIsOpen(!isOpen)}>
        {t('Cancel')}
      </Button>

      <Button variant="btnAddMovie" type="submit">
        {t('Add new movie')}
      </Button>
    </footer>
  )
}
