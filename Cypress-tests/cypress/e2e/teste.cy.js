describe('template spec', () => {

  beforeEach(() => {
    cy.visit('https://www.cantinhodasqas.com.br/sites-para-praticar')
  })
  it('verifica título', () => {
    cy.contains('span', 'Testes Manuais')
  })
})