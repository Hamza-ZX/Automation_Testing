describe('Configure Leave Holidays', ()=>{

    beforeEach(()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewHolidayList")
        cy.xpath("//input[@placeholder='Username']").type("Admin")
        cy.xpath("//input[@placeholder='Password']").type("admin123")
        cy.xpath("//button[@type='submit']").click()
        cy.xpath("//a[@class='oxd-main-menu-item active']").click()
        cy.xpath("//header[@class='oxd-topbar']//li[5]").click()
        cy.xpath("//a[normalize-space()='Holidays']").click()
    })

    it('Sucessful Searching Date' , ()=>{
        
       cy.xpath("//div[@class='oxd-grid-4 orangehrm-full-width-grid']//div[1]//div[1]//div[2]//div[1]//div[1]//input[1]").eq(0).type("2024-01-01").type('{enter}') 
       cy.wait(2000)
       cy.get("input[class='oxd-input oxd-input--focus']").type("2024-01-01").type('{enter}')
       cy.wait(3000)
       cy.xpath("//button[@type='submit']").click()
       
    })
})