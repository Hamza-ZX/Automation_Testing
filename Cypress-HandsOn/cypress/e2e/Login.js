describe('Login Page', () => {
  
  beforeEach(()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login") 
  })

  it('Sucessful login Page Load', ()=>{
    cy.title('body').should('eq','OrangeHRM')
   })

   it('Correct Title', ()=>{
    cy.get('body').should('be.visible')
   })

  it('Checks if Logo is present and visible', ()=>{
   cy.xpath("//img[@alt='company-branding']").should('exist').and('be.visible') 
  })

  it('Navigate to Forget Password page', ()=>{
    cy.xpath("//p[@class='oxd-text oxd-text--p orangehrm-login-forgot-header']").click()
    cy.xpath("//h6[@class='oxd-text oxd-text--h6 orangehrm-forgot-password-title']").should('be.visible')
  })

  it('Sucessful Login', ()=>{
    cy.xpath("//input[@placeholder='Username']").type("Admin")
    cy.xpath("//input[@placeholder='Password']").type("admin123")
    cy.xpath("//button[@type='submit']").click()
    cy.xpath("//div[@class='oxd-topbar-header-title']").should('be.visible')
  })
  
  //Negative Test Cases
  it('Unsucessful Login - Wrong Password', ()=>{
    cy.xpath("//input[@placeholder='Username']").type("Admin")
    cy.xpath("//input[@placeholder='Password']").type("admin")
    cy.xpath("//button[@type='submit']").click()
    cy.xpath("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']").should('be.visible')
  })

  it('Unsucessful Login - Wrong Username', ()=>{
    cy.xpath("//input[@placeholder='Username']").type("Adminfgdf")
    cy.xpath("//input[@placeholder='Password']").type("admin123")
    cy.xpath("//button[@type='submit']").click()
    cy.xpath("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']").should('be.visible')
  })

  it('Unsucessful Login - Empty Password & username', ()=>{
    cy.xpath("//button[@type='submit']").click()
    cy.xpath("//div[@class='orangehrm-login-form']//div[2]//div[1]//span[1]").should('be.visible')
  })

});




