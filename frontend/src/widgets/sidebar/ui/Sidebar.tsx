import styles from "./Sidebar.module.scss";
import { useTranslation } from "react-i18next";

import { dataFlags } from "@/widgets/sidebar/model/dataFlags.ts";

import { CollapsibleSidebarSection } from "@/widgets/sidebar/ui/CollapsibleSidebarSection";
import { NewFolderModal } from "@/widgets/sidebar/ui/NewFolderModal";
import { FolderItem } from "@/widgets/sidebar/ui/FolderItem"

import { Button, Input } from "@/shared/ui/index";

import { Plus } from "lucide-react";
import { useState } from "react";

type Folder = {
  id: string;
  name: string;
  isPublic?: boolean;
  isSystem?: boolean; 
};

const generateId = () => `${Date.now()}-${Math.random().toString(16).slice(2)}`;

export const Sidebar = () => {
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFolderId, setActiveFolderId] = useState<string>("allMovies");


  const [editingFolder, setEditingFolder] = useState<Folder | null>(null);

  const handleEditFolder = (folder: Folder) => {
    const name = folder.isSystem ? t(folder.id) : folder.name;
    setEditingFolder({ ...folder, name });
    setIsModalOpen(true);
  };

  const handleUpdateFolder = (id: string, name: string, isPublic: boolean) => {
    setFolders((prev) =>
      prev.map((folder) =>
        folder.id === id ? { ...folder, name, isPublic } : folder
      )
    );
  };

  const handleDeleteFolder = (id: string) => {
    setFolders((prev) => prev.filter((folder) => folder.id !== id));
  };

  const handleAddFolder = (folderName: string, isPublic: boolean) => {
    const newFolder: Folder = {
      id: generateId(),
      name: folderName,
      isPublic,
    };
    setFolders((prev) => [...prev, newFolder]);
  };

  const [folders, setFolders] = useState<Folder[]>([
    { id: "allMovies", name: t("allMovies"), isPublic: false, isSystem: true },
    { id: "favourites", name: t("favourites"), isPublic: false, isSystem: true }
  ]);

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
{folders.map((folder) => {
  const { id, isPublic = false, isSystem = false } = folder;
  const name = isSystem ? t(id) : folder.name;

  return (
    <FolderItem
      key={id}
      name={name}
      isActive={activeFolderId === id}
      onClick={() => setActiveFolderId(id)}
      onEdit={() => handleEditFolder({ id, name, isPublic, isSystem })}
      onDelete={() => handleDeleteFolder(id)}
      isPublic={isPublic}
      isSystem={isSystem}
    />
  );
})}

            </ul>

            <Button variant="addBtn" onClick={() => setIsModalOpen(true)}>
              <Plus size={18} className={styles.addIcon} />
              {t("newFolder")}
            </Button>

          <NewFolderModal
            isOpen={isModalOpen}
            onClose={() => {
              setIsModalOpen(false);
              setEditingFolder(null);
            }}
            onCreate={handleAddFolder}
            onUpdate={handleUpdateFolder}
            folderToEdit={editingFolder}
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