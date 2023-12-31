describe('top rated episodes spec', () => {

  beforeEach(() => {
    cy.intercept('GET', 'https://api.sampleapis.com/simpsons/episodes', {
      status: 200,
      fixture: 'episodes.json'
    }).as('getEpisodes')
    cy.visit('http://localhost:3000')
  })

  it('should display Top Rated Episodes section which includes 3 unique episodes with ratings greater than or equal to 8', () => {
    cy.wait('@getEpisodes').then((interception) => {
      cy.get('h2').contains('Top Rated Episodes')
      .get('.episodes-wrapper').find('.episode-card').should('have.length', 3)
      cy.get('.episodes-wrapper').each(() => {
        cy.get('.episode-rating').invoke('text').then((text) => {
          let ratingNumber = text.split(' ')[1]
          return ratingNumber
        }).then(parseFloat).should('be.gte', 8)
      })
    })
  })

  it('should display more random episodes with ratings greater than or equal to 8 after the Reroll Episodes button is clicked', () => {
    cy.wait('@getEpisodes').then((interception) => {
      let episodeName1, episodeName2
      cy.get('.episode-name')['first']().then((episode) => {
        episodeName1 = episode.text()
        cy.get('.reroll-button').click()
        cy.get('.episode-name')['first']().should('not.equal', episodeName1)
        cy.get('.episodes-wrapper').each(() => {
          cy.get('.episode-rating').invoke('text').then((text) => {
            let ratingNumber = text.split(' ')[1]
            return ratingNumber
          }).then(parseFloat).should('be.gte', 8)
        })
      })
      cy.get('.episode-name')['last']().then((episode) => {
        episodeName2 = episode.text()
        cy.get('.reroll-button').click()
        cy.get('.episode-name')['last']().should('not.equal', episodeName2)
        cy.get('.episodes-wrapper').each(() => {
          cy.get('.episode-rating').invoke('text').then((text) => {
            let ratingNumber = text.split(' ')[1]
            return ratingNumber
          }).then(parseFloat).should('be.gte', 8)
        })
      })
    })
  })

})