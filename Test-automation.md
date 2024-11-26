Part 2: Test Automation with Playwright
     Setup Instructions
      Install Node.js 
      Download visual studio
      
     Install Playwright:
    Run the following commands to set up Playwright with TypeScript:
     bash

   npm init playwright
   npm install

   command to run the automation test.
    npx playwright test (to run the test)

 Project Structure:
  Use the Page Object Model (POM) for maintainable and reusable code:
  stylus

   stylus
   ├── tests
   │   ├── formpage.test.ts & record.test.ts  # Test cases for the form
   ├── pages
   │   ├── forpage.ts        # Page object for the form
   ├── utils
   │   ├── helpers.ts         # Helper functions
   ├── playwright.config.ts   # Playwright configuration
   ├── README.md              # Instructions
