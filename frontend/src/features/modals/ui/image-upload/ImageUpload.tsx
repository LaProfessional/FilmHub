import styles from './ImageUpload.module.scss'
import { useTranslation } from 'react-i18next'

import { Input } from '@/shared/ui/Input.tsx'
import { FormGroup } from '@/features/modals/ui/form-group/FormGroup.tsx'

export const ImageUpload = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.imageUpload}>
      <label>
        <div className={styles.uploadPreview}>
          <span>{t('Upload cover')}</span>
          <Input variant="hiddenInput" type="file" accept="image"></Input>
        </div>
      </label>

      <FormGroup label={t('Link to the image')}>
        <Input variant="imageInput" placeholder="https://example.com/image.jpg" />
      </FormGroup>
    </div>
  )
}
