
    
   # Part 2: Test Automation with Playwright
    Setup Instructions
      Install Node.js 
      Download visual studio
      
# Install Playwright:
    Run the following commands to set up Playwright with TypeScript:
     bash

     npm init playwright
     npm install
   
# command to run the automation test.
    npx playwright test (to run test automation
    npx playwright codegen (record the code using URL)

# How to Run Tests in Google Chrome
    Install Playwright with the necessary browser dependencies:

    npm install
    npx playwright install --with-deps
    Run the tests:
    

    npx playwright test 
        
# Open the HTML report to view test results:

    npx playwright show-report

# Project Structure:
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
