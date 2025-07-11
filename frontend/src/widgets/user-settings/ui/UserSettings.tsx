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
import type { NavItemKey } from "../model/types";
import { SettingsOptions } from "./SettingsOptions";
import { SettingsSidebar } from "./SettingsSidebar";

export const UserSettings = () => {
  const { t } = useTranslation();
  const { settings } = getSettingsData();
  const [activeTab, setActiveTab] = useState<NavItemKey>("gallery");

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
          <SettingsOptions settings={settings[activeTab]} />
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};
