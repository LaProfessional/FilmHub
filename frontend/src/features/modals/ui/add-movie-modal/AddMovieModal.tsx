import styles from './AddMovieModal.module.scss'
import { type Dispatch, type SetStateAction, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { X } from 'lucide-react'

import { Input } from '@/shared/ui/Input.tsx'
import { Button } from '@/shared/ui/Button.tsx'
import { DropdownSelector } from '@/features/modals/ui/dropdown-selector/DropdownSelector.tsx'
import { FormGroup } from '@/features/modals/ui/form-group/FormGroup.tsx'
import { ImageUpload } from '@/features/modals/ui/image-upload/ImageUpload.tsx'

import { movieSelectOptions } from '@/features/modals/ui/model/movieSelectOptions.ts'

interface AddMovieModalProps {
  modalRef: React.RefObject<HTMLDivElement | null>
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

  return (
    <div className={styles.modal} ref={modalRef}>
      <header className={styles.modalHeader}>
        <h2 className={styles.modalTitle}>{t('Add new movie')}</h2>
        <Button onClick={() => setIsOpen(!isOpen)}>
          <X className={styles.iconX} />
        </Button>
      </header>

      <section className={styles.modalBody}>
        <div className={styles.test1}>
          <ImageUpload />

          <div>
            <FormGroup label={t('Movie title')}>
              <Input variant="inputAddMovie" placeholder={t('Enter movie title')} />
            </FormGroup>

            <DropdownSelector
              label={t('Genres')}
              options={genreOptions}
              isOpen={isMenuOpen === 'modalGenres'}
              onToggle={() => setIsMenuOpen(isMenuOpen === 'modalGenres' ? '' : 'modalGenres')}
            />

            <DropdownSelector
              label={t('Countries')}
              options={countryOptions}
              isOpen={isMenuOpen === 'modalCountries'}
              onToggle={() =>
                setIsMenuOpen(isMenuOpen === 'modalCountries' ? '' : 'modalCountries')
              }
            />

            <FormGroup label={t('Release year')}>
              <Input
                variant="inputAddMovie"
                placeholder="2025"
                type="number"
                min={1895}
                max={2030}
              />
            </FormGroup>

            <FormGroup label={t('Runtime (minutes)')}>
              <Input variant="inputAddMovie" placeholder="e.g. 120" type="number" min={0} />
            </FormGroup>

            <FormGroup label={t('Rating (0–10)')}>
              <Input
                variant="inputAddMovie"
                placeholder="e.g. 8.5"
                type="number"
                min={0}
                max={10}
                step={0.1}
              />
            </FormGroup>
          </div>
        </div>

        <div className={styles.descriptionContainer}>
          <FormGroup label={t('Description movie')}>
            <textarea
              className={styles.descriptionMovie}
              placeholder={t('Enter movie description')}
            />
          </FormGroup>
        </div>
      </section>

      <footer className={styles.modalFooter}>
        <Button variant="btnCancel" onClick={() => setIsOpen(!isOpen)}>
          Отмена
        </Button>
        <Button variant="btnAddMovie">{t('Add new movie')}</Button>
      </footer>
    </div>
  )
}
