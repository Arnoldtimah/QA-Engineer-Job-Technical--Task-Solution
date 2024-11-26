import { chromium, test } from "@playwright/test"


test("form page test", async() => {

  // opening the project with googlechrome browser
  const browser = await chromium.launch({
    headless: false // Run tests in visible mode
  });
  const context = await browser.newContext(); 
  const page = await context.newPage(); // opening a new browser page

 // opening the link for the PageForm that has the label
  await page.goto("https://playwright-lab.web.app/")

  // mandatry form label to be fill before pageForm submittion
    //  filling first_name mandatory label
  await page.getByLabel('First Name (mandatory):').fill('Arnold');
   //  filling first_name mandatory label
  await page.getByLabel('Last Name (mandatory):').fill('Timah');
   //  filling email address mandatory label
  await page.getByPlaceholder('john.smith@example.com').fill('bofme55@gmail.com');
  //  filling password mandatory label
  await page.getByLabel('Password (mandatory):', { exact: true }).fill('Arnold25@');
  //  filling confirm-password mandatory label
  await page.getByLabel('Confirm Password (mandatory):').fill('Arnold25@'); 

  // optional form label to be fill
    // check if its male optional
  await page.getByLabel('Male', { exact: true }).check();
    // fill date of birth optional
  await page.getByLabel('Date of Birth (optional):').fill('1999-10-11');
   // input phone number section
  await page.getByPlaceholder('1234567890').fill('678912356');
   // fill street address
  await page.getByLabel('Address (optional):').fill('molyko');
   // fill linedln profile url
  await page.getByLabel('LinkedIn URL (optional):').fill('https://cm.linkedin.com/in/arnold-timah-fomunoh-224a45319');
    // fill Github link url 
  await page.getByLabel('GitHub URL (optional):').fill('https://github.com/Arnoldtimah/');


  // click submit button automatically
  await page.getByRole('button', { name: 'submit' }).click();
  // waiting for page to load
  await page.waitForLoadState();


})
