# Automation-Hands-On Testing

In this repository, you will find a comprehensive collection of automation test scripts using **Cypress**. These scripts ensure various types of testing:

- **Component Testing**
- **End-to-End (E2E) Testing**
- **Data-Driven Testing**

## OrangeHRM Website - Test Automation Overview

Test automation for the **OrangeHRM website** includes various types of scripts to ensure comprehensive coverage. The testing process is broken down into three main categories:

### 1. UI Visibility Testing
Automated test scripts are written to validate critical UI elements and ensure they are visible and correctly rendered. This includes:

- **Logo visibility**: Verifying that the company logo appears as expected.
- **Website title**: Ensuring the correct title is displayed in the browser tab.
- **Other UI elements**: Checking for the visibility of key elements on the page.

### 2. End-to-End (E2E) Testing
Beyond UI visibility, **E2E tests** are automated to verify the complete workflow of the application. These tests include assertions to validate navigation functionality, ensuring that all pages are accessible and linked correctly.

- **Navigation tests**: Ensuring links and menus navigate to the correct pages.
- **User flows**: Automating tests for critical user actions and ensuring the application behaves as expected throughout.

### 3. Component Testing
**Component tests** focus on the interaction with various UI controls and form components, such as buttons, dropdowns, input fields, and checkboxes. This ensures that each individual element functions correctly, including:

- **Form submissions**: Verifying data submission and validation.
- **UI controls**: Ensuring buttons, sliders, and dropdowns work as expected.
  
By covering all these aspects—**UI visibility**, **E2E workflows**, and **component-level interactions**—the test automation suite ensures a robust and reliable user experience for the OrangeHRM website.

## Where to View Test Scripts

To view the test scripts:

1. Navigate to `Cypress-HandsOn/cypress/e2e/`.
2. Inside this directory, you will find a couple of `.cy.js` files containing different test cases based on various assertions.

Some of the scripts are **data-driven** and take test data from the fixtures located at:
- `Cypress-HandsOn/cypress/fixtures/`

## How to Execute the Tests on Your Local PC

Follow these steps to run the tests locally:

1. **Clone the Repository**:
   
   - Clone the repository to your local machine using the following command: 
      ```bash
      git clone https://github.com/your-repo/Automation-Hands-On.git

2. **Install Dependencies**:
   
   - Configure your IDE (VsCode)
     
   - Install Node and Node packages 
        ```bash
      npm install
        
   - Install Cypress
       ```bash
       npm install cypress --save-dev
       
3. **Execute your Test cases**
   
   - Through Cypress App
     ```bash
        npx cypress open
     ```
     
   - Through Commands (My Personal Preference)
     
     In order to run your test cases in headless mode with no GUI you can write the following command
     ```bash
        npx cypress run
     ```
     
     And to view your test scripts in full headed GUI mode you can simply type this on your terminal
     ```bash
        npx cypress run --headed
     ```

     To run a specific .cyJs test file, you can go with this
     
     ```bash
        npx cypress run --spec {fileRelativePath} --headed
        Example: npx cypress run --spec  cypress\e2e\HolidaysLeave.cy.js --headed
     ```


