type productCategory = "Women" | "Dresses" | "T-shirts";
export default class homePage {
  navigateToHomePage() {
    cy.visit(Cypress.env("homepage"));
  }

  clickNavProductCategory(category: productCategory) {
    let categoryNum: number;
    switch (category) {
      case "Women":
        categoryNum = 1;
        break;
      case "Dresses":
        categoryNum = 2;
        break;
      case "T-shirts":
        categoryNum = 3;
        break;
    }

    cy.xpath(
      `//ul[@class="sf-menu clearfix menu-content sf-js-enabled sf-arrows"]/child::li[${categoryNum.toString()}]`
    )
      .realHover()
      .then(() => {
        cy.xpath(
          `//ul[@class="sf-menu clearfix menu-content sf-js-enabled sf-arrows"]/child::li[2]//a[text()="Evening Dresses"]`
        ).click();
      });
  }
}
