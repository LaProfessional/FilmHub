import { AppShell } from "@/app/AppShell";
import { AuthProvider } from "@/features/auth";
import { NotFoundPage } from "@/pages/404";
import { AuthPage } from "@/pages/auth";
import { HomePage } from "@/pages/home";
import { AppRoute } from "@/shared/config";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: AppRoute.AUTH,
    element: (
      <AuthProvider>
        <AuthPage />
      </AuthProvider>
    ),
  },
  // {
  //   element: (
  //     <AuthProvider>
  //       <PrivateRoute />
  //     </AuthProvider>
  //   ),
  //   children: [
  {
    path: AppRoute.ROOT,
    element: <AppShell />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  // ],
  // },
  {
    path: AppRoute.NOT_FOUND,
    element: <NotFoundPage />,
  },
]);
