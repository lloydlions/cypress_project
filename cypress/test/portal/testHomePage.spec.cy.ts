/// <reference types="cypress-xpath" />

import homePage from "../../pages/homePage";

describe("Cypress exploration - www.automationpractice.com", () => {
  before(() => {
    const home = new homePage();
    home.navigateToHomePage();
  });

  it("Verify webpage title", () => {
    cy.title().should("eq", "My Store");
  });

  it("Verify title banner is present", () => {
    cy.xpath("//div[@class='container']//img[@class='img-responsive']")
      .should("have.attr", "src")
      .should("include", "sale70.png");
  });

  it("Verify header", () => {
    const header = {
      login: "a.login",
      contact: "#contact-link",
      callUs: ".shop-phone",
      headerLogo: "#header_logo",
      shoppingCart: ".shopping_cart",
    };

    Object.keys(header).forEach((key) => {
      cy.get(header[key]).should("be.visible");
    });

    cy.xpath("//form[@id='searchbox']//input[@id='search_query_top']").should(
      "be.visible"
    );
    cy.xpath("//form[@id='searchbox']//button[@name='submit_search']").should(
      "be.visible"
    );
  });

  it("Verify menu-categories", () => {
    const categories = [
      'Women', 'Dresses', 'T-shirts'
    ]
    for(let category of categories){
      cy.xpath(`//a[text()='${category}']`).should(
      "be.visible"
      );
    }
  });

  it('Verify left panel image slider', ()=>{
    cy.get(".homeslider-container").not(".bx-clone").should("be.visible");


  })

});
