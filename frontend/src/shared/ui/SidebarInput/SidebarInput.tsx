import { Input } from "@/shared/ui/Input/Input"
import { Button } from "@/shared/ui/Button/Button"
import styles from "./SidebarInput.module.scss"
import { forwardRef } from "react"

interface SidebarInputProps {
  value: string
  onChange: (value: string) => void
  onClick: () => void
  placeholder?: string
  inputRef?: React.RefObject<HTMLInputElement>
  buttonTitle?: string
  icon?: React.ReactNode
  inputVariant?: string
  buttonVariant?: string
  className?: string
}

export const SidebarInput = forwardRef<HTMLDivElement, SidebarInputProps>(({
  value,
  onChange,
  onClick,
  placeholder,
  inputRef,
  buttonTitle,
  icon,
  inputVariant = "SidebarInput",
  buttonVariant = "confirmInputBtn",
  className = "",
}, ref) => {
  return (
    <div ref={ref} className={`${styles.wrapperInput} ${className}`}>
      <Input
        variant={inputVariant}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault()
            onClick()
          }
        }}
        // @ts-expect-error
        ref={inputRef}
        spellCheck={false}
      />
      <Button
        variant={buttonVariant}
        onClick={onClick}
        title={buttonTitle}
      >
        {icon}
      </Button>
    </div>
  )
})