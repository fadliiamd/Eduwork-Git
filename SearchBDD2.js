/// <reference types="cypress"/>

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import SearchPage from './searchPage'
Given('I access zero web app', () => {
    SearchPage.URL()
});
When('I enter bank keyword', () => {
    SearchPage.SEARCH()
});
Then('I should be presented search results', () => {
    SearchPage.ENTERR()
});