describe('all episodes spec', () => {

  beforeEach(() => {
    cy.intercept('GET', 'https://api.sampleapis.com/simpsons/episodes', {
      status: 200,
      fixture: 'episodes.json'
    }).as('getEpisodes')
    cy.visit('http://localhost:3000')
  })

  it('should display "All Episodes" section and filter by season' , () => {
    cy.wait('@getEpisodes').then((interception) => {
     cy.get('.view-all-button').click()
     .url().should('eq', 'http://localhost:3000/allepisodes')
     .get('.container-header').contains('All Season 1 Episodes')
     cy.get('.filter-seasons').select('Season 3')
     .get('.container-header').contains('All Season 3 Episodes')
     .get('.episodes-wrapper').children().should('have.length', 24)
      .get('.episode-card')['first']().contains('Season: 3')
      .get('.episode-card')['last']().contains('Season: 3')
      cy.get('.barts-logo').click()
      .url().should('eq', 'http://localhost:3000/')
      .get('.container-header').contains('Top Rated Episodes')
    })
  })

})