import styles from './ImageUpload.module.scss'

import { Input } from '@/shared/ui/Input.tsx'
import { FormGroup } from '@/widgets/ui/form-group/FormGroup.tsx'

export const ImageUpload = () => {
  return (
    <div className={styles.imageUpload}>
      <label>
        <div className={styles.uploadPreview}>
          <span>Upload image</span>
          <Input variant="hiddenInput" type="file" accept="image"></Input>
        </div>
      </label>

      <FormGroup label="Ссылка на изображение">
        <Input variant="imageInput" placeholder="https://example.com/image.jpg" />
      </FormGroup>
    </div>
  )
}
