import { Outlet } from "react-router";
import { Header } from "@/widgets/header";
import { Sidebar } from "@/widgets/sidebar";

export const AppShell = () => {
  return (
    <div className="w-full h-full">
      <Header />
      <div className="flex-auto pt-5 w-full max-w-[1700px] mx-auto justify-center flex gap-10">
        <Sidebar />
        <div className="flex-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
