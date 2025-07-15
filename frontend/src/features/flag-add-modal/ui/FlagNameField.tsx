import { Input } from "@/shared/ui";
import { useTranslation } from "react-i18next";

export const FlagNameField = () => {
  const { t } = useTranslation();
  return (
    <label className="flex flex-col gap-2">
      Название
      <Input placeholder={t("flagModal.body.name")} />
    </label>
  );
};
