describe("Testing Login", ()=>{
    //Test Data:

    var data = [ 
    {
        "name": "Ali",
        "password": "classicalali",
        "EO": "Invalid credentials"
    },
    {
        "name": "Admin",
        "password": "classicalali",
        "EO": "Invalid credentials"
    },
    {
        "name": "Ali",
        "password": "admin123",
        "EO": "Invalid credentials"
    },
    {
        "name": "Admin",
        "password": "admin123",
        "EO": "Dashboard"
    }

];

    beforeEach(()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    })

    it('Test Case # 1', ()=>{
        for(var i = 0; i<data.length; i++){
        cy.xpath("//input[@placeholder='Username']").type(data[i].name);
        cy.xpath("//input[@placeholder='Password']").type(data[i].password);
        cy.xpath("//button[@type='submit']").click()
        if(data[i].name == "Admin" && data[i].password == "admin123"){
            cy.xpath("//h6[@class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']").should('contain', data[i].EO)
        }
        else{
           cy.xpath("//div[@class='oxd-alert-content oxd-alert-content--error']").should('contain', data[i].EO)
        }
      }
    })

})