import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui";
import { ArrowLeft } from "lucide-react";
import { getSettingsData } from "../model/getSettingsData";

export const SettingsSidebar = ({
  setActiveIndex,
  activeIndex,
}: {
  setActiveIndex: (i: number) => void;
  activeIndex: number;
}) => {
  const { navItems } = getSettingsData();

  return (
    <aside className="h-full max-w-[325px] w-full p-4 border-r border-r-primary">
      <Button className="w-fit">
        <ArrowLeft /> Back
      </Button>

      <div className="flex flex-col gap-4 mt-10">
        {navItems.map((item, i) => (
          <Button
            onClick={() => setActiveIndex(i)}
            key={item}
            className={cn("justify-start text-lg py-5", activeIndex === i && "dark:bg-accent")}
          >
            {item}
          </Button>
        ))}
      </div>
    </aside>
  );
};
