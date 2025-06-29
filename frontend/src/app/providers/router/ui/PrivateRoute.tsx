import { Navigate, Outlet } from "react-router-dom"

import { useAuth } from "@/app/providers/auth"
import { RoutePath } from "../const/routePaths"

export const PrivateRoute = () => {
  const { isAuth } = useAuth()

  if(!isAuth) return <Navigate to={RoutePath.AUTH}/>

  return <Outlet />
}
