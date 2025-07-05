import { Outlet } from "react-router";

import { Header } from "@/widgets/header";
import { Sidebar } from "@/widgets/sidebar";

export const RootLayout = () => {
  return (
    <div className="flex flex-col h-[100vh] bg-primary text-primary-foreground">
      <Header />
      <div className="flex flex-1/2">
        <Sidebar />
        <main className="flex-1/2">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
