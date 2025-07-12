import { useTranslation } from 'react-i18next'
import { useDropzone } from 'react-dropzone'
import { useCallback, useEffect, useState, useRef } from 'react'
import {
  Controller,
  type Control,
  type FieldErrors,
  type UseFormRegister,
  type ControllerRenderProps,
} from 'react-hook-form'
import type { MovieModalFormValues } from '@/features/modals/model/movieModalScheme.ts'

import { Input } from '@/shared/ui/input'
import { FormGroup } from '@/features/modals/ui/FormGroup'
import { usePageDragging } from '@/shared/lib/usePageDragging'
import { clsx } from 'clsx'

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
  const fieldRef = useRef<ControllerRenderProps<MovieModalFormValues> | null>(null)

  const isPageDragging = usePageDragging()

  // Url test image: https://fastly.picsum.photos/id/59/600/400.jpg?hmac=hCS_vJsQfuK1hUlwEUlGbUAnb_pFljGkD-2jdYxB1y8

  useEffect(() => {
    if (url && fieldRef.current) fieldRef.current.onChange(url)
  }, [url])

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]

    if (file && fieldRef.current) {
      setPreview(URL.createObjectURL(file))
      fieldRef.current.onChange(file)
    }
  }, [])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    multiple: false,
  })

  return (
    <div className="flex flex-col gap-[5px] min-w-[100px] max-w-[230px] w-full mr-[25px]">
      <Controller
        name="image"
        control={control}
        render={({ field }) => {
          fieldRef.current = field

          return (
            <div
              {...field}
              className={clsx(
                'relative h-full w-full max-h-[320px] mb-[15px] cursor-pointer border border-dashed border-[#E2E8F0FF] rounded-[12px]',
                errors.image?.message && 'border-[#EF4444FF] border-dashed rounded-[12px]',
              )}
              {...getRootProps()}
            >
              {isPageDragging ? (
                <span className="flex justify-center items-center absolute top-0 left-0 bottom-0 right-0 rounded-[12px] border border-dashed border-[#9B56F0FF] bg-[rgba(1,1,1,0.7)]">
                  {t('Drop image here')}
                </span>
              ) : (
                ''
              )}

              <Input {...getInputProps()} />

              {url ? (
                <img
                  className="w-full h-full object-cover rounded-[12px]"
                  src={url}
                  alt="preview"
                />
              ) : preview ? (
                <img
                  className="w-full h-full object-cover rounded-[12px]"
                  src={preview}
                  alt="preview"
                />
              ) : isPageDragging ? (
                ''
              ) : (
                <span className="flex justify-center items-center h-full px-2.5">
                  {t('Upload cover')}
                </span>
              )}

              {errors.image?.message ? (
                <p className="text-[#EF4444FF] text-[12px] pt-1">
                  {t(String(errors.image?.message))}
                </p>
              ) : (
                ''
              )}
            </div>
          )
        }}
      />

      <FormGroup label={t('Link to the image')} error={errors.urlImage?.message}>
        <Input
          placeholder="https://example.com/image.jpg"
          {...register('urlImage')}
          error={errors.urlImage?.message}
          onChange={e => setUrl(e.target.value)}
        />
      </FormGroup>
    </div>
  )
}
