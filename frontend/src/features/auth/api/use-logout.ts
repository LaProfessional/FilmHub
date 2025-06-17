import { RoutePath } from "@/shared/config/router/routePaths"
import { removeAccessToken } from "@/shared/lib/token-storage"
import { useNavigate } from "react-router-dom"

export const useLogout = () => {
  const navigate = useNavigate()
  removeAccessToken()
  navigate(RoutePath.AUTH)
}
