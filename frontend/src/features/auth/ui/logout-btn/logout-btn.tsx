import { useTranslation } from "react-i18next"

import { LogOut } from "lucide-react"

import { Button } from "@/shared/ui"

export const LogoutBtn = () => {
  const { t } = useTranslation()

  return (
    <Button variant="logoutBtn">
      <LogOut size={18} />
      {t("Logout")}
    </Button>
  )
}
