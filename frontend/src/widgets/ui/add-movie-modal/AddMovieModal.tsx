import styles from './AddMovieModal.module.scss'
import { useState } from 'react'

import { X } from 'lucide-react'

import { Input } from '@/shared/ui/Input.tsx'
import { Button } from '@/shared/ui/Button.tsx'
import { DropdownSelector } from '@/widgets/ui/dropdown-selector/DropdownSelector.tsx'
import { FormGroup } from '@/widgets/ui/form-group/FormGroup.tsx'

interface AddMovieModalProps {
  modalRef: React.RefObject<HTMLDivElement | null>
}

export const AddMovieModal: React.FC<AddMovieModalProps> = ({ modalRef }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<string>('')

  const genreOptions = [
    { value: 'horror', label: 'Ужасы' },
    { value: 'action', label: 'Боевик' },
    { value: 'comedy', label: 'Комедия' },
    { value: 'drama', label: 'Драма' },
    { value: 'thriller', label: 'Триллер' },
    { value: 'melodrama', label: 'Мелодрама' },
    { value: 'sci-fi', label: 'Фантастика' },
    { value: 'fantasy', label: 'Фэнтези' },
    { value: 'animation', label: 'Анимация' },
    { value: 'family', label: 'Семейный' },
    { value: 'war', label: 'Военный' },
    { value: 'biography', label: 'Биография' },
    { value: 'detective', label: 'Детектив' },
    { value: 'documentary', label: 'Документальный' },
    { value: 'adventure', label: 'Приключения' },
    { value: 'historical', label: 'Исторический' },
  ]

  const countryOptions = [
    { value: 'usa', label: 'США' },
    { value: 'russia', label: 'Россия' },
    { value: 'uk', label: 'Великобритания' },
    { value: 'france', label: 'Франция' },
    { value: 'germany', label: 'Германия' },
    { value: 'japan', label: 'Япония' },
    { value: 'south-korea', label: 'Южная Корея' },
    { value: 'china', label: 'Китай' },
    { value: 'india', label: 'Индия' },
    { value: 'canada', label: 'Канада' },
    { value: 'other', label: 'Другая' },
  ]

  return (
    <div className={styles.modal} ref={modalRef}>
      <header className={styles.modalHeader}>
        <h2 className={styles.modalTitle}>Add new movie</h2>
        <X className={styles.iconX} />
      </header>

      <section className={styles.modalBody}>
        <FormGroup label="Movie title">
          <Input variant="inputAddMovie" placeholder="Enter movie title" />
        </FormGroup>

        <FormGroup label="Release Year">
          <Input variant="inputAddMovie" placeholder="2025" type="number" min={1895} max={2030} />
        </FormGroup>

        <FormGroup label="Runtime (minutes)">
          <Input variant="inputAddMovie" placeholder="e.g. 120" type="number" min={0} />
        </FormGroup>

        <DropdownSelector
          label="Genres"
          options={genreOptions}
          isOpen={isMenuOpen === 'modalGenres'}
          onToggle={() => setIsMenuOpen(isMenuOpen === 'modalGenres' ? '' : 'modalGenres')}
        />

        <DropdownSelector
          label="Country"
          options={countryOptions}
          isOpen={isMenuOpen === 'modalCountries'}
          onToggle={() => setIsMenuOpen(isMenuOpen === 'modalCountries' ? '' : 'modalCountries')}
        />

        <FormGroup label="Description">
          <textarea className={styles.textarea} placeholder="Enter movie description" />
        </FormGroup>

        <FormGroup label="Rating (0–10)">
          <Input
            variant="inputAddMovie"
            placeholder="e.g. 8.5"
            type="number"
            min={0}
            max={10}
            step={0.1}
          />
        </FormGroup>

        <FormGroup label="Director">
          <Input variant="inputAddMovie" placeholder="Enter director's name" />
        </FormGroup>
      </section>

      <footer className={styles.modalFooter}>
        <Button variant={'btnAddMovie'}>Добавить фильм</Button>
      </footer>
    </div>
  )
}
