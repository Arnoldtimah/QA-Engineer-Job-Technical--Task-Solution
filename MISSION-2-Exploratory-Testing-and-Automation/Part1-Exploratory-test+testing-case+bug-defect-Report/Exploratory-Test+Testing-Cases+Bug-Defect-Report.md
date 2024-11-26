Test Plan – Designing Test Cases
 -Test Cases
 Mandatory Fields
   First Name:
    Verify the field accepts only alphabetical characters.
    Verify that leaving the field empty triggers a validation error.
    Verify input with special characters or numbers triggers a validation error.
  Last Name:
    Verify the field accepts only alphabetical characters.
    Verify that leaving the field empty triggers a validation error.
    Verify input with special characters or numbers triggers a validation error.
  Email:
    Verify the field accepts valid email addresses.
    Verify invalid email formats trigger a validation error (e.g., missing @ or domain).
    Verify that leaving the field empty triggers a validation error.
  Password:
    Verify the field accepts alphanumeric characters and symbols.
    Verify password length restrictions (e.g., minimum length of 8 characters).
    Verify that leaving the field empty triggers a validation error.
  Confirm Password:
    Verify that the field matches the password field.
    Verify that leaving the field empty triggers a validation error.
    Verify that mismatched passwords trigger a validation error.

 Optional Fields
   Gender:
    Verify the user can select one of the available options.
    Verify no validation error occurs if left unselected.
 Date of Birth:
    Verify the field accepts a valid date in the format YYYY-MM-DD.
    Verify invalid date formats trigger a validation error.
    Verify no validation error occurs if left empty.
 Phone Number:
    Verify the field accepts only numeric characters.
    Verify the field enforces a maximum length of 10 digits.
    Verify no validation error occurs if left empty.
 Address:
    Verify the field accepts alphanumeric characters, spaces, and symbols.
    Verify no validation error occurs if left empty.
 LinkedIn URL:
    Verify the field accepts valid LinkedIn profile URLs.
    Verify invalid URLs trigger a validation error.
    Verify no validation error occurs if left empty.
 GitHub URL:
    Verify the field accepts valid GitHub profile URLs.
    Verify invalid URLs trigger a validation error.
    Verify no validation error occurs if left empty.