import { useTranslation } from 'react-i18next'

import { Button } from '@/shared/ui/button'
import { DialogTrigger } from '@/shared/ui'
import type { MovieData } from '@/features/modals/lib/types.ts'

interface MediaModalFooterProps {
  dataType: MovieData
}

export const MediaModalFooter: React.FC<MediaModalFooterProps> = ({ dataType }) => {
  const { t } = useTranslation()

  return (
    <footer className="flex justify-end items-center gap-[15px] py-2.5 px-5">
      <DialogTrigger asChild>
        <Button type="button">{t('Cancel')}</Button>
      </DialogTrigger>

      <Button type="submit">{t(dataType.add)}</Button>
    </footer>
  )
}
