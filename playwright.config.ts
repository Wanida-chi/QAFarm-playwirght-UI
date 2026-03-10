import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  retries: 0,
  reporter: [['html', { open: 'always' }]],
  use: {
    baseURL: 'https://www.saucedemo.com/',
    headless: false,
    launchOptions: {
      slowMo: 1000,
    },
    screenshot: 'only-on-failure',
    video: 'on',
    trace: 'on-first-retry',
    testIdAttribute: 'data-test'
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ]
});