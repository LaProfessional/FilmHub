import React, { type Dispatch, type SetStateAction, useRef } from 'react'
import cls from '@fvilers/cls'
import styles from './SelectDropdown.module.scss'

import { Button } from '@/shared/ui/Button.tsx'

import { useHandleClickOutside } from '@/shared/lib/useHandleClickOutside.ts'
import { useTranslation } from 'react-i18next'
import type { MediaType } from '@/features/modals/lib/types.ts'

interface Option {
  label: string
}

interface DropdownSelectorProps {
  options: Option[]
  isOpen: boolean
  onToggle: () => void
  isMulti: boolean
  error: string | undefined
  value: string | string[]
  onChange: (value: string | string[]) => void
  setTypeKey?: Dispatch<SetStateAction<MediaType>>
}

export const SelectDropdown: React.FC<DropdownSelectorProps> = ({
  options,
  isOpen,
  onToggle,
  isMulti,
  error,
  value,
  onChange,
  setTypeKey,
}) => {
  const { t } = useTranslation()

  const dropdownRef = useRef<HTMLDivElement>(null)

  useHandleClickOutside(dropdownRef, isOpen, onToggle)

  const selectedItems = Array.isArray(value) ? value : value ? [value] : []
  const typeKeys = new Set(['Movie', 'Serial', 'Cartoon', 'Animated series'])

  const handleSelectItem = (item: string) => {
    if (typeKeys.has(item)) setTypeKey!(item as MediaType)

    if (isMulti) {
      if (selectedItems.includes(item)) {
        onChange(selectedItems.filter(i => i !== item))
      } else {
        onChange([...selectedItems, item])
      }
    } else {
      onChange(item)
      onToggle()
    }
  }

  return (
    <div ref={dropdownRef}>
      <Button
        variant="btnDropdownToggle"
        error={error}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault()
          onToggle()
        }}
      >
        <div className={styles.btnText}>
          {selectedItems.length === 0
            ? t('--Select--')
            : selectedItems.map(item => t(item)).join(', ')}
        </div>
      </Button>

      <div className={cls(styles.dropdownMenu, isOpen && styles.open)}>
        {options.map((item, index) => (
          <div
            className={cls(
              styles.dropdownItem,
              selectedItems.includes(item.label) && styles.select,
            )}
            key={index}
            onClick={() => handleSelectItem(item.label)}
          >
            {t(item.label)}
          </div>
        ))}
      </div>
    </div>
  )
}
