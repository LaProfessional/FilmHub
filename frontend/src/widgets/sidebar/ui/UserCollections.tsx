import { collectionModel } from "@/entities/collection";
import { type Collection } from "@/entities/collection/model";

import { AddCollection, RenameCollection } from "@/features/collection-manage";

import { Button } from "@/shared/ui";
import { NavItem } from "./NavItem";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";

export function UserCollections() {
  const { mockCollections, addCollection, removeCollection, renameCollection } = collectionModel;
  // Состояние чтобы react знал, что нужно ререндерить
  const [collections, setCollections] = useState(mockCollections);

  const [creating, setCreating] = useState(false);
  const [editing, setEditing] = useState(false);

  const { t } = useTranslation();

  // Оч не красиво, но работает
  const onAddCollection = (name: string) => {
    addCollection(name);
    setCollections([...mockCollections]);
  };

  const onEditCollection = (col: Collection) => {
    renameCollection(col);
    setCollections([...mockCollections]);
  };

  const onDeleteCollection = (id: number) => {
    removeCollection(id);
    setCollections([...mockCollections]);
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
