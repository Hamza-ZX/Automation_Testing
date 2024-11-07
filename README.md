# Automation-Hands-On Testing

In this repository, you will find a comprehensive collection of automation test scripts using **Cypress**. These scripts ensure various types of testing:

- **Component Testing**
- **End-to-End (E2E) Testing**
- **Data-Driven Testing**

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
     In order to run your test cases in headless mode with no GUI you can write the following command:
     ```bash
        npx cypress run
     ```
     And to view your test scripts in full headed GUI mode you can simply type this on your terminal
     ```bash
        npx cypress run --headed
     ```


