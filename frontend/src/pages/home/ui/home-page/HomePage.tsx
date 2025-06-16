import styles from "./HomePage.module.scss"

import { FilterPanel } from "@/widgets/filters/ui/FilterPanel.tsx"

import { ControlsPanel } from "@/pages/home/ui/controls-panel/ControlsPanel.tsx"
import { NavTabs } from "@/pages/home/ui/nav-tabs/NavTabs.tsx"

export const HomePage = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navContainer}>
        <section className={styles.navSection}>
          <NavTabs />
          <FilterPanel />
        </section>

        <hr />

        <ControlsPanel />
      </nav>
    </div>
  )
}
