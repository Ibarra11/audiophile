import { Cart, Actions, ActionTypes } from '../shared/types';

export function ShoppingCartReducer(cart: Cart, action: Actions): Cart {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT: {
      const { product } = action.payload;
      const productIndex = cart.products.findIndex(
        (cartProduct) => cartProduct.id === product.id,
      );
      if (productIndex >= 0) {
        const productsCpy = [...cart.products];

        productsCpy[productIndex] = {
          ...productsCpy[productIndex],
          amount: productsCpy[productIndex].amount + product.amount,
        };
        return {
          products: productsCpy,
          size: cart.size + product.amount,
          total: cart.total + product.amount * product.price,
        };
      } else {
        return {
          products: [...cart.products, { ...product }],
          size: cart.size + product.amount,
          total: cart.total + product.amount * product.price,
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
          total: cart.total - productCpy.price,
        };
      } else {
        let cartCpy = [...cart.products];
        const product = cartCpy.splice(productIndex, 1)[0];
        console.log(product);
        return {
          products: cartCpy,
          size: cart.size - 1,
          total: cart.total - product.price,
        };
      }
    }
    case ActionTypes.REMOVE_ALL_PRODUCTS: {
      if (cart.size > 0) {
        return { products: [], size: 0, total: 0 };
      }
      return cart;
    }
    default: {
      const _exhaustiveCheck: never = action;
      return cart;
    }
  }
}
