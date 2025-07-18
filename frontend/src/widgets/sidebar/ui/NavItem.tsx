import { type Collection } from "@/entities/collection/model";
import { ActionsMenu } from "@/features/collection-manage/ui/ActionsMenu";
import { NavLink } from "react-router";

type Props = {
  collection: Collection;
  onEdit: () => void;
  onDelete: (id: number) => void;
};

export const NavItem = ({ collection, onEdit, onDelete }: Props) => {
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
