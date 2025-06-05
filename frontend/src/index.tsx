import App from "./app/App.tsx";
import {createRoot} from "react-dom/client";

import {ThemeProvider} from "./app/providers/theme";
import {LanguageProvider} from "./app/providers/i18n/";
import {BrowserRouter} from "react-router-dom";

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <LanguageProvider>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </LanguageProvider>
    </BrowserRouter>
);
