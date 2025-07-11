import { Input } from '@/shared/ui/input'
import { FormGroup } from '@/features/modals/ui/FormGroup'
import { type Control, Controller, type FieldErrors, type UseFormRegister } from 'react-hook-form'
import { SelectDropdown } from '@/features/modals/ui/select-dropdown/SelectDropdown'
import { useTranslation } from 'react-i18next'
import type { MovieModalFormValues } from '@/features/modals/model/movieModalScheme.ts'
import { movieSelectOptions } from '@/features/modals/model/movieSelectOptions'
import type { Dispatch, SetStateAction } from 'react'
import type { MediaType, MovieData } from '@/features/modals/lib/types.ts'

interface MediaBasicInfoFieldsProps {
  register: UseFormRegister<MovieModalFormValues>
  control: Control<MovieModalFormValues>
  errors: FieldErrors<MovieModalFormValues>
  isMenuOpen: string
  setIsMenuOpen: (menu: string) => void
  setTypeKey?: Dispatch<SetStateAction<MediaType>> | undefined
  dataType: MovieData
}

export const MediaBasicInfoFields: React.FC<MediaBasicInfoFieldsProps> = ({
  register,
  control,
  errors,
  isMenuOpen,
  setIsMenuOpen,
  setTypeKey,
  dataType,
}) => {
  const { t } = useTranslation()
  const { typeOptions } = movieSelectOptions()

  return (
    <>
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
          placeholder={t(dataType.enterTitle)}
          {...register('movieTitle')}
          error={errors.movieTitle?.message}
        />
      </FormGroup>
    </>
  )
}
