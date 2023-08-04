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
      .url().should('eq','http://localhost:3000/episode/5')
      .get('.episode-season').contains('Season: 1')
      .get('.episode-number').contains('Episode: 5')
      .get('.episode-description').contains('Description: After being beaten up by Nelson Muntz one too many times, Bart turns to Grampa for help, and soon leads a rebellion against the school bully.')
      .get('.episode-rating').contains('Rating: 8.1')
      .get('.episode-airdate').contains('Original Airdate: 1990-02-04')
      .get('.img-container').find('img[alt="Bart the General thumbnail"]')
    })

     
  })

})