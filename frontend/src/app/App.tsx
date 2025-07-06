// App.tsx - Using only SettingsProvider
import "@/shared/config/i18n";

import { LanguageProvider } from "@/app/providers/i18n";
import { AppRouter } from "./router";
import { SettingsProvider } from "@/shared/theme/SettingsProvider";

import "./index.css";

export function App() {
  return (
    <LanguageProvider>
      <SettingsProvider defaultSettings={false}>
        <AppRouter />
      </SettingsProvider>
    </LanguageProvider>
  );
}

// Or using only ThemeProvider
// export function App() {
//   return (
//     <LanguageProvider>
//       <ThemeProvider defaultTheme="system">
//         <AppRouter />
//       </ThemeProvider>
//     </LanguageProvider>
//   );
// }
