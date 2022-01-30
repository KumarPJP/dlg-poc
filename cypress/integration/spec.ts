describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('HAVE A QUESTION? WE CAN HELP')
    cy.contains('What vehicles are covered?')
  })

})




