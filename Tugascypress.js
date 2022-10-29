describe('My First Test', () => {
    it('clicking "type" shows the right headings', () => {
        cy.visit('https://example.cypress.io')

        cy.pause()

        cy.contains('type').click()

        //should be on new URL which includes '/commands/actions'
        cy.url().should('include', '')

        //get an inpur, type into it and verify that the value has been updated
        cy.get('.action-email')
          .type('....')
          .should('have.value', '....')
    })
})