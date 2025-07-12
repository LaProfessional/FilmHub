import { FormGroup } from '@/features/modals/ui/FormGroup'
import { Textarea } from '@/shared/ui'
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
          className="block w-full min-h-[60px] max-h-[130px] border-[#FFFFFF19] border-solid rounded-[5px] text-[#FAFAFAFF] font-semibold text-[14px] p-[5px]"
          placeholder={t(dataType.enterDescription)}
          {...register('descriptionMovie')}
          error={errors.descriptionMovie?.message}
        />
      </FormGroup>
    </>
  )
}
