import { Outlet } from "react-router";
import { AuthProvider } from "./AuthProvider";

export const AuthLayout = () => {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
};
