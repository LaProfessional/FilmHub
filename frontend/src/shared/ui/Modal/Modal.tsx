import ReactDOM from 'react-dom'
import styles from './Modal.module.scss'
import { clsx } from 'clsx'

interface ModalProps {
  children: React.ReactNode
  isOpen: boolean
}

export const Modal: React.FC<ModalProps> = ({ children, isOpen }) => {
  const portalRoot = document.getElementById('portal')

  if (!portalRoot) return null

  return ReactDOM.createPortal(
    <div className={clsx(styles.overlay, isOpen && styles.open)}>{children}</div>,
    portalRoot,
  )
}
