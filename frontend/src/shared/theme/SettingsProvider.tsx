// SettingsProvider.tsx
import { useEffect, useState } from "react";
import { SettingsContext, defaultSettings } from "./SettingsContext";
import type { Settings } from "./types";

export type SettingsProviderProps = {
  children: React.ReactNode;
  defaultSettings?: Partial<Settings>;
  storageKey?: string;
};

export function SettingsProvider({
  children,
  defaultSettings: userDefaultSettings = {},
  storageKey = "vite-ui-settings",
  ...props
}: SettingsProviderProps) {
  const [settings, setSettings] = useState<Settings>(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored) {
      try {
        return { ...defaultSettings, ...JSON.parse(stored) };
      } catch {
        return { ...defaultSettings, ...userDefaultSettings };
      }
    }
    return { ...defaultSettings, ...userDefaultSettings };
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(settings));
  }, [settings, storageKey]);

  const updateSettings = (newSettings: Partial<Settings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  const [open, setOpen] = useState(false);

  const [expandedSections, setExpandedSections] = useState({
    mainPage: false,
    flags: false,
  });

  const value = {
    settings,
    setSettings,
    updateSettings,
    open,
    setOpen,
    expandedSections,
    setExpandedSections,
  };

  return (
    <SettingsContext.Provider {...props} value={value}>
      {children}
    </SettingsContext.Provider>
  );
}
