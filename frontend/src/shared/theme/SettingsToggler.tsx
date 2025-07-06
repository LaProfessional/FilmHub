// SettingsToggler.tsx
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/dialog";
import { Button } from "@/shared/ui/button";
import { ChevronDown, Settings } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useSettings } from "./SettingsContext";

type SettingKey = keyof ReturnType<typeof useSettings>['settings'];

export function SettingsToggler() {
  const { settings, updateSettings } = useSettings();
  const [open, setOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    mainPage: false,
    flags: false,
  });
  const { t } = useTranslation();

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const toggleSetting = (setting: SettingKey) => {
    updateSettings({
      [setting]: !settings[setting],
    });
  };

  const settingsButton = {
    icon: <Settings size={18} />,
    text: t("Settings"),
  };

  const renderToggleButton = (setting: SettingKey, label: string) => (
    <div className="flex flex-row gap-2 mb-4 w-full justify-between items-center">
      <label className="text-sm font-medium">{label}</label>
      <Button
        variant={settings[setting] ? "default" : "outline"}
        size="sm"
        onClick={() => toggleSetting(setting)}
      >
        {settings[setting] ? t("On") : t("Off")}
      </Button>
    </div>
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="cursor-pointer">
          {settingsButton.icon}
          {settingsButton.text}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{t("Settings")}</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-4">
          {/* Sidebar Section */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold">{t("Sidebar")}</h3>
            {renderToggleButton(
              "sidebarProgressBar",
              t("Enable/disable progress bar for flags")
            )}
            {renderToggleButton(
              "sidebarFlagsStats",
              t("Enable/disable flags statistics")
            )}
          </div>

          {/* Main Page Section */}
          <div className="space-y-2">
            <Button
              variant="ghost"
              className="w-full flex justify-between items-center p-0 hover:bg-transparent"
              onClick={() => toggleSection("mainPage")}
            >
              <h3 className="text-sm font-semibold">{t("Main Page")}</h3>
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  expandedSections.mainPage ? "rotate-180" : ""
                }`}
              />
            </Button>

            {expandedSections.mainPage && (
              <div className="pl-4 space-y-2">
                {renderToggleButton("mainPageCardOnly", t("Card only"))}
                {renderToggleButton("mainPageNoMargins", t("No edge margins"))}
                {renderToggleButton("mainPageFor4K", t("For 4K monitors"))}
                {renderToggleButton("mainPageSlider", t("Slider view"))}
                {renderToggleButton("mainPageList", t("List view"))}
                {renderToggleButton("mainPageGrid", t("Grid view"))}
                {renderToggleButton("mainPageLarge", t("Large cards"))}
              </div>
            )}
          </div>

          {/* Flags Section */}
          <div className="space-y-2">
            <Button
              variant="ghost"
              className="w-full flex justify-between items-center p-0 hover:bg-transparent"
              onClick={() => toggleSection("flags")}
            >
              <h3 className="text-sm font-semibold">{t("Flags")}</h3>
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  expandedSections.flags ? "rotate-180" : ""
                }`}
              />
            </Button>

            {expandedSections.flags && (
              <div className="pl-4 space-y-2">
                {renderToggleButton(
                  "flagsVisibility",
                  t("Enable/disable flags display on movies")
                )}
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
