import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui";
import { ArrowLeft } from "lucide-react";
import { getSettingsData } from "../model/getSettingsData";
import type { NavItemKey } from "../model/types";

export const SettingsSidebar = ({
  setActiveTab,
  activeTab,
}: {
  setActiveTab: (i: NavItemKey) => void;
  activeTab: NavItemKey;
}) => {
  const { navItems } = getSettingsData();

  console.log("tab", activeTab);

  return (
    <aside className="h-full max-w-[325px] w-full p-4 border-r border-r-primary">
      <Button className="w-fit">
        <ArrowLeft /> Back
      </Button>

      <div className="flex flex-col gap-4 mt-10">
        {navItems.map((item) => (
          <Button
            onClick={() => setActiveTab(item.key)}
            key={item.key}
            className={cn("justify-start text-lg py-5", activeTab === item.key && "dark:bg-accent")}
          >
            {item.text}
          </Button>
        ))}
      </div>
    </aside>
  );
};
