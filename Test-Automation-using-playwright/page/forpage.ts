import { Page } from '@playwright/test';

export class FormPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Selectors for form fields
  firstName = () => this.page.locator('input[name="firstName"]');
  lastName = () => this.page.locator('input[name="lastName"]');
  email = () => this.page.locator('input[name="email"]');
  password = () => this.page.locator('input[name="password"]');
  confirmPassword = () => this.page.locator('input[name="confirmPassword"]');
  gender = (value: string) => this.page.locator(`input[value="${value}"]`);
  dob = () => this.page.locator('input[name="dob"]');
  phoneNumber = () => this.page.locator('input[name="phone"]');
  address = () => this.page.locator('textarea[name="address"]');
  linkedIn = () => this.page.locator('input[name="linkedin"]');
  github = () => this.page.locator('input[name="github"]');
  submitButton = () => this.page.locator('button[type="submit"]');

  // Actions
  async fillMandatoryFields(firstName: string, lastName: string, email: string, password: string, confirmPassword: string) {
    await this.firstName().fill(firstName);
    await this.lastName().fill(lastName);
    await this.email().fill(email);
    await this.password().fill(password);
    await this.confirmPassword().fill(confirmPassword);
  }

  async fillOptionalFields({ gender, dob, phone, address, linkedin, github }: any) {
    if (gender) await this.gender(gender).check();
    if (dob) await this.dob().fill(dob);
    if (phone) await this.phoneNumber().fill(phone);
    if (address) await this.address().fill(address);
    if (linkedin) await this.linkedIn().fill(linkedin);
    if (github) await this.github().fill(github);
  }

  async submitForm() {
    await this.submitButton().click();
  }
}