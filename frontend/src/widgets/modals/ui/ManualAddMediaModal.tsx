import { useState } from 'react'
import { type Resolver, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Plus, X } from 'lucide-react'
import { Button } from '@/shared/ui'
import { MediaModalFooter } from '@/features/modals/ui/MediaModalFooter'
import { MediaDetailsForm } from '@/features/modals/ui/MediaDetailsForm'

import {
  getMovieModalSchema,
  type MovieModalFormValues,
} from '@/features/modals/model/movieModalScheme'
import { getMediaTypeData } from '@/features/modals/lib/mediaTypeMap'
import type { MediaType } from '@/features/modals/lib/types.ts'
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from '@/shared/ui/dialog'
import { useTranslation } from 'react-i18next'

export const ManualAddMediaModal = () => {
  const { t } = useTranslation()

  const [isMenuOpen, setIsMenuOpen] = useState<string>('')
  const [typeKey, setTypeKey] = useState<MediaType>('Movie')

  const dataType = getMediaTypeData(typeKey)

  const movieModalSchema = getMovieModalSchema(typeKey)

  const {
    register,
    unregister,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<MovieModalFormValues>({
    resolver: zodResolver(movieModalSchema) as Resolver<MovieModalFormValues>,
  })

  const handleAddMovie = (data: MovieModalFormValues) => {
    console.log(data)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Plus />
          {t('Add movie')}
        </Button>
      </DialogTrigger>

      <DialogContent
        className="bg-[#09090BFF] max-w-[620px] [&>button]:hidden"
        aria-describedby={undefined}
      >
        <DialogTitle className="flex justify-between items-center px-5 py-2.5 text-[18px] ">
          {t(dataType.add)}

          <DialogTrigger asChild>
            <Button type="button">
              <X className="align-middle" />
            </Button>
          </DialogTrigger>
        </DialogTitle>

        <form
          className="flex flex-col max-h-[90vh] overflow-hidden min-w-[200px] w-full"
          onSubmit={handleSubmit(handleAddMovie)}
        >
          <section className="w-full overflow-auto px-5 py-2.5">
            <MediaDetailsForm
              control={control}
              watch={watch}
              register={register}
              errors={errors}
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
              setTypeKey={setTypeKey}
              dataType={dataType}
              unregister={unregister}
            />
          </section>

          <MediaModalFooter dataType={dataType} />
        </form>
      </DialogContent>
    </Dialog>
  )
}
