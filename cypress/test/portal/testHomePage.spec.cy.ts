import homePage from '../../pages/homePage'

describe('Cypress exploration', () => {

  it('test one', () => {
    const home = new homePage();
    home.navigateToHomePage()
  })
})