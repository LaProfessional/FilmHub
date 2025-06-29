import { RouterProvider } from "react-router-dom"
import { Suspense } from "react"

import { Loading } from "@/widgets/loading"

import { route } from "../model/route"

export const AppRouter = () => {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={route} />
    </Suspense>
  )
}
