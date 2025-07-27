describe('Redirect to login page and logout', () => {
  it('it should redirect user to login page after fill input username and logout', () => {
    cy.visit('/login');
    cy.get('[data-username-input="username-input"]').type('Marcelo');
    cy.contains('Entrar').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/`);
    cy.get('[data-logout-button="logout-button"]').click();
  });
});