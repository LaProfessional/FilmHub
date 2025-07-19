import { Navigate, Outlet } from "react-router";
import { useAuth } from "@/features/auth";
import { AppRoute } from "@/shared/config";

export const PrivateRoute = () => {
  const { isAuth } = useAuth();

  if (false) return <Navigate to={AppRoute.AUTH} />;

  return <Outlet />;
};
