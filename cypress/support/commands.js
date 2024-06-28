
Cypress.Commands.add('login', (name, password) => { 
    cy.get('[data-test="loginUserName"]').type(name);
    cy.get('[data-test="loginPassword"]').type(password);
    cy.contains('button','login').click();  
 })
