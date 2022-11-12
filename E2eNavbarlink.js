/// <reference types="cypress" />

describe('Navbar test', function () {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    });
    it('Should display online banking content', () => {
        cy.contains('Online Banking').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').should('have.text', 'Online Banking')
    });
    it('Should display feedback content', () => {
        cy.contains('Feedback').click()
        cy.url().should('include', 'feedback.html')
        cy.get('#feedback-title').should('have.text', 'Feedback')
    });
    it('Should display homepage content', () => {
        cy.contains('Zero Bank').click()
        cy.url().should('include', 'index.html')
        cy.get('.brand').should('have.text', 'Zero Bank')
    });
});