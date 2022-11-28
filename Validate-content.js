describe('', () => {
    it('Validate Assertion Response', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').then((response) => {
            expect(response.body.abilities.ability.name).to.eq(response.body.abilities.ability.name)
        })
        
    });
});