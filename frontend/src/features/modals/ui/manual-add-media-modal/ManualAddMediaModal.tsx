import styles from './ManualAddMediaModal.module.scss'
import { type Dispatch, type SetStateAction, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { type Resolver, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Textarea } from '@/shared/ui/Textarea/Textarea.tsx'
import { FormGroup } from '@/features/modals/ui/form-group/FormGroup.tsx'
import { ImageUpload } from '@/features/modals/ui/image-upload/ImageUpload.tsx'
import { MediaModalFooter } from '@/features/modals/ui/media-modal-footer/MediaModalFooter.tsx'
import { MediaModalHeader } from '@/features/modals/ui/media-modal-header/MediaModalHeader.tsx'
import { MediaFormFields } from '@/features/modals/ui/media-form-fields/MediaFormFields.tsx'

import {
  type MovieModalFormValues,
  movieModalScheme,
} from '@/features/modals/model/movieModalScheme.ts'
import { getMediaTypeData } from '@/features/modals/lib/mediaTypeMap.ts'
import type { MediaType } from '@/features/modals/lib/types.ts'

interface AddMovieModalProps {
  modalRef: React.RefObject<HTMLFormElement | null>
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const ManualAddMediaModal: React.FC<AddMovieModalProps> = ({
  modalRef,
  isOpen,
  setIsOpen,
}) => {
  const { t } = useTranslation()

  const [isMenuOpen, setIsMenuOpen] = useState<string>('')
  const [typeKey, setTypeKey] = useState<MediaType>('Movie')

  const dataType = getMediaTypeData(typeKey)

  useEffect(() => {
    if (!isOpen) setIsMenuOpen('')
  }, [isOpen])

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<MovieModalFormValues>({
    resolver: zodResolver(movieModalScheme) as Resolver<MovieModalFormValues>,
  })

  const handleAddMovie = (data: MovieModalFormValues) => {
    console.log(data)
  }

  return (
    <form className={styles.modal} ref={modalRef} onSubmit={handleSubmit(handleAddMovie)}>
      <MediaModalHeader isOpen={isOpen} setIsOpen={setIsOpen} dataType={dataType} />

      <section className={styles.modalBody}>
        <div className={styles.formMain}>
          <ImageUpload />

          <MediaFormFields
            control={control}
            watch={watch}
            register={register}
            errors={errors}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            setTypeKey={setTypeKey}
            dataType={dataType}
          />
        </div>

        <div className={styles.wrapperTextarea}>
          <FormGroup label={dataType.description} error={errors.descriptionMovie?.message}>
            <Textarea
              variant="descriptionMovie"
              placeholder={t(dataType.enterDescription)}
              {...register('descriptionMovie')}
              error={errors.descriptionMovie?.message}
            />
          </FormGroup>
        </div>
      </section>

      <MediaModalFooter isOpen={isOpen} setIsOpen={setIsOpen} dataType={dataType} />
    </form>
  )
}
