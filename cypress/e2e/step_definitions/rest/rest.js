import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I make a GET request to {string}', (url) => {
    cy.request({
        method: 'GET',
        url: url,
        failOnStatusCode: false,
    }).as('apiResponse');
});

Given('I make a POST request to {string} with the following data:', (url, dataTable) => {
    const data = dataTable.rows().reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
    }, {});

    cy.request({
        method: 'POST',
        url: url,
        body: data,
    }).as('apiResponse');
});

Given('I make a PUT request to {string} with the following data:', (url, dataTable) => {
    const data = dataTable.rowsHash();
    cy.request({
        method: 'PUT',
        url: url,
        body: data,
    }).as('apiResponse');
});

Given('I make a DELETE request to {string}', (url) => {
    cy.request({
        method: 'DELETE',
        url: url,
    }).as('apiResponse');
});

Then('the response status should be {int}', (statusCode) => {
    cy.get('@apiResponse').then((res) => {
        expect(res.status).to.equal(statusCode);
    });
});