import styles from '@/features/modals/ui/media-metrics-fields/MediaMetricsFields.module.scss'
import { FormGroup } from '@/features/modals/ui/FormGroup'
import { Input } from '@/shared/ui/input'
import { useEffect } from 'react'
import {
  type Control,
  Controller,
  type FieldErrors,
  type UseFormRegister,
  type UseFormUnregister,
  type WatchInternal,
} from 'react-hook-form'
import { SelectDropdown } from '@/features/modals/ui/select-dropdown/SelectDropdown'
import type { MovieModalFormValues } from '@/features/modals/model/movieModalScheme.ts'
import type { MovieData } from '@/features/modals/lib/types.ts'
import { useTranslation } from 'react-i18next'
import { movieSelectOptions } from '@/features/modals/model/movieSelectOptions'

interface MediaMetricsFieldsProps {
  watch: WatchInternal<MovieModalFormValues>
  register: UseFormRegister<MovieModalFormValues>
  unregister: UseFormUnregister<MovieModalFormValues>
  control: Control<MovieModalFormValues>
  errors: FieldErrors<MovieModalFormValues>
  isMenuOpen: string
  setIsMenuOpen: (menu: string) => void
  dataType: MovieData
}

export const MediaMetricsFields: React.FC<MediaMetricsFieldsProps> = ({
  watch,
  register,
  unregister,
  control,
  errors,
  isMenuOpen,
  setIsMenuOpen,
  dataType,
}) => {
  const { t } = useTranslation()

  const { ageOptions } = movieSelectOptions()

  const seasons = new Set(['Serial', 'Animated series'])
  const selectedType = watch('type')

  useEffect(() => {
    if (seasons.has(selectedType)) {
      unregister('runtime')
    } else {
      unregister('numberOfSeasons')
    }
  }, [selectedType, unregister])

  return (
    <>
      <div className={styles.formGroupRow}>
        <FormGroup label="Rating (0–10)" error={errors.rating?.message}>
          <Input
            placeholder="8.5"
            step="0.1"
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
            placeholder={t(dataType.info)}
            type="number"
            {...(seasons.has(selectedType) ? register('numberOfSeasons') : register('runtime'))}
            error={
              seasons.has(selectedType) ? errors.numberOfSeasons?.message : errors.runtime?.message
            }
          />
        </FormGroup>
      </div>
    </>
  )
}
