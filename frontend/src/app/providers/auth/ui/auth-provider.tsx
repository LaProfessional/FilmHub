import { useEffect, useState } from "react"
import { AuthContext } from "../model/auth-context"
import { getAccessToken, removeAccessToken, setAccessToken } from "@/shared/lib/token-storage"
import { useNavigate } from "react-router-dom"
import { RoutePath } from "@/app/providers/router"

interface AuthProviderProps {
  children: React.ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate()
  const [isAuth, setIsAuth] = useState<boolean>(false)

  useEffect(() => {
    const token = getAccessToken()
    if (token) {
      setIsAuth(true)
    }
  }, [])

  const login = (token: string): void => {
    setAccessToken(token)
    setIsAuth(true)
    navigate(RoutePath.ROOT)
  }

  const logout = (): void => {
    setIsAuth(false)
    removeAccessToken()
    navigate(RoutePath.AUTH)
  }

  return <AuthContext.Provider value={{ isAuth, login, logout }}>{children}</AuthContext.Provider>
}
