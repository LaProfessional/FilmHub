import { Plus } from 'lucide-react'
import { Input, Button } from '@/shared/ui'
import { useTranslation } from 'react-i18next'

export function AddCategory() {
  const { t } = useTranslation()

  return (
    <div className="flex justify-between items-center gap-3">
      <Input type={'text'} placeholder={t('Create category')} />
      <Button>
        <Plus size={22} className="" />
      </Button>
    </div>
  )
}
