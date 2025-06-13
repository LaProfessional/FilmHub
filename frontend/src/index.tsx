import App from "./app/App.tsx";
import { createRoot } from "react-dom/client";

import { ThemeProvider } from "./app/providers/theme";
import { LanguageProvider } from "./app/providers/i18n/";

createRoot(document.getElementById("root")!).render(
  <LanguageProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </LanguageProvider>
);
