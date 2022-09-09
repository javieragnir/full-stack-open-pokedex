describe('Pokedex', function() {
  it.skip('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it.skip('pokemon page can be navigated to', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur').click()

    cy.contains('chlorophyll')
  })
})