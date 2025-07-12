import { FormGroup } from '@/features/modals/ui/FormGroup'
import { type Control, Controller, type FieldErrors } from 'react-hook-form'
import { SelectDropdown } from '@/features/modals/ui/SelectDropdown'
import type { MovieModalFormValues } from '@/features/modals/model/movieModalScheme.ts'
import { movieSelectOptions } from '@/features/modals/model/movieSelectOptions'

interface MediaSelectionFieldsProps {
  control: Control<MovieModalFormValues>
  errors: FieldErrors<MovieModalFormValues>
}

export const MediaSelectionFields: React.FC<MediaSelectionFieldsProps> = ({ control, errors }) => {
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
              isMulti={true}
              error={errors.countries?.message}
            />
          )}
        />
      </FormGroup>
    </>
  )
}
