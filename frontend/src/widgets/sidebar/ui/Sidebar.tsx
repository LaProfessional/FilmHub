import styles from "./Sidebar.module.scss"
import { useTranslation } from "react-i18next"
import { useState } from "react"

import { dataFlags } from "@/widgets/sidebar/model/dataFlags.ts"

import { ReactComponent as AddSvg } from "@/shared/assets/sidebar/Add.svg"

import { CollapsibleSidebarSection } from "@/widgets/sidebar/ui/CollapsibleSidebarSection.tsx"
import { UserFolders } from "./UserFolders"
import { SidebarInput } from "@/shared/ui/SidebarInput/SidebarInput"
import { Button } from "@/shared/ui/Button/Button"
import { Plus } from "lucide-react"

export const Sidebar = () => {
  const { t } = useTranslation()
  const [folderName, setFolderName] = useState("")

  const handleCreateFolder = () => {
    if (!folderName.trim()) return
    setFolderName("")
  }

  type StaticId = "all" | "fav"

  const staticItems: { id: StaticId; label: string }[] = [
    { id: "all", label: t("allMovies") },
    { id: "fav", label: t("favourites") },
  ]

  const [selectedId, setSelectedId] = useState<StaticId | number>("all")

  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
      <SidebarInput
        value={folderName}
        onChange={setFolderName}
        onClick={handleCreateFolder}
        placeholder={t("createCategory")}
        icon={<Plus size={22} className={styles.plusIcon} />}
      />
        <section>
          <CollapsibleSidebarSection
            heading={t("yourCollections")}
            variant="wrapper"
            headingStyle="title"
          >
          <ul>
            {staticItems.map(({ id, label }) => (
              <li
                key={id}
                className={`${styles.item} ${selectedId === id ? styles.select : ""}`}
                onClick={() => setSelectedId(id)}
              >
                {label}
              </li>
            ))}
          </ul>
          <UserFolders selectedId={selectedId} onSelect={setSelectedId} />
          </CollapsibleSidebarSection>
        </section>

        <section>
          <CollapsibleSidebarSection
            heading={t("categories")}
            variant="wrapper"
            headingStyle="title"
          >
            <CollapsibleSidebarSection
              heading={t("storyLevel")}
              variant="categoryGroup"
              headingStyle="categoryGroupTitle"
            >
              <ul className={styles.flagContainer}>
                {dataFlags.map((flag, index) => (
                  <li className={styles.flagData} key={index}>
                    <div className={styles.wrapperFlagStat}>
                      <span
                        className={styles.flag}
                        title={t(flag.flagName)}
                        style={{
                          color: flag.color,
                          backgroundColor: flag.bg,
                          borderLeft: flag.border,
                        }}
                      >
                        {t(flag.flagName)}
                      </span>
                      <div className={styles.amountFlag}>3</div>
                    </div>

                    <div className={styles.progressBar}>
                      <div
                        className={styles.progress}
                        style={{ backgroundColor: flag.progress }}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>
              <Button variant={"btnAdd"}>
                <AddSvg className={styles.addSvg} />
                {t("addFlag")}
              </Button>
            </CollapsibleSidebarSection>
          </CollapsibleSidebarSection>
        </section>
      </nav>
    </aside>
  )
}
