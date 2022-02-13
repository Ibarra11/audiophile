import { ShoppingCartReducer } from '../index';
import { ActionTypes } from '../../shared/types';
import Products from '../../data/index';
let cart;

const clearCart = () => {
  cart = {
    products: [],
    size: 0,
    total: 0,
  };
};

const addCart = (productCart, prodcutType, amount) => {
  return ShoppingCartReducer(productCart, {
    type: ActionTypes.ADD_PRODUCT,
    payload: { product: { ...prodcutType, amount } },
  });
};

const decrementItemFromCart = (productCart) => {
  return ShoppingCartReducer(productCart, {
    type: ActionTypes.REMOVE_PRODUCT,
    payload: { id: Products.headphones[0].id },
  });
};

const emptyCart = (productCart) => {
  return ShoppingCartReducer(productCart, {
    type: ActionTypes.REMOVE_ALL_PRODUCTS,
  });
};

describe('Shopping Cart Reducer', () => {
  beforeEach(() => {
    clearCart();
  });

  test('Should add one item to the cart', () => {
    const cartResult = ShoppingCartReducer(cart, {
      type: ActionTypes.ADD_PRODUCT,
      payload: { product: { ...Products.headphones[0], amount: 1 } },
    });
    expect(cartResult.size).toBe(1);
  });
  test('Should increment the amount of a product if it is already in the cart', () => {
    const cart1 = addCart(cart, Products.headphones[0], 1);
    const cart2 = addCart(cart1, Products.headphones[0], 1);
    expect(cart2.products[0].amount).toBe(2);
  });
  test('Should decrement the amount of a product if it is greater than one', () => {
    const cart1 = addCart(cart, Products.headphones[0], 2);
    const cart2 = decrementItemFromCart(cart1);
    expect(cart2.products[0].amount).toBe(1);
  });
  test('Should remove the item from the cart if the product amount is 1', () => {
    const cart1 = addCart(cart, Products.headphones[0], 1);
    const cart2 = decrementItemFromCart(cart1);
    expect(cart2.size).toBe(0);
  });
  test('Should remove all products from the cart', () => {
    const cart1 = addCart(cart, Products.headphones[0], 1);
    const cart2 = addCart(cart1, Products.headphones[1], 1);
    const cart3 = addCart(cart2, Products.speakers[0], 1);
    const cartResult = emptyCart(cart3);
    expect(cartResult.size).toBe(0);
  });
});
