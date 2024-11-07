describe('Login Using Test Array', ()=>{

    it('Verify Login', ()=>{
       cy.fixture('TestData.json').then((data)=>{
       data.forEach((udata) => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.xpath("//input[@placeholder='Username']").type(udata.username)
        cy.xpath("//input[@placeholder='Password']").type(udata.password)
        cy.xpath("//button[@type='submit']").click()
        if(udata.username == "Admin" && udata.password == "admin123"){
            cy.xpath("//h6[@class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']").should('contain', udata.EOP)
            //for logging out
            cy.xpath("//i[@class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']").click()
            cy.xpath("//a[normalize-space()='Logout']").click()

        }
        else{
            cy.xpath("//p[normalize-space()='OrangeHRM OS 5.7']").should('contain', udata.EOP)
            //expect(udata).to.equal(udata.EOP)
        }


       });


       })
        

    })
})