/// <reference types="cypress" />

beforeEach(() => {
  cy.visit('/headphones');
  cy.get('[data-test="cart"]').as('cartButton');
});

describe('adding items to cart', () => {
  it('should not be able to checkout if cart is empty', () => {
    cy.get('@cartButton').click();
    cy.get('[data-test="checkout-btn"]').click();
    cy.location('pathname').should('equal', '/headphones');
  });
  it('should add an item to the cart', () => {
    cy.findAllByText(/see product/i)
      .first()
      .click();
    cy.findByRole('button', { name: /add to cart/i }).click();
    cy.get('@cartButton').click();
    cy.get('[data-test="cart-item"]').should('have.length', 1);
  });
  it('should update the cart total by one when incrementing product on cart', () => {
    cy.findAllByText(/see product/i)
      .first()
      .click();
    cy.findByRole('button', { name: /add to cart/i }).click();
    cy.get('@cartButton').click();
    cy.findByRole('button', { name: '+' }).click();
    cy.get('[data-test="cart-size"]').should('contain', '2');
  });
  it('should update the product total when incremented on cart modal', () => {
    cy.findAllByText(/see product/i)
      .first()
      .click();
    cy.findByRole('button', { name: /add to cart/i }).click();
    cy.get('@cartButton').click();
    cy.findByRole('button', { name: '+' }).click();
    cy.get('[data-test="product-count"]').should('contain', '2');
  });
  it('should display empty cart when one item is left and is then decremented', () => {
    cy.findAllByText(/see product/i)
      .first()
      .click();
    cy.findByRole('button', { name: /add to cart/i }).click();
    cy.get('@cartButton').click();
    cy.findByRole('button', { name: '-' }).click();
    cy.get('[data-test="cart-item"]').should('not.exist');
  });
  it.only('should update the price when product is incremented', async () => {
    cy.findAllByText(/see product/i)
      .first()
      .click();
    cy.get('[data-test="product-price"]').then((el) => {
      const productPrice = +el.text().split(' ')[1].split(',').join('');
      cy.findByRole('button', { name: /add to cart/i }).click();
      cy.get('@cartButton').click();
      cy.findByRole('button', { name: '+' }).click();
      cy.get('[data-test="cart-total"]').then((el) => {
        const updatedPrice = +el.text().split(' ')[1].split(',').join('');
        expect(updatedPrice).to.equal(productPrice * 2);
      });
    });
  });
});
