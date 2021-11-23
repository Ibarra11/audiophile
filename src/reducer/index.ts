import { createScanner } from 'typescript';
import Products from '../data';
import { Cart, Actions, ActionTypes } from '../shared/types';

export function ShoppingCartReducer(cart: Cart, action: Actions): Cart {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT: {
      const { id } = action.payload.product;
      const productIndex = cart.products.findIndex(
        (product) => product.id === id,
      );
      if (productIndex >= 0) {
        const productsCpy = [...cart.products];

        productsCpy[productIndex] = {
          ...productsCpy[productIndex],
          amount:
            productsCpy[productIndex].amount +
            action.payload.product.amount,
        };
        return {
          products: productsCpy,
          size: cart.size + action.payload.product.amount,
        };
      } else {
        return {
          products: [...cart.products, { ...action.payload.product }],
          size: cart.size + action.payload.product.amount,
        };
      }
    }

    case ActionTypes.REMOVE_PRODUCT: {
      const { id } = action.payload;
      const productIndex = cart.products.findIndex(
        (product) => product.id === id,
      );
      if (cart.products[productIndex].amount > 1) {
        let cartCpy = [...cart.products];
        let productCpy = { ...cartCpy[productIndex] };
        productCpy.amount--;
        cartCpy[productIndex] = productCpy;
        return {
          products: cartCpy,
          size: cart.size - 1,
        };
      } else {
        let cartCpy = [...cart.products];
        cartCpy.splice(productIndex, 1);
        return {
          products: cartCpy,
          size: cart.size - 1,
        };
      }
    }
    case ActionTypes.REMOVE_ALL_PRODUCTS: {
      if (cart.size > 0) {
        return { products: [], size: 0 };
      }
      return cart;
    }
    default: {
      const _exhaustiveCheck: never = action;
      return cart;
    }
  }
}
