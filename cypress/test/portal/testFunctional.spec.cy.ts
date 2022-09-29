import homePage from "cypress/pages/homePage";

const home = new homePage();
describe("Cypress exploration - www.automationpractice.com", () => {
  before(() => {
    home.navigateToHomePage();
  });

  it("Functional test", () => {
    home.clickNavProductCategory("Dresses");
  });
});
