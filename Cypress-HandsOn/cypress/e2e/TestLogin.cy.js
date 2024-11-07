describe('Test Login Page', ()=>{

   it('Verify Login', ()=>{

    cy.fixture('TestLoginData.json', (data)=>{
    data.forEach((udata) => {
        cy.visit("https://practicetestautomation.com/practice-test-login/")
        cy.xpath("//input[@id='username']").type(udata.username)
        cy.xpath("//input[@id='password']").type(udata.password)
        cy.xpath("//button[@id='submit']").click()
        if(udata.username == "student" && udata.password == "Password123"){
            cy.xpath("//strong[contains(text(),'Congratulations student. You successfully logged i')]").should('contain', udata.EOP)
        }
        else{
            cy.xpath("//h2[normalize-space()='Test login']").should('contain', udata.EOP)
        }
    });
    







    })

   })

})