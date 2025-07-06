import { useEffect, useState, type ReactNode } from "react";
import { useNavigate } from "react-router";
// TODO: возможно это должно быть моделью `shared/model/token`, так, например
import { getAccessToken, removeAccessToken, setAccessToken } from "@/shared/lib/token-storage";
import { AuthContext } from "../model";

export type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState<boolean>(true);

  useEffect(() => {
    const token = getAccessToken();
    if (token) {
      setIsAuth(true);
    }
  }, []);

  const login = (token: string): void => {
    setAccessToken(token);
    setIsAuth(true);
    navigate("/");
  };

  const logout = (): void => {
    setIsAuth(false);
    removeAccessToken();
    navigate("/auth");
  };

  return <AuthContext.Provider value={{ isAuth, login, logout }}>{children}</AuthContext.Provider>;
};
