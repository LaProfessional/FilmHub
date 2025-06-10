import ReactDOM from "react-dom";
import styles from "./Modal.module.scss";
import { X } from "lucide-react";
import { Button } from "@/shared/ui/Button/Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  const portalRoot = document.getElementById("portal");
  if (!portalRoot) return null;

  return ReactDOM.createPortal(
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <Button variant="btnClose" onClick={onClose}>
          <X size={20} />
        </Button>
        {children}
      </div>
    </div>,
    portalRoot
  );
};