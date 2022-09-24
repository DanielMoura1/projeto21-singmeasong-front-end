import { faker } from '@faker-js/faker';

describe('empty spec', () => {
  const nome=faker.lorem.words(2)
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.get('#name').type(nome)
    cy.get('#link').type("https://www.youtube.com/watch?v=whROOdWCsI4&t=10s")
    cy.intercept("GET", "http://localhost:5000/recommendations").as("ae");
    cy.get("#ok").click();
    cy.wait("@ae");
    cy.get("#like").click();
    cy.get("#like").click();
    cy.get("#deslike").click();
   
    
    
  })
})