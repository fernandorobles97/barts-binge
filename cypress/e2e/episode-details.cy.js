describe('episode details spec', () => {

  beforeEach(() => {
    cy.intercept('GET', 'https://api.sampleapis.com/simpsons/episodes', {
      status: 200,
      fixture: 'episodes.json'
    }).as('getEpisodes')
    cy.visit('http://localhost:3000/allepisodes')
    cy.intercept('GET', 'https://api.sampleapis.com/simpsons/episodes/5', {
      statusCode: 200,
      fixture: 'episode.json' 
    })
  })

  it('should display a selected episodes details and update the URL with the episode ID', () => {
    cy.wait(['@getEpisodes']).then((intercept) => {
      cy.url().should('eq', 'http://localhost:3000/allepisodes')
      .get('.episode-card').contains('Bart the General').click()
      
    })

     
  })

})