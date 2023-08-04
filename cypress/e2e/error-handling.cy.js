describe('error handling spec', () => {

  const interceptData = (status) => {
    cy.intercept('GET', 'https://api.sampleapis.com/simpsons/episodes', {
      statusCode: status,
      fixture: 'episodes.json'
    }).as('interceptError')
    cy.visit('http://localhost:3000')
  };

  it('shoud display a message for a 500 error', () => {
    interceptData(500)
    cy.wait('@interceptError').then((intercept) => {
      cy.get('h2').contains('Error: 500 -- Please try again!')
    })
  }
  )

  it('shoud display a message for a 404 error', () => {
    interceptData(404)
    cy.wait('@interceptError').then((intercept) => {
      cy.get('h2').contains('Error: 404 -- Please try again!')
    })
  })

})