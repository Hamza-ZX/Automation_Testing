describe('Searching Admin', ()=>{

    it('verify Login', ()=>{
    cy.fixture('SearchData.json').then((data)=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.xpath("//input[@placeholder='Username']").type("Admin")
        cy.xpath("//input[@placeholder='Password']").type("admin123")
        cy.xpath("//button[@type='submit']").click()    
        
    data.forEach((udata) => {
        cy.xpath("//li[1]//a[1]//span[1]").click()
        cy.xpath("//div[@class='oxd-input-group oxd-input-field-bottom-space']//div//input[@class='oxd-input oxd-input--active']").type(udata.username)
        cy.xpath("//button[@type='submit']").click()
        
        if(udata.username == "Admin"){
            cy.xpath("//span[normalize-space()='(1) Record Found']").should('contain',udata.EOP)
        }
        else{
            cy.xpath("//span[normalize-space()='No Records Found']").should('contain',udata.EOP)
        }
    }); 
  })
 })
})