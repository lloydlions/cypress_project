export default class homePage {

  navigateToHomePage(){
    cy.visit(Cypress.env('homepage'));
  }

}