import { collectionModel } from "@/entities/collection";
import { type Collection } from "@/entities/collection/model";
import { AddCollection } from "@/features/collection-manage/ui/AddCollection";
import { RenameCollection } from "@/features/collection-manage/ui/RenameCollection";
import { Button } from "@/shared/ui";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";
import { NavItem } from "./NavItem";

export function UserCollections() {
  const [collections, setCollections] = useState(collectionModel.mockCollections);
  const [creating, setCreating] = useState(false);
  const [editing, setEditing] = useState(false);

  const { t } = useTranslation();

  const onAddCollection = (name: string) => {
    collectionModel.addCollection(name);
    setCollections([...collectionModel.mockCollections]);
  };

  const onEditCollection = (col: Collection) => {
    collectionModel.renameCollection(col);
    setCollections([...collectionModel.mockCollections]);
  };

  const onDeleteCollection = (id: number) => {
    collectionModel.removeCollection(id);
    setCollections([...collectionModel.mockCollections]);
  };

  const toggleCreating = () => {
    setCreating((prev) => !prev);
  };

  const toggleEditing = () => {
    setEditing((prev) => !prev);
  };

  return (
    <div className="">
      <nav>
        <ul className="flex flex-col gap-2">
          <li className="p-2 cursor-pointer text-base">
            <NavLink to="/">{t("All movies")}</NavLink>
          </li>
          <li className="p-2 cursor-pointer text-base">
            <NavLink to="/">{t("Favourites")}</NavLink>
          </li>
          {collections.map((col) => (
            <li
              key={col.id}
              className="group p-2 cursor-pointer text-base flex items-center justify-between transition-all delay-150 hover:opacity-50"
            >
              {editing ?
                <RenameCollection
                  col={col}
                  renameCollection={onEditCollection}
                  onSuccess={toggleEditing}
                />
              : <NavItem collection={col} onEdit={toggleEditing} onDelete={onDeleteCollection} />}
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-4">
        {creating ?
          <AddCollection onSuccess={toggleCreating} addCollection={onAddCollection} />
        : <Button className="w-full" onClick={toggleCreating}>
            {t("New folder")}
          </Button>
        }
      </div>
    </div>
  );
}
