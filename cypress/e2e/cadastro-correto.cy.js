describe('Criando um usuario para o AluraPic', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/#/home')

    cy.contains('a','Register now').click();
    cy.get('[data-test="email"]').type('eduardowes.123@gmail.com');
    cy.get('[data-test="fullName"]').type('Wesley Eduardo');
    cy.get('[data-test="registerUserName"]').type('eduardo123');
    cy.get('[data-test="registerPassword"]').type('12345678');
    cy.contains('button','Register').click();  
  })
})