import styles from '@/features/modals/ui/media-form-fields/MediaFormFields.module.scss'
import type { Dispatch, SetStateAction } from 'react'
import {
  Controller,
  type Control,
  type FieldErrors,
  type UseFormRegister,
  type WatchInternal,
} from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { FormGroup } from '@/features/modals/ui/form-group/FormGroup.tsx'
import { SelectDropdown } from '@/features/modals/ui/select-dropdown/SelectDropdown.tsx'
import { Input } from '@/shared/ui/Input.tsx'

import { movieSelectOptions } from '@/features/modals/model/movieSelectOptions.ts'
import { type MovieModalFormValues } from '@/features/modals/model/movieModalScheme.ts'
import type { MediaType, MovieData } from '@/features/modals/lib/types.ts'

interface MediaFormFieldsProps {
  control: Control<MovieModalFormValues>
  watch: WatchInternal<MovieModalFormValues>
  register: UseFormRegister<MovieModalFormValues>
  errors: FieldErrors<MovieModalFormValues>
  isMenuOpen: string
  setIsMenuOpen: (menu: string) => void
  setTypeKey?: Dispatch<SetStateAction<MediaType>>
  dataType: MovieData
}

export const MediaFormFields: React.FC<MediaFormFieldsProps> = ({
  control,
  watch,
  register,
  errors,
  isMenuOpen,
  setIsMenuOpen,
  setTypeKey,
  dataType,
}) => {
  const { t } = useTranslation()

  const { typeOptions, genreOptions, countryOptions, ageOptions } = movieSelectOptions()

  const seasons = new Set(['Serial', 'Animated series'])

  const selectedType = watch('type')

  return (
    <div className={styles.formGroupWrapper}>
      <FormGroup label="Type" error={errors.type?.message}>
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
              setTypeKey={setTypeKey}
            />
          )}
        />
      </FormGroup>

      <FormGroup label={dataType.title} error={errors.movieTitle?.message}>
        <Input
          variant="inputAddMovie"
          placeholder={t(dataType.enterTitle)}
          {...register('movieTitle')}
          error={errors.movieTitle?.message}
        />
      </FormGroup>

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

      <div className={styles.formGroupRow}>
        <FormGroup label="Rating (0–10)" error={errors.rating?.message}>
          <Input
            variant="inputAddMovie"
            placeholder="8.5"
            type="number"
            {...register('rating')}
            error={errors.rating?.message}
          />
        </FormGroup>

        <FormGroup label="Age" error={errors.age?.message}>
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
        <FormGroup label="Release year" error={errors.yearOfRelease?.message}>
          <Input
            variant="inputAddMovie"
            placeholder="2025"
            type="number"
            {...register('yearOfRelease')}
            error={errors.yearOfRelease?.message}
          />
        </FormGroup>

        <FormGroup
          label={dataType.durationInfo}
          error={
            seasons.has(selectedType) ? errors.numberOfSeasons?.message : errors.runtime?.message
          }
        >
          <Input
            variant="inputAddMovie"
            placeholder={t(dataType.info)}
            type="number"
            {...(seasons.has(selectedType) ? register('numberOfSeasons') : register('runtime'))}
            error={
              seasons.has(selectedType) ? errors.numberOfSeasons?.message : errors.runtime?.message
            }
          />
        </FormGroup>
      </div>
    </div>
  )
}
