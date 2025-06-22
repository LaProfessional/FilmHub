import { useRoutes } from "react-router-dom"
import { Suspense } from "react"

import { Loading } from "@/widgets/loading"

import { routerConfig } from "../model/routerConfig"

export const AppRouter = () => {
  const routes = useRoutes(routerConfig)

  return <Suspense fallback={<Loading />}>{routes}</Suspense>
}
