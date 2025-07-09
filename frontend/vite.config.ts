/// <reference types="vitest/config" />

import react from "@vitejs/plugin-react";
import svgr from "@svgr/rollup";
import tailwind from "@tailwindcss/vite";
import { defineConfig } from "vite";

const SRC_PATH = new URL("./src/", import.meta.url).pathname;

export default defineConfig({
  plugins: [react(), svgr(), tailwind()],
  resolve: {
    alias: {
      "@/": SRC_PATH,
    },
  },
  test: {
    projects: [
      {
        test: {
          include: ["src/**/*.unit.test.ts"],
          name: "unit",
          environment: "node",
        },
      },
      {
        test: {
          include: ["src/**/*.browser.test.tsx"],
          alias: {
            "@/": SRC_PATH,
          },
          name: "browser",
          browser: {
            enabled: true,
            provider: "playwright",
            instances: [{ browser: "chromium" }],
          },
        },
      },
    ],
  },
});
