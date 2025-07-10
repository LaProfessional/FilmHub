import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "@/app";

// eslint-disable-next-line
const app = document.querySelector("#app")!;
const root = createRoot(app);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
