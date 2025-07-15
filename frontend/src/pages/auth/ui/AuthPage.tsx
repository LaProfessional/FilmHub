import { Navigate } from "react-router";
import { LoginForm } from "@/features/auth/ui/LoginForm";
import { RegisterForm } from "@/features/auth/ui/RegisterForm";
import { useAuth } from "@/features/auth";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui";

import { AppRoute } from "@/shared/config";
import { ThemeSwitcher } from "@/shared/theme";

// TODO: нужно добавить на эту страничку переключатель темы и языка
// TODO: добавить i18n

export const AuthPage = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to={AppRoute.ROOT} />;
  }

  return (
    <div className="flex flex-col items-center">
      <header className="flex justify-between items-center md:w-1/2 w-full p-4">
        <div className="flex flex-col justify-between items-start">
          <p className="text-lg">FilmHub</p>
          <p className="text-sm">Your personal movie platform</p>
        </div>
        <div>
          <ThemeSwitcher />
        </div>
      </header>
      <main className="flex justify-center items-center m-10">
        <div className="border rounded-2xl p-8">
          <Tabs className="w-[400px] gap-6" defaultValue="login">
            <TabsList className="w-full">
              <TabsTrigger value="register">Register</TabsTrigger>
              <TabsTrigger value="login">Login</TabsTrigger>
            </TabsList>
            <TabsContent value="register">
              <RegisterForm />
            </TabsContent>
            <TabsContent value="login">
              <LoginForm />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};
