/// <reference types="cypress" />

describe('Working with inputs', () => {
    it('Visit the website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url('').should('include', 'login.html')
    });
    it('Should fill username', () => {
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')
    });

    it('Should fill password', () => {
        cy.get('#user_password').clear()
        cy.get('#user_password').type('password')
    });

    it('Should fill checkbox', () => {
        cy.get('#user_remember_me').click()
        cy.get('#user_remember_me').type('checkbox')
    });

    it('Should try to login', () => {
        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password
            cy.login(username, password)
            
            // cy.get('.onlineBankingMenu').contains('Online Banking').click()
            cy.visit('http://zero.webappsecurity.com/bank/pay-bills.html')
            
            cy.get('input[name="amount"]').clear()
            cy.get('input[name="amount"]').type(10000)

            cy.get('input[name="date"]').clear()
            cy.get('input[name="date"]').type('2022-11-01')

            cy.get('input[name="description"]').clear({ force: true })
            cy.get('input[name="description"]').type('Bayar')

            cy.get('#pay_saved_payees').click()
        });
    });
// cy.get('#pay_saved_payees').click()
    // it('Fil the form', () => {
       // cy.get('#sp_payee').click()
       // cy.get('input[name="payee"]').contains('sprint')
    // });
    // it('visit payment form', () => {
    //     cy.visit('http://zero.webappsecurity.com/bank/pay-bills.html')
    // })
});