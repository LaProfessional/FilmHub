import { FormGroup } from '@/features/modals/ui/form-group/FormGroup.tsx'
import { type Control, Controller, type FieldErrors } from 'react-hook-form'
import { SelectDropdown } from '@/features/modals/ui/select-dropdown/SelectDropdown.tsx'
import type { MovieModalFormValues } from '@/features/modals/model/movieModalScheme.ts'
import { movieSelectOptions } from '@/features/modals/model/movieSelectOptions.ts'

interface MediaSelectionFieldsProps {
  control: Control<MovieModalFormValues>
  errors: FieldErrors<MovieModalFormValues>
  isMenuOpen: string
  setIsMenuOpen: (menu: string) => void
}

export const MediaSelectionFields: React.FC<MediaSelectionFieldsProps> = ({
  control,
  errors,
  isMenuOpen,
  setIsMenuOpen,
}) => {
  const { genreOptions, countryOptions } = movieSelectOptions()
    
  return (
    <>
      <FormGroup label="Genres" error={errors.genres?.message}>
        <Controller
          name="genres"
          control={control}
          render={({ field }) => (
            <SelectDropdown
              {...field}
              options={genreOptions}
              isOpen={isMenuOpen === 'modalGenres'}
              onToggle={() => setIsMenuOpen(isMenuOpen === 'modalGenres' ? '' : 'modalGenres')}
              isMulti={true}
              error={errors.genres?.message}
            />
          )}
        />
      </FormGroup>

      <FormGroup label="Countries" error={errors.countries?.message}>
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
    </>
  )
}
