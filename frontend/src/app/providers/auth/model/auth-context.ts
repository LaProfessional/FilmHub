import { createContext } from "react"

interface IAuthContext {
  isAuth: boolean
  login: (token: string) => void
  logout: () => void
}

export const AuthContext = createContext<IAuthContext | undefined>(undefined)
