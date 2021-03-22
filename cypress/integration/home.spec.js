import '@testing-library/cypress/add-commands';

describe('Home page', () => {
  it('should visit home page and display hello world', () => {
    cy.visit('/');
    cy.findAllByText('Hello Jerry').should('exist');
    cy.findAllByText('Hello World').should('exist');
  });
  it('should display profile button and redirect the user the profile page', () => {
    cy.findByRole('button', { name: /Profile/i }).click();
    cy.location('pathname').should('match', /\/profile/);
  });
});
