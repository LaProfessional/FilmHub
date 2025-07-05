import { cn } from "@/shared/lib/utils";
import { ReactComponent as ArrowSvg } from "@/shared/assets/sidebar/Arrow.svg";

import { Button } from "@/shared/ui";

interface SidebarSectionHeaderProps {
  // variant: string;
  headingStyle: string;
  heading: string;

  toggleMenu: () => void;
  isClose: boolean;
}

export const SidebarSectionHeader: React.FC<SidebarSectionHeaderProps> = ({
  // variant,
  headingStyle,
  heading,
  toggleMenu,
  isClose,
}) => {
  return (
    <div className={""}>
      {headingStyle === "title" ?
        <h2 className={""}>{heading}</h2>
      : <h3 className={""}>{heading}</h3>}

      <Button onClick={toggleMenu}>
        <ArrowSvg className={cn("", isClose && "")} />
      </Button>
    </div>
  );
};
