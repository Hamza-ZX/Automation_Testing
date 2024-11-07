describe('Testing Login Site', () => {

    it('Testing with Fixtures', () => {

        cy.fixture('PracticeSiteData.json').then((data) => {

            data.forEach((udata) => {

                cy.visit('https://practice.expandtesting.com/login');
                cy.xpath("//input[@id='username']").type(udata.username);
                cy.xpath("//input[@id='password']").type(udata.password);
                cy.xpath("//button[normalize-space()='Login']").click();

                if (udata.password != "SuperSecretPassword!" || udata.username != "practice") {
                    if (udata.username != "practice") {
                        cy.xpath("//b[normalize-space()='Your username is invalid!']").should('contain', udata.EOP);
                    }

                    if (udata.username == "practice" && udata.password != "SuperSecretPassword!") {
                        cy.xpath("//b[normalize-space()='Your password is invalid!']").should('contain', udata.EOP);
                    }
                } else {
                    cy.xpath("//b[normalize-space()='You logged into a secure area!']").should('contain', udata.EOP);
                    cy.xpath("//i[@class='icon-2x icon-signout']").click();
                }

            });

        }); // Closing bracket added here

    });

});
