import "../shared/styles/base/reset.scss";

import Header from "../widgets/header/ui/Header.tsx";
import ThemeProvider from "./providers/ThemeProvider.tsx";

const App = () => {

    return (
        <ThemeProvider>
            <Header />
        </ThemeProvider>
    );
};

export default App;