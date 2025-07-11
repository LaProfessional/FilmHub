import { useTranslation } from 'react-i18next'

import { LayoutToggleButtons } from '@/pages/home/ui/LayoutToggleButtons'
import { MovieCard } from '@/pages/home/ui/MovieCard'
import { ManualAddMediaModal } from '@/widgets/modals/ui/ManualAddMediaModal'

export const ControlsPanel = () => {
  const { t } = useTranslation()

  return (
    <>
      <section className="flex justify-between items-center flex-wr ap max-h-10 w-[100%] mb-4">
        <h2 className="text-2xl">{t('All movies')} (N)</h2>

        <div className="flex gap-2">
          <LayoutToggleButtons />
          <ManualAddMediaModal />
        </div>
      </section>

      <section className="grid grid-cols-4 gap-6">
        <MovieCard />
      </section>
    </>
  )
}
