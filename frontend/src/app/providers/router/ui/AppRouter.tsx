import { useRoutes } from "react-router-dom"
import { routeConfig } from "@/shared/config/router"
import { Suspense } from "react"

import { Loading } from "@/widgets/loading"

export const AppRouter = () => {
  const routes = useRoutes(routeConfig)

  return <Suspense fallback={<Loading />}>{routes}</Suspense>
}
