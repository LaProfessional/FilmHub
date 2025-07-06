// SettingsContext.tsx
import { createContext, useContext } from "react";
import type { Settings } from "./types";

export type SettingsProviderState = {
  settings: Settings;
  setSettings: (settings: Settings) => void;
};

const initialState: SettingsProviderState = {
  settings: false,
  setSettings: (settings: Settings) => {
    console.log(settings);
  },
};

export const SettingsContext = createContext<SettingsProviderState>(initialState);

export const useSettings = () => {
  const context = useContext(SettingsContext);

  if (context === undefined) throw new Error("useSettings must be used within a SettingsProvider");

  return context;
};
