describe('Validate Header', () => {
    it('Validate Header', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type')
            .should('include', 'application/json; charset=utf-8')
    });
    it('Validate Header', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').then((response) => {
            expect(response.status).equal(200)
            expect(response.body.name).to.eq(response.body.name)
            expect(response.body.abilities).to.eq(response.body.abilities)
        })
        
    });
});