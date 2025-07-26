import { SignInForm, SignUpForm, useAuth } from "@/features/auth";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui";
import { Navigate } from "react-router";

import { AppRoute } from "@/shared/config";
import { ThemeSwitcher } from "@/shared/theme";

// TODO: нужно добавить на эту страничку переключатель темы и языка
// TODO: добавить i18n

export const AuthPage = () => {
  const { isAuth } = useAuth();

  if (isAuth) {
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
          <Tabs className="w-[400px] gap-6" defaultValue="signup">
            <TabsList className="w-full">
              <TabsTrigger value="signup">Sign up</TabsTrigger>
              <TabsTrigger value="signin">Sign in</TabsTrigger>
            </TabsList>
            <TabsContent value="signup">
              <SignUpForm />
            </TabsContent>
            <TabsContent value="signin">
              <SignInForm />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};
