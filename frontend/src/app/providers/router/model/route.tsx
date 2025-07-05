import { createBrowserRouter } from "react-router";

import { RoutePath } from "../const/routePaths";

import { PrivateRoute } from "../ui/PrivateRoute";
import { RootLayout } from "@/shared/layout";
import { HomePage } from "@/pages/home";

import { Auth } from "@/pages/auth";

import homeLoader from "@/app/route-loaders/homeLoader";
import { AuthProvider } from "@/app/providers/auth";

export const route = createBrowserRouter([
  {
    path: RoutePath.AUTH,
    element: (
      <AuthProvider>
        <Auth />
      </AuthProvider>
    ),
  },
  {
    path: RoutePath.ROOT,
    element: (
      <AuthProvider>
        <PrivateRoute />
      </AuthProvider>
    ),
    children: [
      {
        element: <RootLayout />,
        children: [
          {
            index: true,
            element: <HomePage />,
            loader: homeLoader,
          },
        ],
      },
    ],
  },
  {
    path: RoutePath.NOT_FOUND,
    element: <div>404</div>,
  },
]);
