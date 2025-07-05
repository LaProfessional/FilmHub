import "@/shared/config/i18n";

import { ThemeProvider } from "@/app/providers/theme";
import { LanguageProvider } from "@/app/providers/i18n/";
import { AppRouter } from "@/app/providers/router";

import "./index.css";

export function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </LanguageProvider>
  );
}
