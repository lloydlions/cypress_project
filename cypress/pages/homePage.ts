type productCategory = "Women" | "Dresses" | "T-shirts";
export default class homePage {
  navigateToHomePage() {
    cy.visit(Cypress.env("homepage"));
  }

  clickNavProductCategory(category: productCategory) {
    cy.xpath(`//a[text()='${category}']`).realHover();
  }
}
