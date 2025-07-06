import { createBrowserRouter } from "react-router";
import { PrivateRoute } from "./PrivateRoute";

import { AuthProvider } from "@/features/auth";

import { AuthPage } from "@/pages/auth";
import { HomePage } from "@/pages/home";
import { NotFoundPage } from "@/pages/404";

import { AppShell } from "@/app/AppShell";

import { AppRoute } from "@/shared/config";

export const router = createBrowserRouter([
  {
    path: AppRoute.AUTH,
    element: (
      <AuthProvider>
        <AuthPage />
      </AuthProvider>
    ),
  },
  {
    path: AppRoute.ROOT,
    element: (
      <AuthProvider>
        <PrivateRoute />
      </AuthProvider>
    ),
    children: [
      {
        element: <AppShell />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
        ],
      },
    ],
  },
  {
    path: AppRoute.NOT_FOUND,
    element: <NotFoundPage />,
  },
]);
