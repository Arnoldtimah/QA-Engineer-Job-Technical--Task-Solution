import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // Directory where test files are located
  timeout: 30 * 1000, // Maximum time for a single test (30 seconds)
  expect: {
    timeout: 5000, // Maximum time for assertions (5 seconds)
  },
  
 
 // fullyParallel: true, // Enable parallel execution of tests
 // retries: 1, // Retry failed tests once
//  workers: 1, // Run tests serially (can increase for parallel execution in CI)
//  reporter: [['html', { open: 'never' }]], // HTML report generation
  use: {
   // trace: 'on-first-retry', // Collect trace only on the first retry
 //   headless: false, // Run tests in visible mode (set to true for headless)
    screenshot: "on", // Capture screenshots on test failure
    video: "on", // Retain video recordings on failure
  //  browserName: 'chromium', // Use Chromium-based browsers
  //  channel: 'chrome', // Specifically use Google Chrome
  },
 // projects: [
   // {
   //   name: 'Google Chrome',
   //   use: { ...devices['Desktop Chrome'] }, // Use the Desktop Chrome device profile
   // },
 // ],
});