import { type RouteObject } from "react-router-dom"
import { RoutePath } from "./routePaths"

import { RootLayout } from "@/shared/layout"
import { HomePage } from "@/pages/home"

import { Auth } from "@/pages/auth"
import homeLoader from "@/app/route-loaders/homeLoader"

export const routeConfig: RouteObject[] = [
  {
    path: RoutePath.AUTH,
    element: <Auth />,
  },
  {
    path: RoutePath.HOME,
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: homeLoader
      },
    ],
  },
  {
    path: RoutePath.NOT_FOUND,
    element: <div>404</div>,
  },
]
