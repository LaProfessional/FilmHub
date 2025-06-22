import { useEffect, useState } from "react"
import { AuthContext } from "../model/auth-context"
import { getAccessToken, removeAccessToken, setAccessToken } from "@/shared/lib/token-storage"

interface AuthProviderProps {
  children: React.ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
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
  }

  const logout = (): void => {
    setIsAuth(false)
    removeAccessToken()
  }

  return <AuthContext.Provider value={{ isAuth, login, logout }}>{children}</AuthContext.Provider>
}
