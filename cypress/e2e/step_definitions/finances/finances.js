import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'

Given('que eu estou na página de cadastro', () => {
    cy.visit("https://www.grocerycrud.com/v1.x/demo/bootstrap_theme");
  });
  
  When('eu preencho os dados do cliente', () => {
    cy.get('#switch-version-select').select('Bootstrap V4 Theme');
    cy.contains("Add Customer").click();
    cy.contains('Name').should('be.visible');
    cy.get('#field-customerName').type('James');
    cy.get('#field-contactLastName').type('Dean');
    cy.get('#field-contactFirstName').type('Joseph');
    cy.get('#field-phone').type('(99)9 9999-9999');
    cy.get('#field-addressLine1').type('Rua C, 25');
    cy.get('#field-city').type('Salvador');
    cy.get('#field-state').type('Bahia');
    cy.get('#field-postalCode').type('00000-000');
    cy.get('#field-country').type('Brasil');
    cy.get('#field_salesRepEmployeeNumber_chosen').click();
    cy.get('.chosen-results').contains('Bondur').click();
  });
  
  When('eu salvo o cadastro', () => {
    cy.get('#form-button-save').click();
    cy.wait(2000);
  });
  
  Then('eu vejo a mensagem de sucesso ao armazenar os dados', () => {
    cy.contains('Your data has been successfully stored into the database.').should('be.visible');
    cy.wait(2000);
  });
  
  When('eu pesquiso por um cliente existente', () => {
    cy.get('#switch-version-select').select('Bootstrap V4 Theme');
    cy.get('input[name="customerName"]').type('James');
    cy.contains('James', { timeout: 10000 }).should('be.visible');
  });
  
  When('eu excluo o cliente', () => {
    cy.get("tbody tr td input.select-row").click({ multiple: true, force: true }).then($items => {
      if ($items.length > 1) {
        cy.contains('span.text-danger', 'Delete').click({ force: true });
        cy.contains('Are you sure that you want to delete those').should('be.visible');
        cy.get('.btn.btn-danger.delete-multiple-confirmation-button', { timeout: 10000 }).click();
      } else if ($items.length === 1) {
        cy.contains('span.text-danger', 'Delete').click({ force: true });
        cy.contains('Are you sure that you want to delete this 1 item?').should('be.visible');
        cy.get('.btn.btn-danger.delete-multiple-confirmation-button', { timeout: 10000 }).click();
      }
    });
  });
  
  Then('eu vejo a mensagem de sucesso ao excluir os dados', () => {
    cy.contains('Your data has been successfully deleted from the database.').should('be.visible');
    cy.task('closeBrowser');
  });