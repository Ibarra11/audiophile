import React, { ReactNode } from 'react';
import { createContext, useContext, useReducer } from 'react';
import { ShoppingCartReducer } from '../reducer';
import { Cart, Actions } from '../shared/types';

const ShoppingCartContext = createContext<Cart | null>(null);

type Dispatch = (action: Actions) => void;
const ShoppingCartDispatchContext = createContext<Dispatch | null>(null);

const ShoppingCartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, dispatch] = useReducer(ShoppingCartReducer, {
    products: [],
    size: 0,
  });
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
