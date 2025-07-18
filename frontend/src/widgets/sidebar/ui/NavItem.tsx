import { Button } from "@/shared/ui";
import { MoreVerticalIcon } from "lucide-react";
import { NavLink } from "react-router";

export const NavItem = ({ name }: { name: string }) => {
  return (
    <li className="group p-2 cursor-pointer text-base flex items-center justify-between transition-all delay-150 hover:opacity-50">
      <NavLink to="/">{name}</NavLink>

      <Button className="opacity-0 group-hover:opacity-100 cursor-pointer" variant={"ghost"}>
        <MoreVerticalIcon size={18} />
      </Button>
    </li>
  );
};
