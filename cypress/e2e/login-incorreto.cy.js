describe('fazendo login com usuario cadastrado', () => {
    
    beforeEach(()=>{
        cy.visit('http://localhost:4200/#/home');
        cy.intercept('POST','http://localhost:3000/user/login',
        {statusCode:400}).as('stubPost')
    })
    
    it('passes', () => {
        cy.login('eduardoqw', '1234vfsgs');
        cy.wait('@stubPost')
    })
  })