import styles from './ManualAddMediaModal.module.scss'
import { type Dispatch, type SetStateAction, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { X } from 'lucide-react'

import { Input } from '@/shared/ui/Input.tsx'
import { Button } from '@/shared/ui/Button.tsx'
import { Textarea } from '@/shared/ui/Textarea/Textarea.tsx'
import { SelectDropdown } from '@/features/modals/ui/select-dropdown/SelectDropdown.tsx'
import { FormGroup } from '@/features/modals/ui/form-group/FormGroup.tsx'
import { ImageUpload } from '@/features/modals/ui/image-upload/ImageUpload.tsx'

import { movieSelectOptions } from '@/features/modals/ui/model/movieSelectOptions.ts'
import { movieModalScheme } from '@/features/modals/ui/model/movieModalScheme.ts'

interface AddMovieModalProps {
  modalRef: React.RefObject<HTMLFormElement | null>
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const ManualAddMediaModal: React.FC<AddMovieModalProps> = ({ modalRef, isOpen, setIsOpen }) => {
  const { t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState<string>('')

  const { typeOptions, genreOptions, countryOptions, ageOptions } = movieSelectOptions()

  useEffect(() => {
    if (!isOpen) setIsMenuOpen('')
  }, [isOpen])

  const {
    register,
    handleSubmit,
    control,
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
            <FormGroup label='Type' error={errors.type?.message}>
              <Controller
                name="type"
                control={control}
                render={({ field }) => (
                  <SelectDropdown
                    {...field}
                    options={typeOptions}
                    isOpen={isMenuOpen === 'modalTypes'}
                    onToggle={() => setIsMenuOpen(isMenuOpen === 'modalTypes' ? '' : 'modalTypes')}
                    isMulti={false}
                    error={errors.type?.message}
                  />
                )}
              />
            </FormGroup>

            <FormGroup label='Movie title' error={errors.movieTitle?.message}>
              <Input
                variant="inputAddMovie"
                placeholder={t('Enter movie title')}
                {...register('movieTitle')}
                error={errors.movieTitle?.message}
              />
            </FormGroup>

            <FormGroup label='Genres' error={errors.genres?.message}>
              <Controller
                name="genres"
                control={control}
                render={({ field }) => (
                  <SelectDropdown
                    {...field}
                    options={genreOptions}
                    isOpen={isMenuOpen === 'modalGenres'}
                    onToggle={() =>
                      setIsMenuOpen(isMenuOpen === 'modalGenres' ? '' : 'modalGenres')
                    }
                    isMulti={true}
                    error={errors.genres?.message}
                  />
                )}
              />
            </FormGroup>

            <FormGroup label='Countries' error={errors.countries?.message}>
              <Controller
                name="countries"
                control={control}
                render={({ field }) => (
                  <SelectDropdown
                    {...field}
                    options={countryOptions}
                    isOpen={isMenuOpen === 'modalCountries'}
                    onToggle={() =>
                      setIsMenuOpen(isMenuOpen === 'modalCountries' ? '' : 'modalCountries')
                    }
                    isMulti={true}
                    error={errors.countries?.message}
                  />
                )}
              />
            </FormGroup>

            <div className={styles.formGroupRow}>
              <FormGroup label='Rating (0–10)' error={errors.rating?.message}>
                <Input
                  variant="inputAddMovie"
                  placeholder="8.5"
                  type="number"
                  {...register('rating')}
                  error={errors.rating?.message}
                />
              </FormGroup>

              <FormGroup label='Age' error={errors.age?.message}>
                <Controller
                  name="age"
                  control={control}
                  render={({ field }) => (
                    <SelectDropdown
                      {...field}
                      options={ageOptions}
                      isOpen={isMenuOpen === 'modalAges'}
                      onToggle={() => setIsMenuOpen(isMenuOpen === 'modalAges' ? '' : 'modalAges')}
                      isMulti={false}
                      error={errors.age?.message}
                    />
                  )}
                />
              </FormGroup>
            </div>

            <div className={styles.formGroupRow}>
              <FormGroup label='Release year' error={errors.yearOfRelease?.message}>
                <Input
                  variant="inputAddMovie"
                  placeholder="2025"
                  type="number"
                  {...register('yearOfRelease')}
                  error={errors.yearOfRelease?.message}
                />
              </FormGroup>

              <FormGroup label='Runtime (minutes)' error={errors.runtime?.message}>
                <Input
                  variant="inputAddMovie"
                  placeholder={t('In minutes')}
                  type="number"
                  {...register('runtime')}
                  error={errors.runtime?.message}
                />
              </FormGroup>
            </div>
          </div>
        </div>

        <div className={styles.wrapperTextarea}>
          <FormGroup label='Description movie' error={errors.descriptionMovie?.message}>
            <Textarea
              variant="descriptionMovie"
              placeholder={t('Enter movie description')}
              {...register('descriptionMovie')}
              error={errors.descriptionMovie?.message}
            />
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
