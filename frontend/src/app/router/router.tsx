import { AppShell } from "@/app/AppShell";
import { AuthProvider } from "@/features/auth";
import { NotFoundPage } from "@/pages/404";
import { AuthPage } from "@/pages/auth";
import { HomePage } from "@/pages/home";
import { AppRoute } from "@/shared/config";
import { createBrowserRouter } from "react-router";
import { PrivateRoute } from "./PrivateRoute";
// import { MoviePage } from "@/pages/movie/ui/MoviePage";

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
          {
            path: "/movie/:id",
            element: <div>Movie Page</div>,
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
