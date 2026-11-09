import { defineConfig } from 'mobilewright';

export default defineConfig({
  testDir: './tests',
  timeout: 90_000,
  retries: process.env.CI ? 1 : 0,
  workers: 1,
  reporter: [['list'], ['html']],
  use: {
    actionTimeout: 10_000,
    appLaunchTimeout: 30_000,
    animations: 'off',
  },
  expect: {
    timeout: 10_000,
  },
  projects: [
    {
      name: 'android',
      use: {
        platform: 'android',
        deviceType: 'emulator',
        bundleId: 'com.swaglabsmobileapp',
        installApps: './apps/sauce-labs-sample.apk',
      },
    },
  ],
});
