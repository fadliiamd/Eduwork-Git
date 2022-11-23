const URL = 'http://zero.webappsecurity.com/'
const SEARCH = '#searchTerm'
const ENTERR = 'h2'

class SearcPage{
    static visit() {
        cy.visit(URL)
    }
    static fillSearch() {
        cy.get(SEARCH).type('bank {enter')
    }
    static searchResult() {
        cy.get(ENTERR).contains('Search Results:')
    }
}

export default SearchPage