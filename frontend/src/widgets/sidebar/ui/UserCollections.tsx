import { NavLink } from "react-router";
import { useTranslation } from "react-i18next";
import { collectionModel } from "@/entities/collection";
import { Button } from "@/shared/ui";

export function UserCollections() {
  const { t } = useTranslation();

  const onAddCollection = () => {
    collectionModel.addCollection();
  };

  return (
    <div className="">
      <nav>
        <ul className="flex flex-col gap-2">
          <li className="">
            <NavLink className="p-2 cursor-pointer text-base" to="/">
              {t("allMovies")}
            </NavLink>
          </li>
          <li className="p-2 cursor-pointer text-base">
            <NavLink to="/">{t("favourites")}</NavLink>
          </li>
        </ul>
      </nav>
      <div className="">
        <Button className="w-full" onClick={onAddCollection}>
          {t("newFolder")}
        </Button>
      </div>
    </div>
  );
}
