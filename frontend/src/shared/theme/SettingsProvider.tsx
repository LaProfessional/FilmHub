// SettingsProvider.tsx
import { useEffect, useState } from "react";
import { SettingsContext } from "./SettingsContext";
import type { Settings } from "./types";

export type SettingsProviderProps = {
  children: React.ReactNode;
  defaultSettings?: Settings;
  storageKey?: string;
};

export function SettingsProvider({
  children,
  defaultSettings = false,
  storageKey = "vite-ui-settings",
  ...props
}: SettingsProviderProps) {
  const [settings, setSettings] = useState<Settings>(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored) {
      return stored === "true"; // Convert string back to boolean
    }
    return defaultSettings;
  });

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (settings === false) {
      // If settings is false, use system theme
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      root.classList.add(systemTheme);
    } else {
      // If settings is true, use dark theme
      root.classList.add("dark");
    }
  }, [settings]);

  const value = {
    settings,
    setSettings: (newSettings: Settings) => {
      localStorage.setItem(storageKey, newSettings.toString());
      setSettings(newSettings);
    },
  };

  return (
    <SettingsContext.Provider {...props} value={value}>
      {children}
    </SettingsContext.Provider>
  );
}
