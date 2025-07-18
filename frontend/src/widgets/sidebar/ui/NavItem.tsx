import type { Collection } from "@/entities/collection/model";
import { ActionsMenu } from "@/features/collection-manage/ui/ActionsMenu";
import { NavLink } from "react-router";

export const NavItem = ({ collection }: { collection: Collection }) => {
  return (
    <li className="group p-2 cursor-pointer text-base flex items-center justify-between transition-all delay-150 hover:opacity-50">
      <NavLink to="/">{collection.name}</NavLink>

      <ActionsMenu />
    </li>
  );
};
