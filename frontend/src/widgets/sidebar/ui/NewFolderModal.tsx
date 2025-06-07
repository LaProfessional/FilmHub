import styles from "./NewFolderModal.module.scss";
import { Modal, Input, Button } from "@/shared/ui/index";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface NewFolderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (name: string) => void;
}

const schema = z.object({
  name: z.string().min(2, "Минимум 2 символа"),
  isPublic: z.boolean(),
});

type FormData = z.infer<typeof schema>;

export const NewFolderModal = ({ isOpen, onClose, onCreate }: NewFolderModalProps) => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      isPublic: false,
    },
  });

  const onSubmit = (data: FormData) => {
    onCreate(data.name.trim());
    reset();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className={styles.title}>{t("createCollection")}</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.field}>
          <label>{t("name")}</label>
          <Input
            variant="inputAddFolder"
            placeholder={t("collectionName")}
            {...register("name")}
          />
          {errors.name && (
            <span className={styles.error}>{errors.name.message}</span>
          )}
        </div>

        <div className={styles.toggleRow}>
          <label>{t("publicCollection")}</label>
          <Input
            type="checkbox"
            variant="toggle"
            {...register("isPublic")}
          />
        </div>

        <div className={styles.actions}>
          <Button variant="cancelBtn" onClick={onClose}>
            {t("cancel")}
          </Button>
          <Button variant="primaryBtn">
            {t("create")}
          </Button>
        </div>
      </form>
    </Modal>
  );
};
