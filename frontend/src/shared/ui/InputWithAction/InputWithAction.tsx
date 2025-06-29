import { Input } from "@/shared/ui/Input/Input"
import { Button } from "@/shared/ui/Button/Button"
import styles from "./InputWithAction.module.scss"
import { forwardRef } from "react"

interface InputWithActionProps {
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

export const InputWithAction = forwardRef<HTMLDivElement, InputWithActionProps>(({
  value,
  onChange,
  onClick,
  placeholder,
  inputRef,
  buttonTitle,
  icon,
  inputVariant = "inputWithAction",
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