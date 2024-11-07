describe('Bank Main Page', ()=>{

    it('Customer Login', ()=>{
        var FirstName = "Hamza ";
        var LastName = "Zafar";
        var postalCode = "00113";
        var Search = FirstName + LastName;

       // Let us Add a Customer Record from Manager End
        cy.visit("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login");
        cy.xpath("//button[normalize-space()='Bank Manager Login']").click();
        cy.xpath("//button[normalize-space()='Add Customer']").click();
        cy.xpath("//input[@placeholder='First Name']").type(FirstName);
        cy.xpath("//input[@placeholder='Last Name']").type(LastName);
        cy.xpath("//input[@placeholder='Post Code']").type(postalCode);
        cy.xpath("//button[@type='submit']").click();
        cy.wait(2000);
        // Let us Login from Customer-Client End
        cy.visit("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login");
        cy.xpath("//button[normalize-space()='Customer Login']").click();
        cy.xpath("//select[@id='userSelect']").select(Search);
        cy.xpath("//button[@type='submit']").should('be.visible');
    })

})