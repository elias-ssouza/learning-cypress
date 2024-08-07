

describe("Cadastro", () => {
    it("Cadastrar uma Entrada", () => {
        cy.visit("https://www.grocerycrud.com/v1.x/demo/bootstrap_theme")

        cy.get('#switch-version-select').select('Bootstrap V4 Theme')
        cy.contains("Add Customer").click()
        cy.get('#field-customerName').type('James')
        cy.get('#field-customerName').should('have.value', 'James')
        cy.get('#field-contactLastName').type('Dean')
        cy.get('#field-contactFirstName').type('Joseph')
        cy.get('#field-phone').type('(99)9 9999-9999')
        cy.get('#field-addressLine1').type('Rua C, 25')
        cy.get('#field-city').type('Salvador')
        cy.get('#field-state').type('Bahia')
        cy.get('#field-postalCode').type('00000-000')
        cy.get('#field-country').type('Brasil')
        cy.get('#field_salesRepEmployeeNumber_chosen').click()
        cy.get('#field_salesRepEmployeeNumber_chosen .chosen-results li').contains('Bott').click()
        cy.get('#form-button-save').click()
        cy.contains('Your data has been successfully stored into the database.').should('be.visible')
        cy.task('closeBrowser')

        
    });
});