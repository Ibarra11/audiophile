import React, { ReactNode } from 'react';
import { createContext, useContext, useReducer } from 'react';
import { ShoppingCartReducer } from '../reducer';
import { Cart, Dispatch } from '../shared/types';

const ShoppingCartContext = createContext<Cart | null>(null);

const ShoppingCartDispatchContext = createContext<Dispatch | null>(null);
const emptyCart = {
  products: [],
  size: 0,
  total: 0,
} as Cart;
const ShoppingCartProvider = ({
  children,
  defaultCart = emptyCart,
}: {
  children: ReactNode;
  defaultCart?: Cart;
}) => {
  const [cart, dispatch] = useReducer(ShoppingCartReducer, defaultCart);
  return (
    <ShoppingCartContext.Provider value={cart}>
      <ShoppingCartDispatchContext.Provider value={dispatch}>
        {children}
      </ShoppingCartDispatchContext.Provider>
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;

export function useCart() {
  const context = useContext(ShoppingCartContext);
  if (context == null) {
    throw new Error(
      'useCart must be used within a ShoppingCart Context provider',
    );
  }
  return context;
}

export function useCartDispatch() {
  const context = useContext(ShoppingCartDispatchContext);
  if (context == null) {
    throw new Error(
      'useCartDispatch must be used within a ShoppingCartDispatch Context provider',
    );
  }
  return context;
}
