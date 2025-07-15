import { useSelector } from "react-redux";

import { useLogoutMutation } from "../api/authApiSlice";
import { selectIsAuthenticated, selectUserId } from "./authSlice";

export function useAuth() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const userId = useSelector(selectUserId);

  const [logout] = useLogoutMutation();

  return {
    isAuthenticated,
    userId,
    logout,
  };
}
