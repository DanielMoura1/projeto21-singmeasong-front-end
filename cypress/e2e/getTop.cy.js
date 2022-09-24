import { faker } from '@faker-js/faker';

describe('top', () => {
  const nome=faker.lorem.words(2)
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.get('#name').type(nome)
    cy.get('#link').type("https://www.youtube.com/watch?v=whROOdWCsI4&t=10s")
    cy.intercept("GET", "http://localhost:5000/recommendations").as("ae");
    cy.get("#ok").click();
    cy.wait("@ae");
    cy.intercept("GET", "/recommendations/top/10").as("ai");
    cy.get("#top").click();
    cy.wait("@ai");
    cy.url().should('equal', 'http://localhost:3000/top');
    cy.get("#like").click();
    cy.get("#like").click();
    cy.get("#deslike").click();
   

   
  })
})