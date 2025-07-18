// import { collectionModel } from "@/entities/collection";
import { mockCollections } from "@/entities/collection/model";
import { AddCollection } from "@/features/collection-manage/ui/AddCollection";
import { Button } from "@/shared/ui";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";
import { NavItem } from "./NavItem";

export function UserCollections() {
  const [creating, setCreating] = useState(false);
  const { t } = useTranslation();

  // const onAddCollection = () => {
  //   collectionModel.addCollection();
  // };

  const toggleCreating = () => {
    setCreating((prev) => !prev);
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
          {mockCollections.map((name) => (
            <NavItem name={name} />
          ))}
        </ul>
      </nav>

      <div className="">
        {creating ?
          <AddCollection onSuccess={toggleCreating} />
        : <Button className="w-full" onClick={toggleCreating}>
            {t("New folder")}
          </Button>
        }
      </div>
    </div>
  );
}
