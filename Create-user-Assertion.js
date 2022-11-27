describe('Create users', () => {
    it('Add a new user', () => {
        var user = {
            "name": 'Fadli Amada',
            "job": 'QA Automation'
        }
        cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
            expect(response.status).equal(201)
            expect(response.body.name).to.eq(user.name)
        }).as('post')
        cy.get('@post').its('status').should('equal', 201)
        expect('@post').to.deep.equal('@post')
        expect('@post').to.deep.equal('@post')
        // expect(obj).to.deep.equal({ name: 'Fadli Amada' })
    //     cy.get('@post').should('deep.equal', {
    //         name: 'Fadli Amada'
    //     });
    
    });
});