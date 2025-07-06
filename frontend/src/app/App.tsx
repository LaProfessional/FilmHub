// App.tsx
import "@/shared/config/i18n";

import { LanguageProvider } from "@/app/providers/i18n";
import { AppRouter } from "./router";
import { SettingsProvider } from "@/shared/theme/SettingsProvider";
import { ThemeProvider } from "@/shared/theme/ThemeProvider";
import "./index.css";

export function App() {
  return (
    <LanguageProvider>
      <ThemeProvider defaultTheme="system">
        <SettingsProvider>
          <AppRouter />
        </SettingsProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}
