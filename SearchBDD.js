/// <reference types="cypress"/>

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
Given('I access zero web app', () => {
    cy.visit('http://zero.webappsecurity.com/')
});
When('I enter bank keyword', () => {
    cy.get('#searchTerm').type('bank {enter}')
});
Then('I should be presented search results', () => {
    cy.get('h2').contains('Search Results:')
});