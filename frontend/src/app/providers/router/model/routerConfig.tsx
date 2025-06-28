import { type RouteObject } from "react-router-dom"

import { RoutePath } from "../const/routePaths"

import { PrivateRoute } from "../ui/PrivateRoute"
import { RootLayout } from "@/shared/layout"
import { HomePage } from "@/pages/home"

import { Auth } from "@/pages/auth"
import homeLoader from "@/app/route-loaders/homeLoader"

export const routerConfig: RouteObject[] = [
  {
    path: RoutePath.AUTH,
    element: <Auth />,
  },
  {
    path: RoutePath.ROOT,
    element: <PrivateRoute />,
    children: [
      {
        element: <RootLayout />,
        children: [
          {
            index: true,
            element: <HomePage />,
            loader: homeLoader
          },
        ],
      },
    ],
  },
  {
    path: RoutePath.NOT_FOUND,
    element: <div>404</div>,
  },
]
