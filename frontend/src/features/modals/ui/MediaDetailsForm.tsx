import { type Dispatch, type SetStateAction } from 'react'
import {
  type Control,
  type FieldErrors,
  type UseFormRegister,
  type UseFormUnregister,
  type WatchInternal,
} from 'react-hook-form'

import { type MovieModalFormValues } from '@/features/modals/model/movieModalScheme'
import type { MediaType, MovieData } from '@/features/modals/lib/types.ts'
import { MediaImageUpload } from '@/features/modals/ui/MediaImageUpload'
import { MediaBasicInfoFields } from '@/features/modals/ui/MediaBasicInfoFields'
import { MediaSelectionFields } from '@/features/modals/ui/MediaSelectionFields'
import { MediaMetricsFields } from '@/features/modals/ui/MediaMetricsFields'
import { MediaDescriptionField } from '@/features/modals/ui/MediaDescriptionField'

interface MediaFormFieldsProps {
  control: Control<MovieModalFormValues>
  watch: WatchInternal<MovieModalFormValues>
  register: UseFormRegister<MovieModalFormValues>
  unregister: UseFormUnregister<MovieModalFormValues>
  errors: FieldErrors<MovieModalFormValues>
  setTypeKey?: Dispatch<SetStateAction<MediaType>>
  dataType: MovieData
}

export const MediaDetailsForm: React.FC<MediaFormFieldsProps> = ({
  control,
  watch,
  register,
  unregister,
  errors,
  setTypeKey,
  dataType,
}) => {
  return (
    <>
      <div className="flex justify-between mb-5">
        <MediaImageUpload register={register} errors={errors} control={control} />

        <div className="flex flex-col gap-[15px] max-w-[323px] min-w-[100px] w-full">
          <MediaBasicInfoFields
            control={control}
            register={register}
            setTypeKey={setTypeKey}
            dataType={dataType}
            errors={errors}
          />

          <MediaSelectionFields control={control} errors={errors} />

          <MediaMetricsFields
            watch={watch}
            control={control}
            register={register}
            unregister={unregister}
            dataType={dataType}
            errors={errors}
          />
        </div>
      </div>

      <MediaDescriptionField register={register} dataType={dataType} errors={errors} />
    </>
  )
}
