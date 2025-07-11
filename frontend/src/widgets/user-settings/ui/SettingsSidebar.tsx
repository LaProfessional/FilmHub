import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui";

import { getSettingsData } from "../model/getSettingsData";
import type { NavItemKey } from "../model/types";

import { useTranslation } from "react-i18next";

export const SettingsSidebar = ({
  setActiveTab,
  activeTab,
}: {
  setActiveTab: (i: NavItemKey) => void;
  activeTab: NavItemKey;
}) => {
  const { t } = useTranslation();
  const { navItems } = getSettingsData(t);

  return (
    <aside className="h-full lg:max-w-[325px] lg:w-full p-4 border-r border-r-primary">
      <div className="flex flex-col gap-4">
        {navItems.map((item) => (
          <Button
            onClick={() => setActiveTab(item.key)}
            key={item.key}
            className={cn(
              "justify-start lg:text-lg text-[16px] py-5",
              activeTab === item.key && "bg-accent dark:bg-accent",
            )}
          >
            {item.text}
          </Button>
        ))}
      </div>
    </aside>
  );
};
