import styles from './ManualAddMediaModal.module.scss'
import { type Dispatch, type SetStateAction, useEffect, useState } from 'react'
import { type Resolver, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { MediaModalFooter } from '@/features/modals/ui/media-modal-footer/MediaModalFooter'
import { MediaModalHeader } from '@/features/modals/ui/media-modal-header/MediaModalHeader'
import { MediaDetailsForm } from '@/features/modals/ui/media-form-fields/MediaDetailsForm'

import {
  getMovieModalSchema,
  type MovieModalFormValues,
} from '@/features/modals/model/movieModalScheme'
import { getMediaTypeData } from '@/features/modals/lib/mediaTypeMap'
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
  const [isMenuOpen, setIsMenuOpen] = useState<string>('')
  const [typeKey, setTypeKey] = useState<MediaType>('Movie')

  const dataType = getMediaTypeData(typeKey)

  useEffect(() => {
    if (!isOpen) setIsMenuOpen('')
  }, [isOpen])

  const movieModalSchema = getMovieModalSchema(typeKey)

  const {
    register,
    unregister,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<MovieModalFormValues>({
    resolver: zodResolver(movieModalSchema) as Resolver<MovieModalFormValues>,
  })

  const handleAddMovie = (data: MovieModalFormValues) => {
    console.log(data)
  }

  return (
    <form className={styles.modal} ref={modalRef} onSubmit={handleSubmit(handleAddMovie)}>
      <MediaModalHeader isOpen={isOpen} setIsOpen={setIsOpen} dataType={dataType} />

      <section className={styles.modalBody}>
        <MediaDetailsForm
          control={control}
          watch={watch}
          register={register}
          errors={errors}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          setTypeKey={setTypeKey}
          dataType={dataType}
          unregister={unregister}
        />
      </section>

      <MediaModalFooter isOpen={isOpen} setIsOpen={setIsOpen} dataType={dataType} />
    </form>
  )
}
