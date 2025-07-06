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
import { useSettings } from "./SettingsContext";
import { Settings } from "lucide-react";
import { useTranslation } from "react-i18next";

export function SettingsToggler() {
  const { settings, setSettings } = useSettings();
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const settingsButton = {
    icon: <Settings size={18} />,
    text: t("Settings"),
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" style={{ cursor: "pointer" }}>
          {settingsButton.icon}
          {settingsButton.text}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label htmlFor="theme-toggle" className="text-sm font-medium">
              Dark Theme
            </label>
            <Button
              id="theme-toggle"
              variant={settings ? "default" : "outline"}
              size="sm"
              onClick={() => setSettings(!settings)}
            >
              {settings ? "On" : "Off"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
