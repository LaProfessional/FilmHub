import { Button } from "@/shared/ui/Button";
import { LogOut } from "lucide-react";
import { useTranslation } from "react-i18next";

export const LogoutButton = () => {
  const { t } = useTranslation();

  return (
    <Button variant="logoutBtn">
      <LogOut size={18} />
      {t("Logout")}
    </Button>
  );
};
