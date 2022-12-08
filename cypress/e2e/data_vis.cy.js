describe('App', function() {
  beforeEach(function() {
    cy.visit('http://localhost:3000')
  })

  it('page can be opened', function() {
    cy.contains('Visualized data query')
  })

  it('Basic search can be clicked', function() {
    cy.contains('Basic search').click()
  })

  it('Find by outlet can be opened', function() {
    cy.contains('Basic search').click()
    cy.contains('Find by the outlet').click()
  })

  it('search for Aamulehti will work', function() {
    cy.contains('Basic search').click()
    cy.contains('Find by the outlet').click()
    cy.get('#outletname').type('aamulehti')
    cy.get('#submitoutlet').click()
    cy.contains('Results for Aamulehti')
  })
  
})

