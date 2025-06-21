import styles from './AddMovieModal.module.scss'
import { type Dispatch, type SetStateAction, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'

import { X } from 'lucide-react'

import { Input } from '@/shared/ui/Input.tsx'
import { Button } from '@/shared/ui/Button.tsx'
import { Textarea } from '@/shared/ui/Textarea/Textarea.tsx'
import { DropdownSelector } from '@/features/modals/ui/dropdown-selector/DropdownSelector.tsx'
import { FormGroup } from '@/features/modals/ui/form-group/FormGroup.tsx'
import { ImageUpload } from '@/features/modals/ui/image-upload/ImageUpload.tsx'

import { movieSelectOptions } from '@/features/modals/ui/model/movieSelectOptions.ts'
import { movieModalScheme } from '@/features/modals/ui/model/movieModalScheme.ts'
import { zodResolver } from '@hookform/resolvers/zod'

interface AddMovieModalProps {
  modalRef: React.RefObject<HTMLFormElement | null>
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const AddMovieModal: React.FC<AddMovieModalProps> = ({ modalRef, isOpen, setIsOpen }) => {
  const { t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState<string>('')

  const { genreOptions, countryOptions } = movieSelectOptions()

  useEffect(() => {
    if (!isOpen) setIsMenuOpen('')
  }, [isOpen])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(movieModalScheme),
  })

  const handleAddMovie = (data: any) => {
    console.log(data)
  }

  return (
    <form className={styles.modal} ref={modalRef} onSubmit={handleSubmit(handleAddMovie)}>
      <header className={styles.modalHeader}>
        <h2 className={styles.modalTitle}>{t('Add new movie')}</h2>
        <Button onClick={() => setIsOpen(!isOpen)}>
          <X className={styles.iconX} />
        </Button>
      </header>

      <section className={styles.modalBody}>
        <div className={styles.formMain}>
          <ImageUpload />

          <div className={styles.formGroupWrapper}>
            <FormGroup label={t('Movie title')} error={errors.movieTitle?.message}>
              <Input
                variant="inputAddMovie"
                placeholder={t('Enter movie title')}
                {...register('movieTitle')}
                error={errors.movieTitle?.message}
              />
            </FormGroup>

            <FormGroup label={t('Genres')}>
              <DropdownSelector
                options={genreOptions}
                isOpen={isMenuOpen === 'modalGenres'}
                onToggle={() => setIsMenuOpen(isMenuOpen === 'modalGenres' ? '' : 'modalGenres')}
              />
            </FormGroup>

            <FormGroup label={t('Countries')}>
              <DropdownSelector
                options={countryOptions}
                isOpen={isMenuOpen === 'modalCountries'}
                onToggle={() =>
                  setIsMenuOpen(isMenuOpen === 'modalCountries' ? '' : 'modalCountries')
                }
              />
            </FormGroup>

            <FormGroup label={t('Release year')} error={errors.yearOfRelease?.message}>
              <Input
                variant="inputAddMovie"
                placeholder="2025"
                type="number"
                {...register('yearOfRelease')}
                error={errors.yearOfRelease?.message}
              />
            </FormGroup>

            <FormGroup label={t('Runtime (minutes)')} error={errors.runtime?.message}>
              <Input
                variant="inputAddMovie"
                placeholder="e.g. 120"
                type="number"
                {...register('runtime')}
                error={errors.runtime?.message}
              />
            </FormGroup>

            <FormGroup label={t('Rating (0–10)')} error={errors.rating?.message}>
              <Input
                variant="inputAddMovie"
                placeholder="e.g. 8.5"
                type="number"
                {...register('rating')}
                error={errors.rating?.message}
              />
            </FormGroup>
          </div>
        </div>

        <div className={styles.wrapperTextarea}>
          <FormGroup label={t('Description movie')}>
            <Textarea variant="descriptionMovie" placeholder={t('Enter movie description')} />
          </FormGroup>
        </div>
      </section>

      <footer className={styles.modalFooter}>
        <Button variant="btnCancel" onClick={() => setIsOpen(!isOpen)}>
          {t('Cancel')}
        </Button>
        <Button variant="btnAddMovie" type="submit">
          {t('Add new movie')}
        </Button>
      </footer>
    </form>
  )
}
