import React, { useState, useRef } from 'react'
import cls from '@fvilers/cls'
import styles from './DropdownSelector.module.scss'

import { Button } from '@/shared/ui/Button.tsx'

import { useHandleClickOutside } from '@/shared/lib/useHandleClickOutside.ts'
import { useTranslation } from 'react-i18next'

interface Option {
  label: string
}

interface DropdownSelectorProps {
  options: Option[]
  isOpen: boolean
  onToggle: () => void
  isMulti: boolean
}

export const DropdownSelector: React.FC<DropdownSelectorProps> = ({
  options,
  isOpen,
  onToggle,
  isMulti,
}) => {
  const { t } = useTranslation()

  const [items, setItems] = useState<string[]>([])
  const dropdownRef = useRef<HTMLDivElement>(null)

  useHandleClickOutside(dropdownRef, isOpen, onToggle)

  const handleSelectItem = (item: string) => {
    setItems(prev => {
      if (isMulti) {
        return prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
      } else {
        return [item]
      }
    })
  }

  return (
    <div ref={dropdownRef}>
      <Button
        variant="btnDropdownToggle"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault()
          onToggle()
        }}
      >
        <div className={styles.btnText}>
          {items.length === 0 ? t('--Select--') : items.map(item => t(item)).join(', ')}
        </div>
      </Button>

      <div className={cls(styles.dropdownMenu, isOpen && styles.open)}>
        {options.map((item, index) => (
          <div
            className={cls(styles.dropdownItem, items.includes(item.label) && styles.select)}
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
