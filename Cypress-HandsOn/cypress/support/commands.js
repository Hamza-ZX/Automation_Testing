/// <reference types="cypress" />
/// <reference types="cypress-xpath" />



import './commands'
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false
})

