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
    const categories = ["Women", "Dresses", "T-shirts"];
    for (let category of categories) {
      cy.xpath(`//a[text()='${category}']`).should("be.visible");
    }
  });

  it("Verify left panel image slider", () => {
    cy.get(".homeslider-container").not(".bx-clone").should("be.visible");
    cy.get(".homeslider-container").not(".bx-clone").should("have.length", 3);
  });

  it("Verify nav-product tabs", () => {
    cy.xpath('//a[@class="homefeatured" and text()="Popular"]').should(
      "be.visible"
    );
    cy.xpath('//a[@class="blockbestsellers" and text()="Best Sellers"]').should(
      "be.visible"
    );
  });

  it("Verify active nav-product tab on select", () => {
    cy.xpath(
      '//a[@class="homefeatured" and text()="Popular"]/parent::li'
    ).should("have.class", "active");
    cy.get("#homefeatured").find("li").should("be.gt", 0);

    cy.xpath(
      '//a[@class="blockbestsellers" and text()="Best Sellers"]/parent::li'
    )
      .click()
      .then(() => {
        cy.xpath(
          '//a[@class="blockbestsellers" and text()="Best Sellers"]/parent::li'
        ).should("have.class", "active");
        cy.get("#blockbestsellers").find("li").should("be.gt", 0);
      });
  });

  it();
});
