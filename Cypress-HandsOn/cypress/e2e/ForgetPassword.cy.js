describe('Forget Password Module', ()=>{

    beforeEach(()=>{
        // Should navigate to forget password page
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode")
    })

    it('Cancel Foget Password', ()=>{
        cy.xpath("//button[@type='button']").click()
        cy.xpath("//img[@alt='company-branding']").should('be.visible')
    })

    it('Sucessful Request of Reseting Password', ()=>{
        cy.xpath("//input[@placeholder='Username']").type("Admin")
        cy.get(".oxd-text.oxd-text--h6.orangehrm-forgot-password-title").should('be.visible')

    })
    
})