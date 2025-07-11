import { useState } from "react";
import { getSettingsData } from "../model/getSettingsData";
import type { NavItemKey } from "../model/types";
import { SettingsOptions } from "./SettingsOptions";
import { SettingsSidebar } from "./SettingsSidebar";

export const SettingsModal = () => {
  const [activeTab, setActiveTab] = useState<NavItemKey>("gallery");
  const { settings } = getSettingsData();

  return (
    <div className="bg-background text-foreground w-full h-screen fixed top-0 left-0">
      <div className="h-full flex">
        <SettingsSidebar setActiveTab={setActiveTab} activeTab={activeTab} />
        <SettingsOptions settings={settings[activeTab]} />
      </div>
    </div>
  );
};
