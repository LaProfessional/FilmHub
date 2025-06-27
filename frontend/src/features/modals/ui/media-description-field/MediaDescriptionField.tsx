import { FormGroup } from '@/features/modals/ui/form-group/FormGroup.tsx'
import { Textarea } from '@/shared/ui/Textarea/Textarea.tsx'
import { useTranslation } from 'react-i18next'
import type { FieldErrors, UseFormRegister } from 'react-hook-form'
import type { MovieModalFormValues } from '@/features/modals/model/movieModalScheme.ts'
import type { MovieData } from '@/features/modals/lib/types.ts'

interface MediaBasicInfoFieldsProps {
  register: UseFormRegister<MovieModalFormValues>
  errors: FieldErrors<MovieModalFormValues>
  dataType: MovieData
}

export const MediaDescriptionField: React.FC<MediaBasicInfoFieldsProps> = ({
  register,
  errors,
  dataType,
}) => {
  const { t } = useTranslation()

  return (
    <>
      <FormGroup label={dataType.description} error={errors.descriptionMovie?.message}>
        <Textarea
          variant="descriptionMovie"
          placeholder={t(dataType.enterDescription)}
          {...register('descriptionMovie')}
          error={errors.descriptionMovie?.message}
        />
      </FormGroup>
    </>
  )
}
