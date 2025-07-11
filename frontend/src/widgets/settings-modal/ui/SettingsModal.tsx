import { useState } from "react";
import { getSettingsData } from "../model/getSettingsData";
import { SettingsOptions } from "./SettingsOptions";
import { SettingsSidebar } from "./SettingsSidebar";

export const SettingsModal = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { settings, stub } = getSettingsData();

  return (
    <div className="bg-background text-foreground w-full h-screen fixed top-0 left-0">
      <div className="h-full flex">
        <SettingsSidebar setActiveIndex={setActiveIndex} activeIndex={activeIndex} />
        <SettingsOptions settings={settings[activeIndex] || stub} />
      </div>
    </div>
  );
};
