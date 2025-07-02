import styles from '@/features/modals/ui/media-form-fields/MediaDetailsForm.module.scss'
import { type Dispatch, type SetStateAction } from 'react'
import {
  type Control,
  type FieldErrors,
  type UseFormRegister,
  type UseFormUnregister,
  type WatchInternal,
} from 'react-hook-form'

import { type MovieModalFormValues } from '@/features/modals/model/movieModalScheme.ts'
import type { MediaType, MovieData } from '@/features/modals/lib/types.ts'
import { MediaImageUpload } from '@/features/modals/ui/media-image-upload/MediaImageUpload.tsx'
import { MediaBasicInfoFields } from '@/features/modals/ui/media-basic-info-fields/MediaBasicInfoFields.tsx'
import { MediaSelectionFields } from '@/features/modals/ui/media-selection-fields/MediaSelectionFields.tsx'
import { MediaMetricsFields } from '@/features/modals/ui/media-metrics-fields/MediaMetricsFields.tsx'
import { MediaDescriptionField } from '@/features/modals/ui/media-description-field/MediaDescriptionField.tsx'

interface MediaFormFieldsProps {
  control: Control<MovieModalFormValues>
  watch: WatchInternal<MovieModalFormValues>
  register: UseFormRegister<MovieModalFormValues>
  unregister: UseFormUnregister<MovieModalFormValues>
  errors: FieldErrors<MovieModalFormValues>
  isMenuOpen: string
  setIsMenuOpen: (menu: string) => void
  setTypeKey?: Dispatch<SetStateAction<MediaType>>
  dataType: MovieData
}

export const MediaDetailsForm: React.FC<MediaFormFieldsProps> = ({
  control,
  watch,
  register,
  unregister,
  errors,
  isMenuOpen,
  setIsMenuOpen,
  setTypeKey,
  dataType,
}) => {
  return (
    <>
      <div className={styles.formMain}>
        <MediaImageUpload register={register} errors={errors} control={control} />

        <div className={styles.formGroupWrapper}>
          <MediaBasicInfoFields
            control={control}
            register={register}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            setTypeKey={setTypeKey}
            dataType={dataType}
            errors={errors}
          />

          <MediaSelectionFields
            control={control}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            errors={errors}
          />

          <MediaMetricsFields
            watch={watch}
            control={control}
            register={register}
            unregister={unregister}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            dataType={dataType}
            errors={errors}
          />
        </div>
      </div>

      <MediaDescriptionField register={register} dataType={dataType} errors={errors} />
    </>
  )
}
