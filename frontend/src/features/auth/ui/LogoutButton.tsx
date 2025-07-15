import { useTranslation } from "react-i18next";
import { LogOut } from "lucide-react";
import { Button } from "@/shared/ui";
import { useLogoutMutation } from "../api/authApiSlice";

export function LogoutButton() {
  const [logout, { isLoading }] = useLogoutMutation();
  const { t } = useTranslation();

  return (
    <Button onClick={logout} disabled={isLoading}>
      <LogOut size={18} />
      {t("Logout")}
    </Button>
  );
}
