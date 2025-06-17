import { type RouteObject } from "react-router-dom"
import { RoutePath } from "./routePaths"

import { RootLayout } from "@/shared/layout"

import { HomePage } from "@/pages/home"
import { Auth } from "@/pages/auth"

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
      },
    ],
  },
  {
    path: RoutePath.NOT_FOUND,
    element: <div>404</div>,
  },
]
