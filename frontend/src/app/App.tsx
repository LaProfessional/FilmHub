import { Provider as StoreProvider } from "react-redux";
import "@/shared/config/i18n";

import { ThemeProvider } from "@/shared/theme";
import { LanguageProvider } from "@/app/providers/i18n";
import { AppRouter } from "./router";

import { store } from "./store";

import "./index.css";

export function App() {
  return (
    <StoreProvider store={store}>
      <LanguageProvider>
        <ThemeProvider defaultTheme="system">
          <AppRouter />
        </ThemeProvider>
      </LanguageProvider>
    </StoreProvider>
  );
}
