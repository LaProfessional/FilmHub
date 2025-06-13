import "@/shared/config/i18n/i18n.ts";
import "@/shared/styles/base/reset.scss";
import { Suspense } from "react";
import AppRouter from "@/app/router";

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AppRouter />
    </Suspense>
  );
};

export default App;
