import { Button, Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/shared/ui";
import { useTranslation } from "react-i18next";

const FlagAddModal = () => {
  const { t } = useTranslation();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">{t("Add flag")}</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogTitle>sdaf</DialogTitle>
      </DialogContent>
    </Dialog>
  );
};

export default FlagAddModal;
