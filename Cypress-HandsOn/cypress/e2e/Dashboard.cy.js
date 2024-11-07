describe('Side Panel', ()=>{
    beforeEach(()=>{
        //login to dashboard
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")    
    cy.xpath("//input[@placeholder='Username']").type("Admin")
    cy.xpath("//input[@placeholder='Password']").type("admin123")
    cy.xpath("//button[@type='submit']").click()
    })

    it('Side Panel Visibility', () =>{
        cy.xpath("//nav[@aria-label='Sidepanel']").should('exist').and('be.visible')
    })

    it('Searching an Element: Dashboard', () =>{
        cy.xpath("//input[@placeholder='Search']").type("Dashboard")
        cy.xpath("//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'][normalize-space()='Dashboard']").should('be.visible')
    })

    it('Clicking on Admin', () =>{
        cy.xpath("//li[1]//a[1]//span[1]").click()
        cy.xpath("//button[normalize-space()='Add']").should('be.visible')
        
    })

    it('Clicking on Directory', () =>{
        cy.xpath("//span[normalize-space()='Directory']").click()
        cy.xpath("//button[@type='submit']").should('be.visible')
    })
    
    it('Clicking on Profile', ()=> {
        cy.xpath("//i[@class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']").click()
        
    })

    it('Clicking on Pending Review', ()=> {
        cy.xpath("//p[normalize-space()='(1) Pending Self Review']").click()
        
    })
    
    it('Clicking Assigning Leave', ()=>{
        cy.xpath("//button[@title='Assign Leave']//*[name()='svg']").click()
    })
})