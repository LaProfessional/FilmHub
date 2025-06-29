import styles from './MediaImageUpload.module.scss'
import { useTranslation } from 'react-i18next'
import { useDropzone } from 'react-dropzone'
import { useCallback, useState } from 'react'
import type { FieldErrors, UseFormRegister } from 'react-hook-form'
import type { MovieModalFormValues } from '@/features/modals/model/movieModalScheme.ts'

import { Input } from '@/shared/ui/Input.tsx'
import { FormGroup } from '@/features/modals/ui/form-group/FormGroup.tsx'

interface MediaImageUploadProps {
  register: UseFormRegister<MovieModalFormValues>
  errors: FieldErrors<MovieModalFormValues>
}

export const MediaImageUpload: React.FC<MediaImageUploadProps> = ({ register, errors }) => {
  const { t } = useTranslation()

  const [preview, setPreview] = useState<string | null>(null)
  const [url, setUrl] = useState<string>('')

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    if (file) setPreview(URL.createObjectURL(file))
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
  })

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Url test image: https://fastly.picsum.photos/id/59/600/400.jpg?hmac=hCS_vJsQfuK1hUlwEUlGbUAnb_pFljGkD-2jdYxB1y8
    setUrl(e.target.value)
  }

  return (
    <div className={styles.imageUpload}>
      <div className={styles.uploadPreview} {...getRootProps()}>
        <Input {...getInputProps()} />

        {url ? (
          <img className={styles.picture} src={url} alt="preview" />
        ) : preview ? (
          <img className={styles.picture} src={preview} alt="preview" />
        ) : (
          <span>{isDragActive ? t('Drop image here') : t('Upload cover')}</span>
        )}
      </div>

      <FormGroup label={t('Link to the image')} error={errors.urlImage?.message}>
        <Input
          variant="imageInput"
          placeholder="https://example.com/image.jpg"
          {...register('urlImage')}
          error={errors.urlImage?.message}
          onChange={e => handleUrlChange(e)}
        />
      </FormGroup>
    </div>
  )
}
