import { type Collection } from "@/entities/collection/model";
import { ActionsMenu } from "@/features/collection-manage/ui/ActionsMenu";
import { RenameCollection } from "@/features/collection-manage/ui/RenameCollection";
import { useState } from "react";
import { NavLink } from "react-router";

export const NavItem = ({ collection }: { collection: Collection }) => {
  const [editing, setEditing] = useState(false);

  const toggleEditing = () => {
    setEditing((prev) => !prev);
  };

  return !editing ?
      <li className="group p-2 cursor-pointer text-base flex items-center justify-between transition-all delay-150 hover:opacity-50">
        <NavLink to="/">{collection.name}</NavLink>
        <ActionsMenu onEdit={toggleEditing} />
      </li>
    : <RenameCollection col={collection} onSuccess={toggleEditing} />;
};
