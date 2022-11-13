/// <reference types="cypress" />

describe('Fixtures and statistic data', () => {
    before(() => {
        cy.visit('https://www.saucedemo.com/')
        cy.url('').should('include', '')
    });

    it('Fill the invalid username', () => {
        cy.get('#user-name').clear()
        cy.get('#user-name').type('username')
    });

    it('Fill the invalid password', () => {
        cy.get('#password').clear()
        cy.get('#password').type('password')
        cy.get('input[name="login-button"]').click()
        cy.get('.error-message-container')
    });

    it('Should try entire web features', () => {
        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password
            
            cy.get('#user-name').clear()
            cy.get('#user-name').type('standard_user')

            cy.get('input[name="password"]').clear()
            cy.get('input[name="password"]').type('secret_sauce')

            cy.get('input[name="login-button"]').click()

            cy.get('.title').should('have.text', 'Products')

            cy.get('#add-to-cart-sauce-labs-backpack').click()
            cy.get('.shopping_cart_link').should('contain.text', '1')

            cy.get('#remove-sauce-labs-backpack').click()
            cy.get('.shopping_cart_link').should('contain.text', '')

            cy.get('#react-burger-menu-btn').click()
            cy.get('#react-burger-menu-btn').should('have.text', 'Open Menu')

            // cy.get('#about_sidebar_link').click()
            // cy.get('#about_sidebar_link').should('have.text', 'About')

            cy.get('#react-burger-cross-btn').click()
            cy.get('#react-burger-cross-btn').should('have.text', 'Close Menu')


            cy.get('#item_4_title_link').click()
            cy.get('.inventory_details_name').should('have.text', 'Sauce Labs Backpack')

            cy.get('#back-to-products').click()

            cy.get('.select_container').click()
            cy.get('.active_option').should('contain.text', 'Name (A to Z)')
            cy.get('.select_container').click()
            cy.get('option').contains('Name (Z to A)')

            cy.get('.social_linkedin').click()
            cy.get('.social_facebook').click()
            cy.get('.social_twitter').click()
        
        })
    });
});