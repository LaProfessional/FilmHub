import React, { type Dispatch, type SetStateAction } from 'react'
import { useTranslation } from 'react-i18next'
import type { MediaType } from '@/features/modals/lib/types.ts'
import { clsx } from 'clsx'
import { Button, Popover, PopoverContent, PopoverTrigger } from '@/shared/ui'

interface Option {
  label: string
}

interface DropdownSelectorProps {
  options: Option[]
  isMulti: boolean
  error: string | undefined
  value: string | string[]
  onChange: (value: string | string[]) => void
  setTypeKey?: Dispatch<SetStateAction<MediaType>> | undefined
}

export const SelectDropdown: React.FC<DropdownSelectorProps> = ({
  options,
  isMulti,
  error,
  value,
  onChange,
  setTypeKey,
}) => {
  const { t } = useTranslation()

  const selectedItems = Array.isArray(value) ? value : value ? [value] : []

  const handleSelectItem = (item: string) => {
    setTypeKey?.(item as MediaType)

    if (isMulti) {
      if (selectedItems.includes(item)) {
        onChange(selectedItems.filter(i => i !== item))
      } else {
        onChange([...selectedItems, item])
      }
    } else {
      onChange(item)
    }
  }

  const displayText = () => {
    return selectedItems.length === 0
      ? t('--Select--')
      : selectedItems.map(item => t(item)).join(', ')
  }

  return (
    <Popover modal={true}>
      <PopoverTrigger asChild>
        <Button error={error} className="w-full flex justify-start">
          <div className="overflow-hidden whitespace-nowrap overflow-ellipsis text-[#FAFAFAFF] font-semibold text-[14px]">
            {displayText()}
          </div>
        </Button>
      </PopoverTrigger>

      <PopoverContent
        style={{ width: 'var(--radix-popover-trigger-width)' }}
        className="bg-[#09090BFF] p-0 h-full"
      >
        <ul className="overflow-auto max-h-[240px]">
          {options.map((item, index) => (
            <li
              className={clsx(
                'text-[#FAFAFAFF] text-[14px] font-medium p-2 cursor-pointer list-none hover:bg-[#21C45DFF]',
                selectedItems.includes(item.label) && 'bg-[#27272AFF]',
              )}
              key={index}
              onClick={() => handleSelectItem(item.label)}
            >
              {t(item.label)}
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  )
}
