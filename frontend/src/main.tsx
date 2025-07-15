import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "@/app";

// eslint-disable-next-line
const app = document.querySelector("#app")!;
const root = createRoot(app);

async function main() {
  if (import.meta.env.DEV) {
    const { worker } = await import("./__mocks__/browser");

    worker.start({
      onUnhandledRequest: "bypass",
    });
  }

  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

main();
