import styles from "./NewFolderModal.module.scss";
import { Modal, Input, Button } from "@/shared/ui/Index";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface NewFolderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (name: string) => void;
}

export const NewFolderModal = ({ isOpen, onClose, onCreate }: NewFolderModalProps) => {
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [isPublic, setIsPublic] = useState(false);

  const handleCreate = () => {
    if (!name.trim()) return;

    onCreate(name.trim());
    setName("");
    setIsPublic(false);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className={styles.title}>{t("createCollection")}</h2>

      <div className={styles.field}>
        <label>{t("name")}</label>
        <Input
          variant="inputAddFolder"
          placeholder={t("collectionName")}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className={styles.toggleRow}>
        <label>{t("publicCollection")}</label>
        <Input
          type="checkbox"
          variant="toggle"
          checked={isPublic}
          onChange={() => setIsPublic(!isPublic)}
        />
      </div>


      <div className={styles.actions}>
        <Button variant="cancelBtn" onClick={onClose}>
          {t("cancel")}
        </Button>
        <Button variant="primaryBtn" onClick={handleCreate}>
          {t("create")}
        </Button>
      </div>
    </Modal>
  );
};