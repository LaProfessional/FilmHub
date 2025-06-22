import { useTranslation } from "react-i18next"

import { LogOut } from "lucide-react"

import { useLogout } from "../../api/use-logout"
import { Button } from "@/shared/ui"

export const LogoutBtn = () => {
  const { t } = useTranslation()

  return (
    <Button variant="logoutBtn" onClick={() => useLogout()}>
      <LogOut size={18} />
      {t("Logout")}
    </Button>
  )
}
