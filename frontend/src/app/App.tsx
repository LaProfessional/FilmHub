import "@/shared/config/i18n";

import { ThemeProvider } from "@/shared/theme";
import { LanguageProvider } from "@/app/providers/i18n/";
import { AppRouter } from "@/app/providers/router";

import "./index.css";

export function App() {
  return (
    <LanguageProvider>
      <ThemeProvider defaultTheme="system">
        <AppRouter />
      </ThemeProvider>
    </LanguageProvider>
  );
}
