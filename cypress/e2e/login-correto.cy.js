describe('fazendo login com usuario cadastrado', () => {
    it('passes', () => {
      cy.visit('http://localhost:4200/#/home')
  
      cy.login('eduardo123', '12345678');
    })
  })