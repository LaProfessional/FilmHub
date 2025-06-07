import styles from "./Sidebar.module.scss";
import { useTranslation } from "react-i18next";

import { dataFlags } from "@/widgets/sidebar/model/dataFlags.ts";

import { CollapsibleSidebarSection } from "@/widgets/sidebar/ui/CollapsibleSidebarSection";
import { NewFolderModal } from "@/widgets/sidebar/ui/NewFolderModal";
import { FolderItem } from "@/widgets/sidebar/ui/FolderItem"

import { Button, Input } from "@/shared/ui/Index";

import { Plus } from "lucide-react";
import { useState } from "react";

type Folder = {
  id: string;
  name: string;
};

const generateId = () => `${Date.now()}-${Math.random().toString(16).slice(2)}`;

export const Sidebar = () => {
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFolderId, setActiveFolderId] = useState<string>("allMovies");
  const [folders, setFolders] = useState<Folder[]>([]);

  const handleAddFolder = (folderName: string) => {
    const newFolder: Folder = {
      id: generateId(),
      name: folderName
    };
    setFolders((prev) => [...prev, newFolder]);
  };

  const systemFolders: Folder[] = [
    { id: "allMovies", name: t("allMovies") },
    { id: "favourites", name: t("favourites") }
  ];

  const allFolders: Folder[] = [...systemFolders, ...folders];

  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <div className={styles.wrapperInput}>
          <Input
            variant="inputCategory"
            type="text"
            placeholder={t("createCategory")}
          />
          <Button variant="addCategoryBtn">
            <Plus size={22} className={styles.addCategoryIcon} />
          </Button>
        </div>

        <section>
          <CollapsibleSidebarSection
            heading={t("yourCollections")}
            variant="wrapper"
            headingStyle="title"
          >
            <ul>
              {allFolders.map(({ id, name }) => (
                <FolderItem
                  key={id}
                  name={name}
                  isActive={activeFolderId === id}
                  onClick={() => setActiveFolderId(id)}
                />
              ))}
            </ul>

            <Button variant="addBtn" onClick={() => setIsModalOpen(true)}>
              <Plus size={18} className={styles.addIcon} />
              {t("newFolder")}
            </Button>

            <NewFolderModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              onCreate={handleAddFolder}
            />
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

              <Button variant="addBtn" onClick={() => {}}>
                <Plus size={18} className={styles.addIcon} />
                {t("addFlag")}
              </Button>

            </CollapsibleSidebarSection>
          </CollapsibleSidebarSection>
        </section>
      </nav>
    </aside>
  );
};