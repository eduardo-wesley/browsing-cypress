describe('Teste de api AluraPic', () => {
    it('passes', () => {
      cy.visit('http://localhost:4200/#/home')

      cy.request({
        method:'POST',
        url:'http://localhost:3000/user/login',
        body:Cypress.env()
      })
      .then((res)=>{
        expect(res.status).to.be.equal(200)
        expect(res.body).is.not.empty
        expect(res.body).to.have.property('id')
        expect(res.body.id).to.be.equal(3)
      })
  
    })
  })