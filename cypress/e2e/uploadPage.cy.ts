/// <reference types="cypress" />
import "cypress-file-upload";

describe("Element upload", () => {
  const containerView = '[data-test-id="container-view"]';
  const containerInput = '[data-test-id="container-input"]';

  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("Should show upload component", () => {
    cy.contains("Organization Logo");
    cy.contains("Drop the image here or click to browse.");
  });
  it("Should return error message when upload archive format not acepted", () => {
    cy.get("input[type=file]").attachFile("logo.pdf");
    cy.get(containerView).should("exist");
    cy.get(containerInput).should("not.exist");

    cy.contains("Sorry, the upload failed.");

    cy.get('[data-test-id="button-close"]').should("exist");
    cy.get('[data-test-id="image-rounded"]').should("not.exist");

    cy.get('[data-test-id="try-again"]').should("exist").click();
    cy.get(containerInput).should("exist");
    cy.get(containerView).should("not.exist");
  });
  it("Should return component upload when click close component", () => {
    cy.get("input[type=file]").attachFile("logo.png");
    cy.get(containerInput).should("not.exist");

    cy.get('[data-test-id="button-close"]').should("exist").click();
    cy.get(containerInput).should("exist");
  });
  it("Should return component avatar-view when upload image format accept", () => {
    cy.get("input[type=file]").attachFile("logo.png");

    cy.get('[type="range"]')
      .first()
      .invoke("val", 125)
      .trigger("input", { data: "125" });

    cy.contains("CROP");
    cy.get('[data-test-id="done-button"]').should("exist").click();

    cy.get(containerInput).should("exist");
    cy.get('[data-test-id="image-rounded"]')
      .should("exist")
      .should("have.css", "width", "187.5px");
  });
});
