import styles from './MediaImageUpload.module.scss'
import errorMessage from '@/shared/styles/components/ErrorMessage.module.scss'
import { useTranslation } from 'react-i18next'
import { useDropzone } from 'react-dropzone'
import { useCallback, useEffect, useState } from 'react'
import { Controller, type Control, type FieldErrors, type UseFormRegister } from 'react-hook-form'
import type { MovieModalFormValues } from '@/features/modals/model/movieModalScheme.ts'

import { Input } from '@/shared/ui/Input.tsx'
import { FormGroup } from '@/features/modals/ui/form-group/FormGroup.tsx'
import cls from '@fvilers/cls'

interface MediaImageUploadProps {
  register: UseFormRegister<MovieModalFormValues>
  errors: FieldErrors<MovieModalFormValues>
  control: Control<MovieModalFormValues>
}

export const MediaImageUpload: React.FC<MediaImageUploadProps> = ({
  register,
  errors,
  control,
}) => {
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
    multiple: false,
  })

  // Url test image: https://fastly.picsum.photos/id/59/600/400.jpg?hmac=hCS_vJsQfuK1hUlwEUlGbUAnb_pFljGkD-2jdYxB1y8

  return (
    <div className={styles.imageUpload}>
      <Controller
        name="image"
        control={control}
        render={({ field }) => {
          useEffect(() => {
            if (url) field.onChange(url)
          }, [url])

          return (
            <div
              {...field}
              className={cls(styles.uploadPreview, errors.image?.message && styles.error)}
              {...getRootProps()}
            >
              <Input {...getInputProps()} />

              {url ? (
                <img className={styles.picture} src={url} alt="preview" />
              ) : preview ? (
                <img className={styles.picture} src={preview} alt="preview" />
              ) : (
                <span>{isDragActive ? t('Drop image here') : t('Upload cover')}</span>
              )}
            </div>
          )
        }}
      />

      {errors.image?.message ? (
        <p className={errorMessage.error}>{t(String(errors.image?.message))}</p>
      ) : (
        ''
      )}

      <FormGroup label={t('Link to the image')} error={errors.urlImage?.message}>
        <Input
          variant="imageInput"
          placeholder="https://example.com/image.jpg"
          {...register('urlImage')}
          error={errors.urlImage?.message}
          onChange={e => setUrl(e.target.value)}
        />
      </FormGroup>
    </div>
  )
}
