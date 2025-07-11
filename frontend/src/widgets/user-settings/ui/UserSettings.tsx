import {
  Button,
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTrigger,
} from "@/shared/ui";
import { Settings } from "lucide-react";

import { useState } from "react";
import { useTranslation } from "react-i18next";

import { getSettingsData } from "../model/getSettingsData";
import type { NavItemKey, SavedOptions } from "../model/types";

import { SettingsOptions } from "./SettingsOptions";
import { SettingsSidebar } from "./SettingsSidebar";

export const UserSettings = () => {
  const { t } = useTranslation();
  const { settings } = getSettingsData(t);

  const [activeTab, setActiveTab] = useState<NavItemKey>("gallery");
  const [options, setOptions] = useState<SavedOptions>({
    gallery: {},
    sidebar: {},
    mainPage: {},
  }); // сохраняем выбранные настройки в формате - ключ: название параметра, value: статус

  // Общий метод для сохранения выбранной настройки
  const handleOptionChange = (key: string, value: boolean) => {
    setOptions((prev) => ({
      ...prev,
      // Сохраняем в активную коллекцию
      [activeTab]: {
        ...prev[activeTab],
        [key]: value,
      },
    }));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Settings size={18} />
          <span>{t("Settings")}</span>
        </Button>
      </DialogTrigger>

      <DialogPortal>
        <DialogOverlay className="fixed inset-0 z-50 bg-black/60" />

        <DialogContent className="min-w-screen h-screen rounded-none flex p-0">
          <SettingsSidebar setActiveTab={setActiveTab} activeTab={activeTab} />
          <SettingsOptions
            settings={settings[activeTab]}
            savedOptions={options[activeTab]}
            handleChange={handleOptionChange}
          />
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};
