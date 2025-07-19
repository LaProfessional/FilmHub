import { type Collection } from "@/entities/collection/model";
import { ActionsMenu } from "@/features/collection-manage";
import { NavLink } from "react-router";

interface NavItemProps {
  collection: Collection;
  onEdit: () => void;
  onDelete: (id: number) => void;
}

export const NavItem = ({ collection, onEdit, onDelete }: NavItemProps) => {
  const handleDelete = () => {
    onDelete(collection.id);
  };

  return (
    <>
      <NavLink to="/">{collection.name}</NavLink>
      <ActionsMenu onDelete={handleDelete} onEdit={onEdit} />
    </>
  );
};
