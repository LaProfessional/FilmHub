import "@/shared/config/i18n/i18n.ts";
import "@/shared/styles/base/reset.scss";

import { AppRouter } from "@/app/providers/router";
import { RootLayout } from "@/shared/layout";

const App = () => {
  return (
    <RootLayout>
      <AppRouter />
    </RootLayout>
  );
};

export default App;
