

describe("Cadastro", () => {
    it("Cadastrar uma entrada", () => {
        cy.visit("https://www.grocerycrud.com/v1.x/demo/bootstrap_theme")

        criarCadastro ()
    })

    it("Excluir uma entrada", () => {
        cy.visit("https://www.grocerycrud.com/v1.x/demo/bootstrap_theme")
        
        excluirCadastro ()

    });
  
})

function criarCadastro (){
    cy.get('#switch-version-select').select('Bootstrap V4 Theme')
    cy.contains("Add Customer").click()
    cy.contains('Name').should('be.visible')
    cy.get('#field-customerName').type('James')
    cy.get('#field-contactLastName').type('Dean')
    cy.get('#field-contactFirstName').type('Joseph')
    cy.get('#field-phone').type('(99)9 9999-9999')
    cy.get('#field-addressLine1').type('Rua C, 25')
    cy.get('#field-city').type('Salvador')
    cy.get('#field-state').type('Bahia')
    cy.get('#field-postalCode').type('00000-000')
    cy.get('#field-country').type('Brasil')
    cy.get('#field_salesRepEmployeeNumber_chosen').click()
    cy.get('.chosen-results').contains('Bondur').click()
    //cy.get('#field-salesRepEmployeeNumber').click({ force: true })
    //cy.get('.chosen-results').contains('Bott').click({ force: true })
    //cy.get('#field-salesRepEmployeeNumber_chosen .chosen-single span').should('have.text', 'Bott')
    //cy.get('select[name="salesRepEmployeeNumber"]').select('Bott')
    cy.get('#form-button-save').click()
    cy.wait(2000)
    cy.contains('Your data has been successfully stored into the database.').should('be.visible')
    cy.wait(2000)
    cy.task('closeBrowser')
}

function excluirCadastro (){
    cy.get('#switch-version-select').select('Bootstrap V4 Theme')
    cy.get('input[name="customerName"]').type('James')
    cy.contains('James', { timeout: 10000 }).should('be.visible').then(($element) => {
        if ($element.is(':visible')) {
            cy.get("tbody tr td input.select-row").click({multiple: true, force: true}).then($items => {
                if ($items.length > 1) {
                    cy.contains('span.text-danger', 'Delete').click({ force: true })
                    cy.contains('Are you sure that you want to delete those').should('be.visible')
                    cy.get('.btn.btn-danger.delete-multiple-confirmation-button', { timeout: 10000 }).should('be.visible').click()
                    cy.get('.btn.btn-danger.delete-multiple-confirmation-button').click({ force: true })
                    cy.contains('Your data has been successfully deleted from the database.').should('be.visible')
                } else if ($items.length === 1) {
                    cy.contains('span.text-danger', 'Delete').click({ force: true })
                    cy.contains('Are you sure that you want to delete this 1 item?').should('be.visible')
                    cy.get('.btn.btn-danger.delete-multiple-confirmation-button', { timeout: 10000 }).should('be.visible').click()
                    cy.get('.btn.btn-danger.delete-multiple-confirmation-button').click({ force: true })
                    cy.contains('Your data has been successfully deleted from the database.').should('be.visible')
                } 
              })
        } else {
          cy.log('James não encontrado');
        }
      })
    //cy.contains('Are you sure that you want to delete this record?').should('be.visible')
    //cy.get('button.delete-confirmation-button').click({force: true})
    cy.task('closeBrowser')
}

