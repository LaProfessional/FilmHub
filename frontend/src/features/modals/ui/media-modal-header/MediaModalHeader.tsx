import { useTranslation } from 'react-i18next'

import { Button } from '@/shared/ui/button'
import { DialogTrigger } from '@/shared/ui'

import { X } from 'lucide-react'

import type { MovieData } from '@/features/modals/lib/types.ts'

interface MediaModalHeaderProps {
  dataType: MovieData
}

export const MediaModalHeader: React.FC<MediaModalHeaderProps> = ({ dataType }) => {
  const { t } = useTranslation()

  return (
    <header className="flex justify-between items-center px-5 py-2.5">
      <h2 className="text-[18px]">{t(dataType.add)}</h2>

      <DialogTrigger asChild>
        <Button type="button">
          <X className="align-middle" />
        </Button>
      </DialogTrigger>
    </header>
  )
}
