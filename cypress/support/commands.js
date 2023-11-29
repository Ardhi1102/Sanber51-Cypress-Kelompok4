// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

<<<<<<< HEAD
<<<<<<< HEAD
Cypress.Commands.add('login', (username, passw) => {
    cy.get('#user-name').clear().type(username)
    cy.get('[data-test="password"]').clear().type(passw)
    cy.get('.submit-button.btn_action').click()
})

Cypress.Commands.add('verifyContain', (locator, value) => {
    cy.get(locator).should('contain',value)
=======
Cypress.Commands.add('login', (email, password) => {
    cy.get('#email').type(email)
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type(password)
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
>>>>>>> branch1
})
=======

>>>>>>> 9370cc523ca8eb8b7a38313c04333e85facf80e7
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })