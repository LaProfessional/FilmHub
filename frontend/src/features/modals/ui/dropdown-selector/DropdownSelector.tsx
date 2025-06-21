import React from 'react'
import { useRef } from 'react'
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
}

export const DropdownSelector: React.FC<DropdownSelectorProps> = ({
  options,
  isOpen,
  onToggle,
}) => {
  const { t } = useTranslation()

  const dropdownRef = useRef<HTMLDivElement>(null)

  useHandleClickOutside(dropdownRef, isOpen, onToggle)

  return (
    <div ref={dropdownRef}>
      <Button
        variant="btnDropdownToggle"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault()
          onToggle()
        }}
      >
        {t('--Select--')}
      </Button>

      <div className={cls(styles.dropdownMenu, isOpen && styles.open)}>
        {options.map((item, index) => (
          <div className={styles.dropdownItem} key={index}>
            {t(item.label)}
          </div>
        ))}
      </div>
    </div>
  )
}
