import homePage from '../../pages/homePage'

describe('Cypress exploration - www.automationpractice.com', () => {

  before(()=>{
    const home = new homePage();
    home.navigateToHomePage()
  })

  it('Verify webpage title', () => {
    cy.title().should('eq','My Store');
  })

  it('Verify title banner is present', ()=>{
    
  })
})