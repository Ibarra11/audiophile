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
        productsCpy[productIndex].amount += action.payload.product.amount;
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

    // case REMOVE_PRODUCT: {
    //   if (action.payload && action.payload.id && cart.size > 0) {
    //     const product = cart[action.payload.id];
    //     if (product.count === 1) {
    //       const cartCpy = { ...cart };
    //       delete cartCpy[action.payload.id];
    //       return cartCpy;
    //     } else {
    //       return {
    //         ...cart,
    //         [action.payload.id]: {
    //           ...cart[action.payload.id],
    //           count: product.count - 1,
    //         },
    //       };
    //     }
    //   }
    //   return cart;
    // }
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
