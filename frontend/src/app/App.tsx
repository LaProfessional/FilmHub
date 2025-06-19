import "@/shared/config/i18n/i18n.ts";
import "@/shared/styles/base/reset.scss";

import { AppRouter } from "@/app/providers/router";
/* import { RootLayout } from "@/shared/layout"; */

const App = () => {
    return (
        <AppRouter/>
    );
};
/*         <RootLayout>
            
        </RootLayout> */
export default App;
