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
    globalTeardown: ["tests/setup/global-teardown.ts"],
    testTimeout: 60_000,
    hookTimeout: 60_000,
    reporters: ["default"],
  },
});