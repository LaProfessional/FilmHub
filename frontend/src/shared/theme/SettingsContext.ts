// SettingsContext.tsx
import { createContext, useContext } from "react";
import type { Settings } from "./types";

export const defaultSettings: Settings = {
  sidebarProgressBar: true,
  sidebarFlagsStats: true,
  mainPageCardOnly: false,
  mainPageNoMargins: false,
  mainPageFor4K: false,
  mainPageSlider: false,
  mainPageList: false,
  mainPageGrid: true,
  mainPageLarge: false,
  flagsVisibility: true,
};

export type SettingsProviderState = {
  settings: Settings;
  setSettings: (settings: Settings) => void;
  updateSettings: (newSettings: Partial<Settings>) => void;
};

const initialState: SettingsProviderState = {
  settings: defaultSettings,
  setSettings: () => {},
  updateSettings: () => {},
};

export const SettingsContext = createContext<SettingsProviderState>(initialState);

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (context === undefined) throw new Error("useSettings must be used within a SettingsProvider");
  return context;
};
