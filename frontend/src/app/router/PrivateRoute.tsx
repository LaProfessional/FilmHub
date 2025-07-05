import { Navigate, Outlet } from "react-router";
import { useAuth } from "@/app/providers/auth";
import { AppRoute } from "@/shared/config";

export const PrivateRoute = () => {
  const { isAuth } = useAuth();

  if (!isAuth) return <Navigate to={AppRoute.AUTH} />;

  return <Outlet />;
};
