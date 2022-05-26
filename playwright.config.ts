import { devices } from "@playwright/test";

const config = {
  testDir: ".",
  testMatch: "**/*test.ts",
  use: {
    // headless: false,
    // launchOptions: {
    //   slowMo: 500,
    // },
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
