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

export function SettingsToggler() {
  const { settings, setSettings } = useSettings();
  const [open, setOpen] = useState(false);
  const [mainPage, setMainPage] = useState(false);
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
          <div className="flex items-center flex-col justify-between">
            {/* <label htmlFor="theme-toggle" className="text-sm font-medium">
              Dark Theme
            </label>
            <Button
              id="theme-toggle"
              variant={settings ? "default" : "outline"}
              size="sm"
              onClick={() => setSettings(!settings)}
            >
              {settings ? "On" : "Off"}
            </Button> */}
            <p className="text-sm font-medium mb-8">Sidebar</p>
            <div className="flex flex-row gap-2 mb-2 w-full justify-between">
              <label className="text-sm font-medium">
                Включить/отключить progress bar у флагов
              </label>
              <Button variant={settings ? "default" : "outline"} size="sm">
                {settings ? "On" : "Off"}
              </Button>
            </div>
            <div className="flex flex-row gap-2 mb-8 w-full justify-between">
              <label className="text-sm font-medium">Включить/отключить статистику флагов</label>
              <Button variant={settings ? "default" : "outline"} size="sm">
                {settings ? "On" : "Off"}
              </Button>
            </div>
            <Button
              style={{ cursor: "pointer" }}
              variant="ghost"
              className="text-sm font-medium flex items-center gap-1 p-0 hover:bg-transparent"
              onClick={() => setMainPage(!mainPage)}
            >
              Main page
              <ChevronDown size={14} className="mt-[0.1rem]" />
            </Button>
            {mainPage && (
              <>
                <div className="flex flex-row gap-2 mb-8 w-full justify-between">
                  <label className="text-sm font-medium">Только карточка</label>
                  <Button variant={settings ? "default" : "outline"} size="sm">
                    {settings ? "On" : "Off"}
                  </Button>
                </div>
                <div className="flex flex-row gap-2 mb-8 w-full justify-between">
                  <label className="text-sm font-medium">Без отступов по краям</label>
                  <Button variant={settings ? "default" : "outline"} size="sm">
                    {settings ? "On" : "Off"}
                  </Button>
                </div>
                <div className="flex flex-row gap-2 mb-8 w-full justify-between">
                  <label className="text-sm font-medium">Для 4к мониторов</label>
                  <Button variant={settings ? "default" : "outline"} size="sm">
                    {settings ? "On" : "Off"}
                  </Button>
                </div>
                <div className="flex flex-row gap-2 mb-8 w-full justify-between">
                  <label className="text-sm font-medium">Слайдер</label>
                  <Button variant={settings ? "default" : "outline"} size="sm">
                    {settings ? "On" : "Off"}
                  </Button>
                </div>
                <div className="flex flex-row gap-2 mb-8 w-full justify-between">
                  <label className="text-sm font-medium">Список</label>
                  <Button variant={settings ? "default" : "outline"} size="sm">
                    {settings ? "On" : "Off"}
                  </Button>
                </div>
                <div className="flex flex-row gap-2 mb-8 w-full justify-between">
                  <label className="text-sm font-medium">Сетка</label>
                  <Button variant={settings ? "default" : "outline"} size="sm">
                    {settings ? "On" : "Off"}
                  </Button>
                </div>
                <div className="flex flex-row gap-2 mb-8 w-full justify-between">
                  <label className="text-sm font-medium">Большие</label>
                  <Button variant={settings ? "default" : "outline"} size="sm">
                    {settings ? "On" : "Off"}
                  </Button>
                </div>
              </>
            )}
                        <Button
              style={{ cursor: "pointer" }}
              variant="ghost"
              className="text-sm font-medium flex items-center gap-1 p-0 hover:bg-transparent"
              onClick={() => setMainPage(!mainPage)}
            >
              Main page
              <ChevronDown size={14} className="mt-[0.1rem]" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
