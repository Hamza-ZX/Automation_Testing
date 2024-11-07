describe('BugBugSignUp', ()=>{

    it('VerifySignUp', ()=>{
        cy.fixture('bugbugData.json').then((data)=> {
        data.forEach((udata) => {
            cy.visit("https://app.bugbug.io/sign-up/")
            cy.xpath("//input[@placeholder='E-mail']").type(udata.Email)
            cy.xpath("//input[@placeholder='Password']").type(udata.Password)
            cy.xpath("//input[@placeholder='Confirm password']").type(udata.CPassword)
            cy.xpath("//input[@name='isAllowedEmailMarketing']").check()
            cy.xpath("//button[@type='submit']").click()
            if(udata.Email == "hamza1234@gmail.com"){
                cy.xpath("//h1[@class='sc-iMTnTL sc-bdlOLf bFOrCq iMgxJT']").should('contain', 'Verify')
            }
            else{
                cy.xpath("//p[@class='sc-jaXxmE sc-fSjEuY VyRaL fLVjRs']").should('contain', 'account')
            }
           
         });            

        })
    })
})