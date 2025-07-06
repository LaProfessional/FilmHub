import { Outlet } from "react-router";
import { Header } from "@/widgets/header";
import { Sidebar } from "@/widgets/sidebar";

export const AppShell = () => {
  return (
    <div className="grid grid-cols-5 grid-rows-[60px,1fr] h-[100vh]">
      <div className="col-span-full row-start-1 row-end-2">
        <Header />
      </div>
      <div className="col-start-1 col-end-2 row-start-2 row-end-3 overflow-y-auto">
        <Sidebar />
      </div>
      <main className="col-start-2 col-end-6 row-start-2 row-end-3 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};
