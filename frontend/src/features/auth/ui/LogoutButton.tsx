import { useTranslation } from "react-i18next";
import { LogOut } from "lucide-react";
import { Button } from "@/shared/ui";
import { useAuth } from "../model/AuthContext";

export function LogoutButton() {
  const { logout } = useAuth();
  const { t } = useTranslation();

  return (
    <Button onClick={logout}>
      <LogOut size={18} />
      {t("Logout")}
    </Button>
  );
}
