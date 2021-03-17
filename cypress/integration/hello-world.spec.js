import '@testing-library/cypress/add-commands';

describe('Hello world', () => {
  it('Should visit home page', () => {
    cy.visit('/');
    cy.findAllByText('Hello Jerry').should('exist');
    cy.findAllByText('Hello World').should('exist');
  });
});
