import styles from "./RootLayout.module.scss";

import { Header } from "@/widgets/header";
import { Sidebar } from "@/widgets/sidebar";
import { Outlet } from "react-router-dom";

/* interface RootLayoutProps {
    children: React.ReactNode;
} */

export const RootLayout = () => {
    return (
        <div className={ styles["main-layout"] }>
            <Header/>
            <div className={ styles["layout-content"] }>
                  <Sidebar/> 
                <main className={ styles["page-content"] }>
                    <Outlet/>
                </main>
            </div>
        </div>
    );
};

export const RootLayoutWithoutSidebar = () => {
        return (
        <div className={ styles["main-layout"] }>
            <Header/>
            <div className={ styles["layout-content"] }>
                
                <main className={ styles["page-content"] }>
                    <Outlet/>
                </main>
            </div>
        </div>
    );
}
