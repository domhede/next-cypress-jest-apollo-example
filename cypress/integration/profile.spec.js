import '@testing-library/cypress/add-commands';

describe('Profile page', () => {
  it('should render profile page and display user details', () => {
    cy.visit('/profile');
    cy.findAllByText('Art Vandalay').should('exist');
  });
});
