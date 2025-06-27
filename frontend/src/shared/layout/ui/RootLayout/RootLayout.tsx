import styles from "./RootLayout.module.scss"

import { Outlet } from "react-router-dom"

import { Header } from "@/widgets/header"
import { Sidebar } from "@/widgets/sidebar"

export const RootLayout = () => {
  return (
    <div className={styles["main-layout"]}>
      <Header />
      <div className={styles["layout-content"]}>
        <Sidebar />
        <main className={styles["page-content"]}>
          <Outlet />
        </main>
      </div>
    </div>
  )
}
