import { useRoutes } from "react-router-dom"
import { routeConfig } from "@/shared/config/router"
import { Suspense } from "react"

export const AppRouter = () => {
  const routes = useRoutes(routeConfig)

  return <Suspense fallback={<div>Loading...</div>}>{routes}</Suspense>
}
