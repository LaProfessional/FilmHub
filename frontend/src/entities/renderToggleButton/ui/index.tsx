import { Button } from "@/shared/ui";
import { useSettings } from "@/shared/theme/SettingsContext";
import { useTranslation } from "react-i18next";

export type SettingKey = keyof ReturnType<typeof useSettings>["settings"];

export const RenderToggleButton = (setting: SettingKey, label: string) => {
  const { settings, updateSettings } = useSettings();
  const { t } = useTranslation();

  const toggleSetting = (setting: SettingKey) => {
    updateSettings({
      [setting]: !settings[setting],
    });
  };

  return (
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
};
