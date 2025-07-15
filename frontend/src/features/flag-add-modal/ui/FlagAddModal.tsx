import {
  Button,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/shared/ui";
import { useTranslation } from "react-i18next";
import { FlagNameField } from "@/features/flag-add-modal/ui/FlagNameField";
import { FlagColorSection } from "@/features/flag-add-modal/ui/FlagColorSection";

const FlagAddModal = () => {
  const { t } = useTranslation();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">{t("Add flag")}</Button>
      </DialogTrigger>

      <DialogContent className="w-full !max-w-[520px] min-w-[200px]" aria-describedby="">
        <DialogTitle>{t("flagModal.header.title")}</DialogTitle>

        <FlagNameField />

        <FlagColorSection />
      </DialogContent>
    </Dialog>
  );
};

export default FlagAddModal;
