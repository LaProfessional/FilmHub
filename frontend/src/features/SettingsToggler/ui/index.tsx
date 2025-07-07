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
import { useSettings } from "../../../shared/theme/SettingsContext";
import { RenderToggleButton } from "@/entities/renderToggleButton/ui";
export type SettingKey = keyof ReturnType<typeof useSettings>["settings"];
export function SettingsToggler() {
  const { settings, updateSettings, open, setOpen,expandedSections, setExpandedSections } = useSettings();

  const { t } = useTranslation();

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section],
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{t("Settings")}</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-4">
          {/* Sidebar Section */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold">{t("Sidebar")}</h3>
            {RenderToggleButton(
              "sidebarProgressBar",
              t("Enable/disable progress bar for flags")
            )}
            {RenderToggleButton(
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
                {RenderToggleButton("mainPageCardOnly", t("Card only"))}
                {RenderToggleButton("mainPageNoMargins", t("No edge margins"))}
                {RenderToggleButton("mainPageFor4K", t("For 4K monitors"))}
                {RenderToggleButton("mainPageSlider", t("Slider view"))}
                {RenderToggleButton("mainPageList", t("List view"))}
                {RenderToggleButton("mainPageGrid", t("Grid view"))}
                {RenderToggleButton("mainPageLarge", t("Large cards"))}
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
                {RenderToggleButton(
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
