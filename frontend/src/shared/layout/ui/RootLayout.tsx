import styles from "./RootLayout.module.scss";

import { Header } from "@/widgets/header";
import { Sidebar } from "@/widgets/sidebar";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <div className={styles["main-layout"]}>
      <Header />
      <div className={styles["layout-content"]}>
        <Sidebar />
        <main className={styles["page-content"]}>{children}</main>
      </div>
    </div>
  );
};
