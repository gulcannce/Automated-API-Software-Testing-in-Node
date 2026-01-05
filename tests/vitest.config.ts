/// <reference types="vitest" />
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    globals: true,
    include: [
      "tests/**/*.spec.ts",
    ],
    setupFiles: ["tests/setup/test-setup.ts"],
    globalSetup: ["tests/setup/global-setup.ts"],
    testTimeout: 60_000,
    hookTimeout: 60_000,
    reporters: ["default"],
  },
});