import { createBrowserRouter } from "react-router";
import { AuthPage } from "@/pages/auth";
import { HomePage } from "@/pages/home";
import { NotFoundPage } from "@/pages/404";
import { AppShell } from "@/app/AppShell";
import { AuthProvider } from "@/features/auth";
import { AppRoute } from "@/shared/config";
import { PrivateRoute } from "./PrivateRoute";
import { ProfilePage } from "@/pages/profile";

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
/*       <AuthProvider>
        <PrivateRoute />
      </AuthProvider> */
      <AppShell />
    ),
    children: [
/*       {
        element: <AppShell />,
        children: [ */
          {
            index: true,
            element: <HomePage />,
          },
        {
          path: '/profile',
          element: <ProfilePage/>
        },
        ],
      },
/*     ],
  }, */
  {
    path: AppRoute.NOT_FOUND,
    element: <NotFoundPage />,
  },
]);
