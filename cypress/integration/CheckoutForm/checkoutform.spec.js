beforeEach(() => {
  cy.visit('/');
});

describe('Checkout Form', () => {
  it('should redirect user if cart is empty if trying to visit checkout form', () => {
    cy.visit('/checkout');
    cy.location('pathname').should('equal', '/');
  });
  it('should not show modal if the form is not filled', () => {
    cy.addProduct('headphones', 'XX99 MARK II');
  });
});
