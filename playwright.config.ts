import { devices } from "@playwright/test";

const config = {
  testDir: "dist/test",
  testMatch: "**/*test.js",
  use: {
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
};
export default config;
