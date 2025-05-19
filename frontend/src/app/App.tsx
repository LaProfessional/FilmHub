import "../shared/config/i18n/i18n.ts";
import "../shared/styles/base/reset.scss";

import Header from "../widgets/header/ui/Header.tsx";

import ThemeProvider from "./providers/ThemeProvider.tsx";
import LanguageProvider from "./providers/LanguageProvider.tsx";

const App = () => {

    return (
        <LanguageProvider>
            <ThemeProvider>
                <Header/>
            </ThemeProvider>
        </LanguageProvider>
    );
};

export default App;